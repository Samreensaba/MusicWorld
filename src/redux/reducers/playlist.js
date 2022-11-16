/** @format */

import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../actions";

const initialState = {
  songs: [],
};

const playlistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        songs: [...state.songs, payload],
      };

    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== payload.id),
      };
    default:
      return state;
  }
};

export default playlistReducer;
