import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the initial state for the slice
const initialState = {
  currentBoardName: "",
};

export const features = createSlice({
  // Name of the slice
  name: "features",
  initialState,
  // Functions that update the initialState are written inside the reducers object
  reducers: {
    // This function updates the board name when called.
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.currentBoardName = action.payload;
    },
  },
});

// Export the functions defined inside the reducers here
export const { setPageTitle } = features.actions;

// Selector function to retrieve the current board name from the state
export const getPageTitle = (state: RootState) => state.features.currentBoardName;

// Export the reducer for use in the Redux store
export default features.reducer;