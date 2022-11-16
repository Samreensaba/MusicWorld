/** @format */

import { PLAY_SONG } from "../actions";

const initialState = {
  currentSong: [],
};

const playReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PLAY_SONG:
      return {
        ...state,
        currentSong: payload,
      };

    default:
      return state;
  }
};

export default playReducer;
