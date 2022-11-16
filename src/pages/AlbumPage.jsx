/** @format */

import { Col, Row } from "react-bootstrap";
import Album from "../components/Album";
import Player from "../components/Player";
import SideBar from "../components/SideBar";
import "../css/AlbumPage.css";

const AlbumPage = () => {
  /* const [searchResults, setSearchResults] = useState([]);

  const fetchMusic = async (query) => {
    setSearchResults([]);
    if (query.length > 2) {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
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
          console.log(songs);

          setSearchResults(songs);
        } else {
          console.log("ERROR !!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }; */
  return (
    <>
      <Row className="album-page">
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10} className="col-pad">
          <Album />
        </Col>
      </Row>
      <Row>
        <Col md={10} className="player-sec">
          <Player />
        </Col>
      </Row>
    </>
  );
};

export default AlbumPage;
