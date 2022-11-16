/** @format */

import { Card, Col, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/PremiumOptions.css";

const PremiumOptions = () => {
  return (
    <Row className="premium">
      <Col>
        <Card className="mb-4 mx-auto">
          <Card.Body>
            <Card.Title>Individual</Card.Title>
            <Card.Subtitle className="mb-2" style={{ fontSize: "30px" }}>
              <b>€9.99/month</b>
            </Card.Subtitle>
            <Card.Text>
              <Check fontSize="25px" />
              Music without commercial breaks
            </Card.Text>
            <Card.Text>
              <Check fontSize="25px" />
              Listen to music anywhere - even offline
            </Card.Text>
          </Card.Body>
          <div className="mb-5">
            <Link to="/payment">
              <button className="sub-btn">Subscribe</button>
            </Link>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="mb-4 mx-auto">
          <Card.Body>
            <Card.Title>Duo</Card.Title>
            <Card.Subtitle className="mb-2" style={{ fontSize: "30px" }}>
              <b>€12.99/month</b>
            </Card.Subtitle>
            <Card.Text>
              <Check fontSize="25px" />2 Premium accounts for couples living
              under one roof
            </Card.Text>
            <Card.Text>
              <Check fontSize="25px" />
              Listen to music without commercial breaks
            </Card.Text>
          </Card.Body>
          <div className="mb-5">
            <button className="sub-btn">Subscribe</button>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="mb-4 mx-auto">
          <Card.Body>
            <Card.Title>Family</Card.Title>
            <Card.Subtitle className="mb-2" style={{ fontSize: "30px" }}>
              <b>€14.99/month</b>
            </Card.Subtitle>
            <Card.Text>
              <Check fontSize="25px" />6 Premium accounts for family members
              living together under one roof
            </Card.Text>
            <Card.Text>
              <Check fontSize="25px" /> Kids: a separate app specifically for
              kids
            </Card.Text>
          </Card.Body>
          <div className="mb-5">
            <button className="sub-btn">Subscribe</button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default PremiumOptions;
