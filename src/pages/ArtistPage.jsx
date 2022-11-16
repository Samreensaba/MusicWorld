/** @format */

import { Col, Row } from "react-bootstrap";
import Artist from "../components/Artist";
import SideBar from "../components/SideBar";
import "../css/ArtistPage.css";

const ArtistPage = () => {
  return (
    <Row className="artist-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10} className="col-pad">
        <Artist />
      </Col>
    </Row>
  );
};

export default ArtistPage;
