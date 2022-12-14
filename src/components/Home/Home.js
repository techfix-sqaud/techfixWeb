import React, { useState, useEffect } from "react";
import styled from "styled-components";
import iphone from "../../Assets/iphone.png";
import laptop from "../../Assets/laptop.png";
import tablet from "../../Assets/ipadCart.png";
import consoles from "../../Assets/console.jpeg";
import { Container, Row, Col, Card, Toast } from "react-bootstrap";
import TechFixAPI from "../Helpers/Axios";
import About from "../About/About";
import { useNavigate } from "react-router-dom";
import SlideShow from "../Helpers/SlideShow";

const Home = () => {
  const navigate = useNavigate();
  const [showB, setShowB] = useState(true);
  const toggleShowB = () => setShowB(!showB);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "phones",
      img: iphone,
    },
    {
      id: 2,
      title: "Computers",
      img: laptop,
    },
    {
      id: 3,
      title: "Tablets",
      img: tablet,
    },
    {
      id: 4,
      title: "Consoles",
      img: consoles,
    },
  ]);

  const navigatetoitems = (id) => {
    if (id == 1) {
      navigate("phone");
    }
    if (id == 2) {
      navigate("computers");
    }
    if (id == 3) {
      navigate("tablet");
    }
    if (id == 4) {
      // navigate("consoles");
      alert("this service is coming soon!");
    }
  };
  // useEffect(() => {
  //   TechFixAPI.get("/");
  //   navigate("");
  //   console.log(TechFixAPI);
  // }, []);
  return (
    <HomeStyled>
      <SlideShow />
      <Container>
        <h1 className="h1qoute">Select your device to Get it fix right now </h1>
        <h4>Reliable Repair for All device with professional workers</h4>
        <p className="headP">
          We'll beat any competitors published price for the same repair.
          Starting with <span className="freeDi">free diagnostics.</span>
        </p>

        <div md={5} className="g-4">
          {items.map((item) => (
            <div onClick={(e) => navigatetoitems(item.id)} key={item.id}>
              <Card style={{ margin: "2%" }} className="g-2" key={item.id}>
                <Card.Img src={item.img} />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Row>
          <About />
        </Row>
      </Container>
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  color: #081c4b;

  .h1qoute {
    font-family: AAvantgarde;
    margin-top: 6%;
    text-align: center;
  }
  h1 {
    font-family: AAvantgarde;
    margin-top: 6%;
    text-align: left;
  }
  h4 {
    font-family: AAvantgarde;
    margin-top: 2%;
    text-align: center;
  }
  p {
    font-family: AAvantgarde;
    margin-top: 2%;
    text-align: justify;
    .freeDi {
      color: #660c21;
      font-weight: bold;
    }
  }
  .headP {
    font-family: AAvantgarde;
    margin-top: 2%;
    text-align: center;
    .freeDi {
      color: #660c21;
      font-weight: bold;
    }
  }

  .g-4 {
    flex-direction: row;
    display: inline-flex;
  }
  @media (max-width: 1000px) {
    .g-2 {
      z-index: -1;
    }
    .g-4 {
      flex-direction: column;
    }

    flex-direction: row;
  }
`;
export default Home;
