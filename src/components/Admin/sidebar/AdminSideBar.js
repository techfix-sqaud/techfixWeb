import React from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaUserTag } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import "../../Admin/admin.css";
const AdminSideBar = () => {
  return (
    <AdminSideBarStyled>
      <h2> Hello Admin </h2>
      <LinkContainer to="/Dashboard">
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
    </AdminSideBarStyled>
  );
};

const AdminSideBarStyled = styled.div`
  height: 100%;
  width: 30%;
  color: white;
  background-color: black;
`;

export default AdminSideBar;
