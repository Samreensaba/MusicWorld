/** @format */

import { SONG_SELECTED_BY_ID } from "../actions";

const initialState = {
  selectedSong: [],
};

const selectSongReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SONG_SELECTED_BY_ID:
      return {
        ...state,
        selectedSong: payload,
      };

    default:
      return state;
  }
};

export default selectSongReducer;
