import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the initial state for the slice
const initialState = {
  currentBoardName: "",
  isAddAndEditBoardModal: {
    isOpen: false,
    variant: "",
  },
  isAddAndEditTaskModal: {
    isOpen: false,
    variant: "",
    title: "",
    index: -1,
    name: "" 
  },
  isDeleteBoardAndTaskModal: {
    isOpen: false,
    variant: "",
    title: "",
    status: "",
    index: -1,
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

    openAddAndEditTaskModal: (state, { payload }) => {
      state.isAddAndEditTaskModal.isOpen = true;
      state.isAddAndEditTaskModal.variant = payload.variant;
      state.isAddAndEditTaskModal.title = payload.title;
      state.isAddAndEditTaskModal.index = payload.index;
      state.isAddAndEditTaskModal.name = payload.name;
    },

    closeAddAndEditTaskModal: (state) => {
      state.isAddAndEditTaskModal.isOpen = false;
      state.isAddAndEditTaskModal.variant = "";
      state.isAddAndEditTaskModal.title = "";
      state.isAddAndEditTaskModal.index = -1;
      state.isAddAndEditTaskModal.name = "";
    },

    openDeleteBoardAndTaskModal: (state, { payload }) => {
      state.isDeleteBoardAndTaskModal.isOpen = true;
      state.isDeleteBoardAndTaskModal.variant = payload.variant;
      state.isDeleteBoardAndTaskModal.title = payload.title;
      state.isDeleteBoardAndTaskModal.status = payload.status;
      state.isDeleteBoardAndTaskModal.index = payload.index;
    },

    closeDeleteBoardAndTaskModal: (state) => {
      state.isDeleteBoardAndTaskModal.isOpen = false;
      state.isDeleteBoardAndTaskModal.variant = "";
      state.isDeleteBoardAndTaskModal.title = "";
      state.isDeleteBoardAndTaskModal.status = "";
      state.isDeleteBoardAndTaskModal.index = -1;
    },
  },
});

// Export the functions defined inside the reducers here
export const { 
  setPageTitle,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal,
  openAddAndEditTaskModal,
  closeAddAndEditTaskModal,
  openDeleteBoardAndTaskModal,
  closeDeleteBoardAndTaskModal,
} = features.actions;

// Selector function to retrieve the current board name from the state
export const getPageTitle = (state: RootState) => state.features.currentBoardName;
export const getAddAndEditBoardModalValue = (state: RootState) => state.features.isAddAndEditBoardModal.isOpen;
export const getAddAndEditBoardModalVariantValue = (state: RootState) => state.features.isAddAndEditBoardModal.variant;
export const getAddAndEditTaskModalValue = (state: RootState) => state.features.isAddAndEditTaskModal.isOpen;
export const getAddAndEditTaskModalVariantValue = (state: RootState) => state.features.isAddAndEditTaskModal.variant;
export const getAddAndEditTaskModalTitleValue = (state: RootState) => state.features.isAddAndEditTaskModal.title;
export const getAddAndEditTaskModalIndexValue = (state: RootState) => state.features.isAddAndEditTaskModal.index;
export const getAddAndEditTaskModalNameValue = (state: RootState) => state.features.isAddAndEditTaskModal.name;
export const getDeleteBoardAndTaskModalValue = (state: RootState) => state.features.isDeleteBoardAndTaskModal.isOpen;
export const getDeleteBoardAndTaskModalVariantValue = (state: RootState) => state.features.isDeleteBoardAndTaskModal.variant;
export const getDeleteBoardAndTaskModalTitleValue = (state: RootState) => state.features.isDeleteBoardAndTaskModal.title;
export const getDeleteBoardAndTaskModalStatusValue = (state: RootState) => state.features.isDeleteBoardAndTaskModal.status;
export const getDeleteBoardAndTaskModalIndexValue = (state: RootState) => state.features.isDeleteBoardAndTaskModal.index;

// Export the reducer for use in the Redux store
export default features.reducer;