/** @format */
/* import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  return (
    <div className="player">
      <AudioPlayer className="audio mb-5" controls />
    </div>
  );
};

export default Player;
 */

/** @format */

import React from "react";
import { connect } from "react-redux";
import { MDBIcon } from "mdbreact";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../css/Player.css";

const mapStateToProps = (state) => ({
  currentSong: state.playReducer.currentSong,

  /*   selectedSong: state.selectSongReducer.selectedSong,
   */
  selectedSongId: state.selectSongReducer.selectedSongId,
  songs: state.favouritesReducer.songs,
});

const mapDispatchToProps = (dispatch) => ({
  /*  addToCurrentSong: (song) => dispatch(playSong(song)), */
});

const Player = ({ currentSong, selectedSongId, songs }) => {
  const params = useParams();
  const albumId = params.id;
  console.log(albumId);

  const [trackArray, setTrackArray] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
      );

      let trackList = await response.json();
      setAlbumName(trackList.title);
      console.log(trackList);
      setTrackArray(trackList.tracks.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchTrackList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function convertDuration(time) {
    let time2 = Math.floor(time % 60);

    if (time2.toString().length < 2) {
      time2 = time2 * 10;
    }
    let length = Math.floor(time / 60) + ":" + time2;
    return length;
  }
  console.log(currentSong);

  return (
    <div className="footerdiv player playbar">
      <div id="footerArtist" className="text-white ">
        {currentSong ? (
          <div className="footerSong d-flex text-center">
            <span className="footerTitle mt-3 ml-3">
              <strong>{currentSong.title}</strong>
            </span>
            <Link
              className="favalbumlinkfooterright text-white"
              to={"/Album/" + currentSong.albumId}>
              <button id="footerButton">
                <MDBIcon icon="record-vinyl" className="footerAlbum" />
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="footerSong ml-2">
              <p>Blond</p>
              <p className="card-text my-1 ml-2" id="footerArtist">
                <small>Frank Ocean</small>
              </p>
            </div>
          </>
        )}
      </div>
      <div className="footermaindiv px-0 d-flex">
        {currentSong && (
          <AudioPlayer className="audio" src={currentSong.preview} controls />
        )}

        {currentSong.album && (
          <div className="footerCover text-white">
            <div className="col-lg-12 mr-3">
              <Link
                className="favalbumlinkfooter text-white"
                to={"/album/" + currentSong.albumId}>
                <p className="currentSong">{currentSong.album.title}</p>
              </Link>
            </div>
            <img
              src={currentSong.album.cover}
              alt=""
              className="img-fluid short-img"
              id="footercover"
              height="67rem"
              width="67rem"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
