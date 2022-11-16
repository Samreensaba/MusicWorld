/** @format */

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const PLAY_SONG = "PLAY_SONG";
export const SONG_SELECTED_BY_ID = "SONG_SELECTED_BY_ID";
export const ADD_SONGS = "ADD_SONGS";

export const addToFav = (song) => ({
  type: ADD_TO_FAV,
  payload: song,
});

export const removeFromFav = (song) => ({
  type: REMOVE_FROM_FAV,
  payload: song,
});

export const addToPalylist = (song) => ({
  type: ADD_TO_PLAYLIST,
  payload: song,
});

export const removeFromPalylist = (song) => ({
  type: REMOVE_FROM_PLAYLIST,
  payload: song,
});

export const playSong = (song) => ({
  type: PLAY_SONG,
  payload: song,
});

export const selectSongById = (id) => ({
  type: SONG_SELECTED_BY_ID,
  payload: id,
});

export const getSongsAction = (searchInput) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          searchInput,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data;

        dispatch({
          type: ADD_SONGS,
          payload: songs, // this is the array of 6 books! travelling to the reducer
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
