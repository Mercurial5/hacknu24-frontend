import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    isFetching: false,
    error: null,
  },
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("auth/userLogin/fulfilled", (state) => {
          state.isAuth = true;
        },
      )
      .addCase("auth/userRegister/fulfilled", (state) => {
          state.isAuth = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isFetching = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isFetching = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isFetching = false;
        },
      );
  },
});

export default slice.reducer;
export const { userLogout } = slice.actions;
