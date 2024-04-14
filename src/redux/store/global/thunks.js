import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../index";
import { errorHandler } from "../../helpers/errorHandler";

export const getAllCategories = createAsyncThunk(
  "global/getCategories",
  async (_, { rejectWithValue}) => {
    try {
      const response = await API.get("/categories");
      console.log("response", response);
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const getCategoryShops = createAsyncThunk(
  "global/getCategoryShops",
  async (payload, { rejectWithValue }) => {
    // payload => categoryId
    try {
      const response = await API.get(`/categories/${payload}`);
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);
export const searchShops = createAsyncThunk(
  "global/searchShops",
  async (payload, { rejectWithValue }) => {
    // payload => query
    try {
      const response = await API.get(`/search?query=${payload}`);
      console.log("searchShops", response);
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);
