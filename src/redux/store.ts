import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Create the Redux store
export const store = configureStore({
  reducer: {}, // Add all your reducers here
});

// Setup listeners for refetch behaviors
setupListeners(store.dispatch);

//Define RootState and AppDispacth types.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;