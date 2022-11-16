/** @format */

import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/AboutPage.css";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiRedux,
  SiCss3,
  SiHtml5,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Picture from "../assets/photo.png";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <Row className="about-page">
      <Col className="col-pad">
        <Container>
          <h1 className="title">Ganesh Sai Devarakonda</h1>
          <h3 className="sub-title"> Frontend Web Developer</h3>
          <img src={Picture} alt="1" className="profile-pic" />
          <div className="iconcontainerabout">
            <h1 className="skills">Skillset</h1>
            <SiTypescript className="abouticonts" />
            <SiJavascript className="abouticonjs" />
            <SiReact className="abouticonreact" />
            <SiRedux className="abouticonredux" />
            <SiCss3 className="abouticoncss" />
            <SiHtml5 className="abouticonhtml" />
          </div>
          <div className="contactcontainerabout">
            <p className="loginheading">Contact Me</p>
            <SiLinkedin className="abouticoncontact" />
            https://www.linkedin.com/in/ganesh29/
            <br />
            <SiGithub className="abouticoncontact" />
            https://github.com/Ganeshsai1346 <br />
            <MdEmail className="abouticoncontact" />
            ganeshsai1346@gmail.com
          </div>
          {/* <div className="mt-5">
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
          </div> */}
          <div>
            <Button id="aboutbtn" onClick={() => navigate("/login")}>
              Go Back
            </Button>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default AboutPage;
