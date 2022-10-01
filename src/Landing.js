import React from "react";
import data from "./data.json";
import styled from "styled-components";
import { Figure, Card, Row, Container } from "react-bootstrap";
import wallpaper from "../src/Assets/wallpaper.png";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BottomFooter from "./components/Footer/BottomFooter";
import TopHead from "./components/Header/TopHead";
const Landing = () => {
  return (
    <LandingStyled>
      <TopHead />
      <Header />
      <Figure>
        <Figure.Image alt="silicon cases" src={wallpaper} />
      </Figure>
      <Container>
        <Row xs={3} md={6} className="g-4">
          {data.map((record) => (
            <Card
              style={{ margin: "2%", width: "18rem" }}
              className="g-2"
              key={record.id}
            >
              <Card.Img src={record.icon} />

              <Card.Body>
                <Card.Text style={{ fontSize: "13px" }}>
                  {record.caption}
                </Card.Text>
                <Card.Text>price: {record.price}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <Footer />
      <BottomFooter />
    </LandingStyled>
  );
};

const LandingStyled = styled.div`
  .g-4 {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 1000px) {
    .g-2 {
      z-index: -1;
    }
  }
`;
export default Landing;
