import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fireStoreApi } from "./services/apiSlice";
import { rootReducer } from "./rootReducer";

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fireStoreApi.middleware) // Add all your reducers here
});

// Setup listeners for refetch behaviors
setupListeners(store.dispatch);

//Define RootState and AppDispacth types.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;