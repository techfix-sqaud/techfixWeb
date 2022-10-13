import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import TopHead from "../Header/TopHead";
import ipad from "../../Assets/hiPad.png";
import { Row, Col } from "react-bootstrap";
import Quotes from "../Helpers/Quotes";
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
          <img src={ipad} className="topImage" />
        </Col>
      </Row>
      <div className="body">
        <img src={tablet} />
        <img src={ipadv} className="imgs" />
      </div>

      <Quotes />
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
    background-color: #081c4b;
    width: 100%;
  }
  .imgs {
    margin-left: 10%;
  }
  .topImage {
    width: 100%;
    height: 600px;
  }
  .body {
    margin-top: 15%;
    margin-left: 20%;
  }
  span {
    color: white;
    font-style: italic;
    background: linear-gradient(purple, pink);
    -webkit-background-clip: text;
    color: transparent;
  }
  .topOfPage {
    background-color: #081c4b;
  }
  @media (max-width: 1000px) {
    .body {
      margin-left: 2%;
      margin-right: 10%;
    }
    .imgs {
      margin-left: -2%;
      margin-right: 10%;
    }
    .topImage {
      height: 200px;
    }
    .leftside {
      margin-left: 0.5%;
      margin-top: 10%;
    }
  }
`;
export default TabletsRepair;
