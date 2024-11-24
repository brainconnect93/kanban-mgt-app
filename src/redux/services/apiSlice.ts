import { db } from "@/components/app/utils/firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { getSession } from "next-auth/react";

// Create the firestore API using CreateApi
export const fireStoreApi = createApi({
  reducerPath: "firestoreApi", // Specifies the path for the reducer.
  baseQuery: fakeBaseQuery(), // utilizes fakeBaseQuery because Firebase has no traditional RESTAPI endpoint
  tagTypes: ["Tasks"], // Defines tag types for caching purposes
  endpoints: (builder) => ({
    fetchDataFromDb: builder.query<{ [key: string]: any }[], void>({
      // Utilizes builder.query for making requestd; builder.mutation can be used for CRUD operations
      async queryFn() {
        // Employs queryFn since we are not fetching data from a conventional API;
        // This allows us to include arbitrary code, as long as we return our data in the { data: results } format

        try {
          const session = await getSession();
          if (session?.user) {
            const { user } = session;
            const ref = collection(db, `users/${user.email}/tasks`);
            const querySnapshot = await getDocs(ref);
            return { data: querySnapshot.docs.map((doc) => doc.data()) };
          }
          return { data: [] };
            // Data must be returned in this format using queryFn
        } catch (e) {
          return { error: e }
        }
      },
      providesTags: ["Tasks"], // Specifies tags for caching
    }),

    // endpoint for CRUD actions
    updateBoardToDb: builder.mutation({
      async queryFn(boardData) {
        try {
          const session = await getSession();
          if (session?.user) {
            const { user } = session;
            const ref = collection(db, `users/${user.email}/tasks`);
            const querySnapshot = await getDocs(ref);
            const boardId = querySnapshot.docs.map((doc) => {
              return doc.id;
            });
            await updateDoc(doc(db, `users/${user.email}/tasks/${boardId}`), {
              boards: boardData,
            });
          }
          return { data: null };
        } catch (e) {
          return { error: e };
        }
      },
      invalidatesTags: ["Tasks"], // this will be used to invalidate the initially fetched data. 
      // Data will have to be refetched once this enpoint has been called
    }),    
  }),
});

// Export hooks for using the created endpoint.
export const { useFetchDataFromDbQuery, useUpdateBoardToDbMutation } = fireStoreApi;
