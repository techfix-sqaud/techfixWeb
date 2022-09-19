import React from "react";
import AdminSideBar from "./sidebar/AdminSideBar";
import Dashboard from "./Dashboard/Dashboard";
const adminHome = () => {
  return (
    <div className="Body">
      <div className="Main">
        <AdminSideBar />
      </div>
      <div className="c2">
        <Dashboard />
      </div>
    </div>
  );
};

export default adminHome;
