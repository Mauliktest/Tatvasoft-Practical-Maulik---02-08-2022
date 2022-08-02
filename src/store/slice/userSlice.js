import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.userData = payload;
    },
    removeData: (state, { payload }) => {
      state.userData = {};
    },
  },
});

export const { addData, removeData } = userSlice.actions;
export const getAllData = (state) => state.userData.userData;

export default userSlice.reducer;
