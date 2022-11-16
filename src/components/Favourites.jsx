/** @format */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { removeFromFav } from "../redux/actions";
import "../css/Favourites.css";

const Favourites = () => {
  const songs = useSelector((state) => state.favouritesReducer.songs);

  const dispatch = useDispatch();

  return (
    <>
      <h2 className="my-4">Favourites</h2>
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
                  <HeartFill
                    color="green"
                    fontSize="25px"
                    onClick={() => dispatch(removeFromFav(track))}
                  />
                </p>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Favourites;
