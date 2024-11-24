import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the initial state for the slice
const initialState = {
  currentBoardName: "",
  isAddAndEditBoardModal: {
    isOpen: false,
    variant: "",
  },
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

    openAddAndEditBoardModal: (state, { payload }) => {
      state.isAddAndEditBoardModal.isOpen = true;
      state.isAddAndEditBoardModal.variant = payload;
    },

    closeAddAndEditBoardModal: (state) => {
      state.isAddAndEditBoardModal.isOpen = false;
      state.isAddAndEditBoardModal.variant = "";
    },
  },
});

// Export the functions defined inside the reducers here
export const { 
  setPageTitle,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal
} = features.actions;

// Selector function to retrieve the current board name from the state
export const getPageTitle = (state: RootState) => state.features.currentBoardName;
export const getAddAndEditBoardModalValue = (state: RootState) => state.features.isAddAndEditBoardModal.isOpen;
export const getAddAndEditBoardModalVariantValue = (state: RootState) => state.features.isAddAndEditBoardModal.variant;

// Export the reducer for use in the Redux store
export default features.reducer;