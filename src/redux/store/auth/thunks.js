import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../index";
import { errorHandler } from "../../helpers/errorHandler";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (payload, { rejectWithValue }) => {
    // payload => { username, password }
    try {
      console.log("payload", payload);
      const response = await API.post("/users/login", payload);
      localStorage.setItem("accessToken", response.data.access_token);
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (payload, { rejectWithValue }) => {
    // payload => { email, name, password, repeatPassword }
    try {
      console.log("payload", payload);
      const response = await API.post("/auth/register", payload);
      localStorage.setItem("accessToken", response.data.access_token);
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await API.get("/users/get/1");
    } catch (error) {
      return errorHandler(error, rejectWithValue, dispatch);
    }
  },
);
