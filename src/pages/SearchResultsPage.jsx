/** @format */

import { Col, Row } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
import SideBar from "../components/SideBar";
import "../css/SearchResultsPage.css";

const SearchResultsPage = () => {
  return (
    <Row className="serach-page">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={10}>
        <SearchResults />
      </Col>
    </Row>
  );
};

export default SearchResultsPage;
