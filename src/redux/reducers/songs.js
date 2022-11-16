/** @format */

import { ADD_SONGS } from "../actions";

const initialState = {
  fetchedSongs: [],
};

const songsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SONGS: {
      return {
        ...state,
        fetchedSongs: [...payload],
      };
    }

    default:
      return state;
  }
};

export default songsReducer;
