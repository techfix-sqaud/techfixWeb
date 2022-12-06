import React, { useState } from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaUserTag, FaTimes, FaBars } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
//import "../../Admin/admin.css";
const AdminSideBar = () => {
  const [show, setShow] = useState(false);
  const closeNav = () => {
    document.getElementById("myNav").style.width = "3.5%";
    setShow(false);
  };
  const openNav = () => {
    document.getElementById("myNav").style.width = "20%";
    setShow(true);
  };
  return (
    <AdminSideBarStyled>
      <nav id="myNav" className="overlay">
        <FaBars
          onClick={() => openNav()}
          style={{ color: "white", fontSize: "40px" }}
        />
        <a className="closebtn">
          {show && <FaTimes onClick={() => closeNav()} />}
        </a>
        <h2> Hello Admin </h2>
        <LinkContainer to="/">
          <Nav.Link className="NavSide">
            <FaHome />
            Home
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin">
          <Nav.Link className="NavSide">
            <FaUserTag />
            Employees
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Customers">
          <Nav.Link className="NavSide">
            <FaUsers />
            Customers
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link className="NavSide">
            <AiFillMessage />
            Messages
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link className="NavSide">
            <FaHome />
            Products
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link className="NavSide">
            <FaHome />
            Providers
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link className="NavSide">
            <FaHome />
            Invoices
          </Nav.Link>
        </LinkContainer>
      </nav>
    </AdminSideBarStyled>
  );
};

const AdminSideBarStyled = styled.div`
  .overlay {
    height: 100%;
    // width: 20%;
    color: white;
    background-color: #081c4b;
    position: fixed;
    left: 0;
    z-index: 100;
    overflow-y: auto;
  }
`;

export default AdminSideBar;
