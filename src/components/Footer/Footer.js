import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import {
  Form,
  Nav,
  FormControl,
  Button,
  InputGroup,
  Container,
} from "react-bootstrap";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkedAlt,
  FaCcAmex,
  FaCcDiscover,
  FaCcApplePay,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import TrackModal from "../Helpers/TrackModal";
import Subscribe from "../Helpers/Subscribe";
//import TechFixAPI from "../Helpers/Axios";

const Footer = () => {
  const [showTrackModel, setShowTrackModel] = useState(false);
  const [showSubscriberModel, setSubscriberModel] = useState(false);

  const renderModal = () => {
    setShowTrackModel(true);
  };
  const renderSubscriberModal = () => {
    setSubscriberModel(true);
  };

  return (
    <FooterStyled>
      {showTrackModel && <TrackModal />}
      {showSubscriberModel && <Subscribe />}
      <Container>
        <div className="wrap">
          <Col>
            <h3>TechFix</h3>
            <p className="trademark">
              TechFix is an independent service company and is in no way
              affiliated with Apple Inc. Phone, ipod, ipad, and Mac are
              registered trademark of Apple Inc.
              <br />
              <br />
              All product names herein may be trademarks of their respective.
            </p>
          </Col>
          <Col>
            <h5>useful links</h5>
            <LinkContainer to="/">
              <Nav.Link className="FootNav">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link className="FootNav">Contact us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Privacy">
              <Nav.Link className="FootNav">Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/terms">
              <Nav.Link className="FootNav">Terms</Nav.Link>
            </LinkContainer>

            <a href="mailto: career@techfix-raleigh.com">Career</a>
            <Nav.Link>
              <button
                onClick={() => renderModal()}
                className="button"
                id="Link"
              >
                Track Repair
              </button>
            </Nav.Link>
          </Col>
          <Col>
            <h5>Contact us</h5>
            <p>
              <a href="https://goo.gl/maps/8YDm5EZokkmrszXv5">
                <FaMapMarkedAlt /> Raleigh, NC, United States
              </a>
            </p>
            <p>
              <a href="tel: 919-301-8950">
                <FaPhoneAlt /> 919-301-8950
              </a>
            </p>

            <p>
              <a href="mailto: support@techfix-raleigh.com">
                <FaRegEnvelope /> support@techfix-raleigh.com
              </a>
            </p>

            <a className="a">
              <FaCcApplePay style={{ fontSize: "30px" }} />
            </a>
            <a className="a">
              <FaCcAmex style={{ fontSize: "30px" }} />
            </a>
            <a className="a">
              <FaCcDiscover style={{ fontSize: "30px" }} />
            </a>
            <a className="a">
              <FaCcVisa style={{ fontSize: "30px" }} />
            </a>
            <a className="a">
              <FaCcMastercard style={{ fontSize: "30px" }} />
            </a>
          </Col>
          <Col className="RightSection">
            <h5>Our newsletter</h5>
            <p className="newsletter">
              Here you will find all the latest on love, Click here to be the
              first to see our new posts, interviews, projects, and highlights
              and we will never share your informations.
            </p>
            <Button
              style={{ marginBottom: "2%" }}
              variant="outline-light"
              onClick={() => renderSubscriberModal()}
            >
              Join Now
            </Button>
          </Col>
        </div>
        <Row></Row>
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  background-color: #0000b9;
  text-align: justify;
  color: white;
  padding: 0.5%;
  .wrap {
    flex-direction: row;
    display: flex;
  }
  .trademark {
    word-spacing: normal;
    font-size: small;
    width: 85%;
  }

  .newsletter {
    text-align: justify;
    font-size: 12px;
    width: 85%;
    word-spacing: normal;
  }
  .RightSection {
    width: 80%;
    text-align: justify;
  }
  .FootNav {
    color: white;
    text-align: left;
  }
  .a {
    margin-left: 5px;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .button {
    margin-left: -2%;
    color: white;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    h3 {
      margin-top: 5%;
    }
    h5 {
      margin-top: 5%;
    }
    .wrap {
      flex-direction: column;
    }
    Form {
      z-index: -1;
    }
    .mb-3 {
      z-index: 0;
    }
    .button {
      color: white;
      background-color: Transparent;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      overflow: hidden;
      margin-left: -2%;
    }
  }
`;
export default Footer;
