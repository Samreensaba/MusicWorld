/** @format */

import { Col, Row } from "react-bootstrap";
import PremiumOptions from "../components/PremiumOptions";
import SideBar from "../components/SideBar";
import "../css/PremiumPage.css";

const PremiumPage = () => {
  return (
    <Row className="premium-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10}>
        <PremiumOptions />
      </Col>
    </Row>
  );
};

export default PremiumPage;
