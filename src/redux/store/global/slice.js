import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getCategoryShops,
  searchShops,
} from "./thunks.js";

const initialState = {
  categories: [],
  currentCategory: null,
  currentCategoryShops: [],
  currentShop: null,
  searchItems: [],
  isFetching: false,
  error: null,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCurrentCategory(state, action) {
      // action.payload => categoryId
      state.currentCategory = state.categories.find(({ id }) => id === +action.payload);
    },
    setCurrentShop(state, action) {
      // action.payload => shopId
      state.currentShop = state.currentCategoryShops.find(({ id }) => id === +action.payload);
    },
    clearSearchItems(state) {
      state.searchItems = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        console.log(state.categories);
      })
      .addCase(getCategoryShops.fulfilled, (state, action) => {
        state.currentCategoryShops = action.payload;
        console.log(state.currentCategoryShops);
      })
      .addCase(searchShops.fulfilled, (state, action) => {
        state.searchItems = action.payload;
        console.log("state.searchItems", state.searchItems);
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
export const {
  setCurrentCategory,
  clearSearchItems,
  setCurrentShop,
} = slice.actions;
