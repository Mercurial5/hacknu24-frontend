import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./auth/slice.js";
import profileSlice from "./profile/slice.js";
import testSlice from "./test/slice.js";

const rootReducer = combineReducers({
  auth: authSlice,
  profile: profileSlice,
  test: testSlice,
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
