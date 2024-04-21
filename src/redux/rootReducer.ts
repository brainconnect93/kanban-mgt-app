import { combineReducers } from "@reduxjs/toolkit";
import { fireStoreApi } from "./services/apiSlice";
import featuresReducer from './features/appSlice'

export const rootReducer = combineReducers({

  // Add the features slice here
  features: featuresReducer,
  [fireStoreApi.reducerPath]: fireStoreApi.reducer,
})