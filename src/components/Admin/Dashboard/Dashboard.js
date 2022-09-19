import React from "react";
import styled from "styled-components";
import AdminSideBar from "../sidebar/AdminSideBar";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="Main">
        <AdminSideBar />
      </div>
      <div className="c2">
        <h1>Dashboard</h1>
      </div>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
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

export default Dashboard;
