/** @format */
import { Link } from "react-router-dom";
import "../css/AlbumCard.css";

const AlbumCard = ({ song }) => {
  return (
    <div className="col text-center " id={song.id}>
      <Link to={"/album/" + song.album.id}>
        <div>
          <img
            className="img-fluid box"
            src={song.album.cover_medium}
            alt="1"
          />
        </div>
      </Link>
      <p className="mt-3">
        <Link to={"/album/" + song.album.id}>
          <span className="details">Album:&nbsp;</span>
          <span className="details">
            "
            {song.album.title.length < 16
              ? song.album.title
              : song.album.title.substring(0, 16) + "..."}
            "
          </span>
          <br />
        </Link>
        <Link to={"/artist/" + song.artist.id} id="detail-link">
          <span className="details">Artist:&nbsp;</span>
          <span className="details">{song.artist.name}</span>
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
