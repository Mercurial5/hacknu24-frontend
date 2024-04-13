import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  sendTestAnswers,
} from "./thunks";

const slice = createSlice({
  name: "profile",
  initialState: {
    user: {
      testResults: {},
      // testResults: { key: "key" },
      name: "Zaur",
      email: "zaurberd.work@gmail.com",
    },
    photo: "photo",
    isFetching: false,
    error: null,
  },
  reducers: {
    clearTestResults: (state) => {
      state.user.testResults = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(sendTestAnswers.fulfilled, (state, action) => {
        state.user.testResults = action.payload;
        console.log("state.user.testResults", state.user.testResults);
      })
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
export const { clearTestResults } = slice.actions;