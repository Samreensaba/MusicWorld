/** @format */
/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PeopleFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import "../css/Artist.css";
import AlbumCard from "./AlbumCard";

const Artist = () => {
  const [artist, setArtist] = useState([]);
  const [songs, setSongs] = useState([]);

  const artistId = useParams().id;

  useEffect(() => {
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistId]);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const artist = await response.json();
        console.log(artist);
        setArtist(artist);

        const trackData = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
            },
          }
        );
        if (trackData.ok) {
          const allTracks = await trackData.json();
          console.log(allTracks);
          setSongs(allTracks.data);
          console.log(songs);
        } else {
          console.log("ERROR!!");
        }
      } else {
        console.log("ERROR!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <div className="mt-5">
            <img
              className="artist-img mb-3"
              src={artist.picture_medium}
              alt="artist-img"
            />
            <h2 className="titleMain mb-2">{artist.name}</h2>
            <div id="followers">
              {artist.nb_fan} <PeopleFill />
            </div>
            <div
              className="d-flex justify-content-center mt-3"
              id="button-container">
              <button
                className="btn btn-success mr-2 mainButton"
                id="playButton">
                <span>Play</span>
              </button>
              <button
                className="btn btn-outline-light mainButton"
                id="followButton">
                FOLLOW
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <div className="mt-4 d-flex justify-content-center ">
            <h2 className="text-white text-center font-weight-bold">Songs</h2>
          </div>
          <div className="pt-5 mb-5 row-mar">
            <Row className="row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks">
              {songs?.map((song) => (
                <AlbumCard song={song} key={song.id} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Artist;
