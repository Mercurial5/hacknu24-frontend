// API
export { API } from "../api";

// store
export {
  store,
  persistor,
} from "./store";

// global
export {
  setCurrentCategory,
  clearSearchItems,
  setCurrentShop,
} from "./store/global/slice.js";
export {
  getAllCategories,
  searchShops,
  getCategoryShops,
} from "./store/global/thunks.js";