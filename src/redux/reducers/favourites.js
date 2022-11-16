/** @format */

import { ADD_TO_FAV } from "../actions";
import { REMOVE_FROM_FAV } from "../actions";

const initialState = {
  songs: [],
};

const favouritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FAV:
      return {
        ...state,
        songs: [...state.songs, payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== payload.id),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
