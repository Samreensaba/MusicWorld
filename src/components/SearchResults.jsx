/** @format */

import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const SearchResults = () => {
  const fetchedSongs = useSelector((state) => state.songsReducer.fetchedSongs);

  return (
    <>
      {fetchedSongs.length > 0 && (
        <>
          <h2 className="text-center mt-4">Search Results</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {fetchedSongs &&
              fetchedSongs.map((song) => (
                <AlbumCard song={song} key={song.id} />
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default SearchResults;
