/** @format */

import React, { useEffect, useState } from "react";
import Song from "./Song";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../css/Album.css";

const Album = () => {
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState([]);

  const albumId = useParams().id;

  useEffect(() => {
    fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlbum = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const album = await response.json();
        console.log(album);
        setAlbum(album);
        setSongs(album.tracks.data);
        console.log(songs);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      {album.cover && (
        <Col md={3} className="pt-5 text-center" id="img-container">
          <img
            src={album.cover_medium}
            className="card-img img-fluid "
            alt="Album"
          />
          <div className="mt-4 text-center">
            <p className="album-title text-light">{album.title}</p>
          </div>
          <div className="text-center text-light">
            <p className="artist-name">
              {album.artist ? album.artist.name : ""}
            </p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </Col>
      )}
      <Col md={9} className="p-5 song-container">
        <div className="mb-5" id="trackList">
          {songs.length > 0 &&
            songs.map((song) => (
              <Song track={song} currentSong={song} key={song.id} />
            ))}
        </div>
      </Col>
    </Row>
  );
};

export default Album;
