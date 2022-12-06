import React, { useState } from "react";
import styled from "styled-components";
import {
  Carousel,
  Row,
  Col,
  Card,
  ListGroup,
  Container,
} from "react-bootstrap";
import iphoneWall from "../../Assets/iphoneWall.png";
import SamsungWall from "../../Assets/samsung.png";
import GoogleWall from "../../Assets/google.png";
import i13 from "../../Assets/i13promax.png";
import googleimg from "../../Assets/gp.jpg";
import samsungImg from "../../Assets/samsungA.jpeg";
import Quotes from "../Helpers/Quotes";
import ios16 from "../../Assets/ios16.png";
import { useNavigate } from "react-router-dom";
const PhoneRepair = () => {
  const navigate = useNavigate();
  const [iPhones, setIphones] = useState([
    {
      id: 1,
      title: "Iphone 13",
      img: i13,
    },
    {
      id: 2,
      title: "Iphone 12",
      img: i13,
    },
    {
      id: 3,
      title: "Iphone 11",
      img: i13,
    },
    {
      id: 3,
      title: "Iphone XR",
      img: i13,
    },
  ]);

  const [pixels, setGPixel] = useState([
    {
      id: 1,
      title: "Google Pixel 6",
      img: googleimg,
    },
    {
      id: 2,
      title: "Google pixel 5",
      img: googleimg,
    },
    {
      id: 3,
      title: "Google Pixel 4a",
      img: googleimg,
    },
    {
      id: 3,
      title: "Google pixel 4",
      img: googleimg,
    },
  ]);

  const [samsungs, setSamsung] = useState([
    {
      id: 1,
      title: "Samsung A13",
      img: samsungImg,
    },
    {
      id: 2,
      title: "Samsung A12",
      img: samsungImg,
    },
    {
      id: 3,
      title: "Samsung A03s",
      img: samsungImg,
    },
    {
      id: 3,
      title: "Samsung A02s",
      img: samsungImg,
    },
  ]);
  const navigatetoitems = (id) => {
    if (id == 1) {
      navigate("/phone");
    }
    if (id == 2) {
      navigate("/phone");
    }
    if (id == 3) {
      navigate("/phone");
    }
    if (id == 4) {
      navigate("/phone");
    }
  };

  return (
    <PhoneRepairStyled>
      <Carousel style={{ margintop: "2%", marginbuttom: "2%", zIndex: "-1" }}>
        <Carousel.Item>
          <img className="img" src={ios16} alt="ios" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={iphoneWall} alt="iPhone" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={SamsungWall} alt=" samsung" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={GoogleWall} alt="Google Pixel" />
        </Carousel.Item>
      </Carousel>
      <Container className="container">
        <div className="phoneListStyle">
          <div className="listCol">
            {iPhones.map((phone) => (
              <div onClick={() => navigatetoitems(phone.id)}>
                <Card
                  style={{ width: "18rem", marginBottom: "2%" }}
                  className="g-2"
                  key={phone.id}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ marginbuttom: "2%", color: "#081c4b" }}
                    >
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={phone.img}
                      />
                      {phone.title}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>

          <div className="listCol">
            {pixels.map((pixel) => (
              <div onClick={() => navigatetoitems(pixel.id)}>
                <Card
                  style={{ width: "18rem", marginBottom: "2%" }}
                  className="g-2"
                  key={pixel.id}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ marginbuttom: "2%", color: "#081c4b" }}
                    >
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={pixel.img}
                      />
                      {pixel.title}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
          <div className="listCol">
            {samsungs.map((samsung) => (
              <div onClick={() => navigatetoitems(samsung.id)}>
                <Card
                  style={{ width: "18rem", marginBottom: "2%" }}
                  className="g-2"
                  key={samsung.id}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ marginbuttom: "2%", color: "#081c4b" }}
                    >
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={samsung.img}
                      />
                      {samsung.title}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Quotes />
      </Container>
    </PhoneRepairStyled>
  );
};
const PhoneRepairStyled = styled.div`
  color: #081c4b;

  .img {
    width: 100%;
    //height: 10%;
    height: 650px;
  }
  .phoneListStyle {
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;
    flex-direction: row;
    display: flex;
  }
  .listCol {
    margin: 3%;
    flex-direction: column;
    display: flex;
  }
  @media (max-width: 1000px) {
    .g-2 {
      z-index: -1;
    }
    .img {
      height: 200px;
    }
    .phoneListStyle {
      align-items: center;
      margin-top: 10%;
      flex-direction: column;
      display: flex;
    }
    .listCol {
      margin-top: 5%;
      margin-bottom: 10%;
      flex-direction: column;
      display: flex;
    }
  }
`;
export default PhoneRepair;
