import React from "react";
import styled from "styled-components";
import AdminSideBar from "../sidebar/AdminSideBar";
const AddNewCustomer = () => {
  return (
    <AddNewCustomerStyled>
      <div className="c2">
        <h1>Add new customer</h1>
      </div>
    </AddNewCustomerStyled>
  );
};
const AddNewCustomerStyled = styled.div`
  background-color: lightgrey;
  flex-direction: row;
  display: flex;
  height: 100%;
  width: 100%;
  .c2 {
    margin-left: 0%;
    width: 100%;
    background-color: lightyellow;
  }
`;
export default AddNewCustomer;
