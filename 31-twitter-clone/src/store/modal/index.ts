import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    name: "",
    data: false,
  },
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal = action.payload;
    },
    _removeModal: (state) => {
      state.modal = {
        name: "",
        data: false,
      };
    },
  },
});

export const { _setModal, _removeModal } = modal.actions;
export default modal.reducer;
