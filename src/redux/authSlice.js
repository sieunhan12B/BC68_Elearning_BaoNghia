import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/util";

const initialState = {
  infoUser: getLocalStorage("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValueUser: (state, action) => {
      state.infoUser = action.payload;
    },
    getInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
  },
});

export const { getInfoUser, setValueUser } = authSlice.actions;

export default authSlice.reducer;
