import React from "react";
import styled from "styled-components";
import AdminSideBar from "../sidebar/AdminSideBar";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  /* background-color: lightgrey;
  flex-direction: row;
  display: flex;
  height: 100%;
  width: 100%;
  .c2 {
    //margin-left: -65%;
    width: 100%;
    background-color: lightyellow;
  } */
`;

export default Dashboard;
