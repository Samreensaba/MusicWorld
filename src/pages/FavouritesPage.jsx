/** @format */

import { Col, Row } from "react-bootstrap";
import Favourites from "../components/Favourites";
import SideBar from "../components/SideBar";
import "../css/FavouritesPage.css";

const FavouritesPage = () => {
  return (
    <Row className="favourites-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10}>
        <Favourites />
      </Col>
    </Row>
  );
};

export default FavouritesPage;
