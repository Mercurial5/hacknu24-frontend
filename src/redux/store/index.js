import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import globalSlice from "./global/slice.js";

const rootReducer = combineReducers({
  global: globalSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

export {
  store,
  persistor,
}
