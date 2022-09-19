import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Table, Button } from "react-bootstrap";
import AdminSideBar from "../sidebar/AdminSideBar";
const Customers = () => {
  const navigate = useNavigate();

  return (
    <CustomersStyled>
      <div className="Main">
        <AdminSideBar />
      </div>
      <div className="c2">
        <Button onClick={(e) => navigate("/addnewcustomer")}>
          Add New Customers
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </CustomersStyled>
  );
};
const CustomersStyled = styled.div`
  background-color: lightgrey;
  flex-direction: row;
  display: flex;
  height: 100%;
  width: 100%;
  .c2 {
    margin-left: -65%;
    width: 100%;
    background-color: lightyellow;
  }
`;
export default Customers;
