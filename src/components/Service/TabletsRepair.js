import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import TopHead from "../Header/TopHead";
import ipad from "../../Assets/ipad.jpeg";
import { Row, Col, Container } from "react-bootstrap";
import tablet from "../../Assets/tablet.png";
import ipadv from "../../Assets/ipad.png";
import Footer from "../Footer/Footer";
import BottomFooter from "../Footer/BottomFooter";
const TabletsRepair = () => {
  return (
    <TabletsRepairStyled>
      <TopHead />
      <Header />
      <Row className="topOfPage">
        <Col className="leftside">
          <h1>
            iPads & tablets <span>service</span>
          </h1>
        </Col>

        <Col>
          <img src={ipad} style={{ width: "100%", height: 600 }} />
        </Col>
      </Row>
      <Container className="body">
        <Row>
          <Col>
            <img src={tablet} className="imgs" />
          </Col>
          <Col>
            <img src={ipadv} className="imgs" />
          </Col>
        </Row>
      </Container>
      <Footer />
      <BottomFooter />
    </TabletsRepairStyled>
  );
};

const TabletsRepairStyled = styled.div`
  .leftside {
    margin-top: 15%;
    color: white;
    text-align: center;
    background-color: black;
    width: 100%;
  }
  /* .imgs {
    width: 200px;
    height: 200px;
  } */
  .body {
    margin: 5%;
    margin-left: 12%;
  }
  span {
    color: white;
    font-style: italic;
    background: linear-gradient(purple, pink);
    -webkit-background-clip: text;
    color: transparent;
  }
  .topOfPage {
    background-color: black;
  }
`;
export default TabletsRepair;
