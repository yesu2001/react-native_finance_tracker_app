import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUser: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isUser = true;
    },
    logout: (state, action) => {
      state.user = {};
      state.isUser = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
