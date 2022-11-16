/** @format */

import { Col, Row } from "react-bootstrap";
import PlayList from "../components/PlayList";
import SideBar from "../components/SideBar";
import "../css/PlayListPage.css";

const PlayListPage = () => {
  return (
    <Row className="playlist-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10}>
        <PlayList />
      </Col>
    </Row>
  );
};

export default PlayListPage;
