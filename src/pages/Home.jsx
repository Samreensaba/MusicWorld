/** @format */

import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import "../css/Home.css";

const Home = ({ logout, user }) => {
  const [searchResults, setSearchResults] = useState([]);

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
  };

  return (
    <Row className="whole-page">
      <Col md={3}>
        <SideBar />
      </Col>
      <Col md={8} className="mt-5">
        <MainPage logout={logout} user={user} />
      </Col>
    </Row>
  );
};

export default Home;
