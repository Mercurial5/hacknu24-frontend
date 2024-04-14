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

export const getOffers = createAsyncThunk(
  "global/getOffers",
  async (payload, { rejectWithValue }) => {
    try {
      const {
        categoryName,
        shopId,
      } = payload;
      const response = await API.get(`/offers/${shopId}`);

      const data = response.data.filter((item) => item.category === categoryName);

      let maxBonus = Math.max(...data.map((item) => item.bonus));

      // Set is_beneficial key based on bonus value
      data.forEach((item) => {
        item.is_beneficial = item.bonus === maxBonus;
      });
      console.log("getOffers", data);
      return data;
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
