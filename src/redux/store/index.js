/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistStore, persistReducer } from "redux-persist";
import favouritesReducer from "../reducers/favourites";
import playlistReducer from "../reducers/playlist";
import playReducer from "../reducers/play";
import selectSongReducer from "../reducers/selectSong";
import songsReducer from "../reducers/songs";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // with this we're going to persist the whole store
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SUPER_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favouritesReducer,
  playlistReducer,
  playReducer,
  selectSongReducer,
  songsReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
