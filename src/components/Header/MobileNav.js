import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
const MobileNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLinkList, setShowLinkList] = useState(false);
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
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
    <MobileNavStyled>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <FaBars onClick={() => openNav()} className="menu" />

      <nav id="myNav" className="overlay">
        <a className="closebtn">
          <FaTimes onClick={() => closeNav()} />
        </a>
        <div className="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/Login">Login</Link>
          <Link
            to=""
            onTouchStart={() => setShowLinkList(true)}
            onTouchEnd={() => setShowLinkList(false)}
          >
            Repair
          </Link>
          {showLinkList && (
            <ul>
              <li>
                <Link to="/computers">Computers</Link>
              </li>
              <li>
                <Link to="/phone">Phones</Link>
              </li>
              <li>
                <Link to="/computers">Computers</Link>
              </li>
            </ul>
          )}
          {showSearch && (
            <form>
              <input></input>
              <Button variant="outline-light" onClick={() => Search()}>
                Search
              </Button>
            </form>
          )}
          <div>
            {!showSearch && (
              <Button variant="outline-dark" onClick={() => renderSearch(true)}>
                <FaSearch style={{ color: "white" }} />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </MobileNavStyled>
  );
};

const MobileNavStyled = styled.div`
  font-family: "Lato", sans-serif;
  background-color: #f5f5f5;
  height: 40px;

  .menu {
    position: absolute;
    right: 0;
    margin-top: 2%;
    margin-right: 2%;
    color: black;
  }
  img {
    float: left;
    //position: absolute;
    // left: 0;
  }
  .me-2 {
    width: 70%;
  }
  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    color: red;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    //transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }

  ul {
    color: white;
  }
  li {
    color: white;
  }

  @media screen and (max-height: 760px) {
    z-index: 3;
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
`;
export default MobileNav;
