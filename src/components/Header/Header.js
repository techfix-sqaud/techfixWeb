import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import MobileNav from "./MobileNav";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import TrackModal from "../Helpers/TrackModal";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
const Header = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1000;

  return (
    <TopHeaderStyled>
      <TrackModal show={modalShow} onHide={() => setModalShow(false)} />
      {isMobile ? (
        <MobileNav />
      ) : (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={logo}
                  style={{ height: "50px", width: "150px" }}
                ></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/" id="Link">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contactus" id="Link">
                      Contact us
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/Landing" id="Link">
                      E-Store
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Repairs" id="nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/phone" id="Link">
                        Phones
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/computers" id="Link">
                        Computers
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/tablet" id="Link">
                        Tablets
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/" id="Link">
                        Game Consoles
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Software" id="nav-dropdown">
                    <NavDropdown.Item>Managment Systems</NavDropdown.Item>
                    <NavDropdown.Item>
                      {/* <Link to="/mobileApp" id="Link">
                        Mobile Apps
                      </Link> */}
                      Mobile Apps
                    </NavDropdown.Item>
                    <NavDropdown.Item>Web Applications</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link>
                    <button
                      className="button"
                      onClick={() => setModalShow(true)}
                      id="Link"
                    >
                      Track Repair
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/Login" id="Link">
                      Login
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </TopHeaderStyled>
  );
};

const TopHeaderStyled = styled.div`
  z-index: -2;
  img {
    float: left;
    width: 100px;
    height: 100%;
  }
  .button {
    margin-left: -1%;
    color: white;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }
  .body {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #f5f5f5;
  }

  #Link {
    color: #5d5d5d;
    text-decoration: none;
  }
  #nav-dropdown {
    color: #5d5d5d;
  }

  @media (max-width: 1000px) {
    img {
      margin-left: 2%;
    }
  }
`;

export default Header;
