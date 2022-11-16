/** @format */
import { HeartFill, Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToPalylist,
  playSong,
  removeFromFav,
  removeFromPalylist,
} from "../redux/actions";
import "../css/Song.css";
import { useEffect } from "react";

const Song = ({ track, currentSong }) => {
  let songs = useSelector((state) => state.favouritesReducer.songs);

  const dispatch = useDispatch();

  const isFav = songs.find((s) => s.id === track.id) ? true : false;

  const toggleFav = () => {
    isFav ? dispatch(removeFromFav(track)) : dispatch(addToFav(track));
  };

  let tracks = useSelector((state) => state.playlistReducer.songs);

  const isAdd = tracks.find((s) => s.id === track.id) ? true : false;

  const toggleAdd = () => {
    isAdd
      ? dispatch(removeFromPalylist(track))
      : dispatch(addToPalylist(track));
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  useEffect(() => {
    console.log(tracks);
  }, [tracks]);
  return (
    <div
      className="py-3 text-dark text-left d-flex song-section"
      style={{ fontSize: "20px" }}>
      <span style={{ color: "white", paddingLeft: "30px" }}>
        {isFav ? (
          <HeartFill color="green" onClick={toggleFav} />
        ) : (
          <Heart color="white" onClick={toggleFav} />
        )}
      </span>
      <span
        className="card-title px-5 flex-grow-1"
        style={{ color: "white" }}
        onClick={() => dispatch(playSong(track))}>
        {track.title}
      </span>
      <small className="duration px-5" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      <span className="px-3 text-white playlist">
        {isAdd ? (
          <>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleAdd}>
              <path d="M15 6H3V8H15V6Z" fill="currentColor" />
              <path d="M15 10H3V12H15V10Z" fill="currentColor" />
              <path d="M3 14H11V16H3V14Z" fill="currentColor" />
              <path
                d="M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z"
                fill="currentColor"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleAdd}>
              <path d="M2 5H14V7H2V5Z" fill="currentColor" />
              <path d="M2 9H14V11H2V9Z" fill="currentColor" />
              <path d="M10 13H2V15H10V13Z" fill="currentColor" />
              <path
                d="M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z"
                fill="currentColor"
              />
            </svg>
          </>
        )}
      </span>
      <span className="px-5 text-white ">
        <a draggable="false" href={track.link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </a>
      </span>
    </div>
  );
};

export default Song;
