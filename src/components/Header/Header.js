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
  Form,
  Button,
} from "react-bootstrap";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showTrackModel, setShowTrackModel] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);

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

  const renderModal = () => {
    setShowTrackModel(true);
  };
  const renderSearch = () => {
    if (!showSearch) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };
  const Search = () => {
    alert("Search");
    setShowSearch(false);
  };
  return (
    <TopHeaderStyled>
      {showTrackModel && <TrackModal />}

      {isMobile ? (
        <MobileNav />
      ) : (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo}></img>
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
                  <Nav.Link to="/contactus">
                    <Link to="/contactus" id="Link">
                      Contact us
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
                      <Link to="/consoles" id="Link">
                        Game Consoles
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Software" id="nav-dropdown">
                    <NavDropdown.Item>Managment Systems</NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/mobileApp" id="Link">
                        Mobile Apps
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>Web Applications</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to="/Login" id="Link">
                      Login
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      className="button"
                      onClick={() => renderModal()}
                      id="Link"
                    >
                      Track Repair
                    </button>
                  </Nav.Link>
                </Nav>
                {showSearch && (
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-dark" onClick={() => Search()}>
                      Search
                    </Button>
                  </Form>
                )}

                {!showSearch && (
                  <Button
                    variant="outline-dark"
                    onClick={() => renderSearch(true)}
                  >
                    <FaSearch />
                  </Button>
                )}
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
    color: black;
    text-decoration: none;
  }
  #nav-dropdown {
    color: black;
  }
`;

export default Header;
