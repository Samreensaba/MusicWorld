/** @format */

import { Carousel } from "react-bootstrap";
import vikram from "../assets/Cbg2.jpg";
import baahu from "../assets/baa.jpg";
import bnaik from "../assets/Cbg4.jpg";
import "../css/Carousel.css";
import { useNavigate } from "react-router-dom";

const CarouselComp = () => {
  const navigate = useNavigate();
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          onClick={() => navigate("/album/333712267")}
          className="d-block w-100 car-img"
          src={vikram}
          alt="First slide"
          style={{ height: "500px", width: "700px", borderRadius: "10px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          onClick={() => navigate("/album/67244662")}
          className="d-block w-100 car-img"
          src={baahu}
          alt="Second slide"
          style={{ height: "500px", width: "600px", borderRadius: "10px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          onClick={() => navigate("/album/301535327")}
          className="d-block w-100 car-img"
          src={bnaik}
          alt="Third slide"
          style={{ height: "500px", width: "600px", borderRadius: "10px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
