/** @format */

import { Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";
import StripeContainer from "../components/StripeContainer";
import "../css/PaymentPage.css";

const PaymentPage = () => {
  return (
    <Row className="payment-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10} className="stripe">
        <StripeContainer />
      </Col>
    </Row>
  );
};

export default PaymentPage;
