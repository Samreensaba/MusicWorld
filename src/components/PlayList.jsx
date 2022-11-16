/** @format */

import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromPalylist } from "../redux/actions";

const PlayList = () => {
  const songs = useSelector((state) => state.playlistReducer.songs);

  const dispatch = useDispatch();
  return (
    <>
      <h2 className="my-4">Play Lists</h2>
      <Row className="row-pad">
        {songs &&
          songs.map((track, i) => (
            <Col md={3} className="mt-2" key={track.id}>
              <div className="text-center" id={track.id}>
                <Link to={"/album/" + track.album.id}>
                  <div>
                    <img
                      className="img-fluid box box-img"
                      src={track.album.cover_medium}
                      alt="1"
                    />
                  </div>
                </Link>

                <p className="mt-2 mb-1">
                  <Link to={"/album/" + track.album.id}>
                    <span className="details">Album:&nbsp;</span>
                    <span className="details">
                      "
                      {track.album.title.length < 16
                        ? track.album.title
                        : track.album.title.substring(0, 16) + "..."}
                      "
                    </span>
                    <br />
                  </Link>
                  <Link to={"/artist/" + track.artist.id} id="detail-link">
                    <span className="details">Artist:&nbsp;</span>
                    <span className="details">{track.artist.name}</span>
                  </Link>
                </p>
                <p className="mt-0">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => dispatch(removeFromPalylist(track))}>
                    <path d="M15 6H3V8H15V6Z" fill="currentColor" />
                    <path d="M15 10H3V12H15V10Z" fill="currentColor" />
                    <path d="M3 14H11V16H3V14Z" fill="currentColor" />
                    <path
                      d="M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <HeartFill
                    color="green"
                    fontSize="25px"
                    onClick={() => dispatch(removeFromPalylist(track))}
                  /> */}
                </p>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default PlayList;
