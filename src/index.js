import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Admin from "../src/components/Admin/adminHome";
import AuthoPage from "../src/components/Authuntication/authontication";
import ContactUs from "../src/components/Contactus/contactUs";
import TabletsRepair from "./components/Service/TabletsRepair";
import PhoneRepair from "./components/Service/PhoneRepair";
import ComputersRepair from "./components/Service/ComputersRepair";
import GameConsole from "./components/Service/GameConsole";
import Customers from "./components/Admin/Customers/Customers";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import SignUp from "./components/Authuntication/signUp";
import MobileApp from "./components/Service/Software/MobileApp";
import Terms from "./components/Terms&Conditions/Terms";
import AddNewCustomer from "./components/Admin/Customers/AddNewCustomer";
import Pos from "./components/POS/Pos";
import Landing from "./Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<AuthoPage />}></Route>
        <Route path="/" element={<App />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/phone" element={<PhoneRepair />}></Route>
        <Route path="/computers" element={<ComputersRepair />}></Route>
        <Route path="/tablet" element={<TabletsRepair />}></Route>
        <Route path="/consoles" element={<GameConsole />}></Route>
        <Route path="/Customers" element={<Customers />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/addnewcustomer" element={<AddNewCustomer />}></Route>
        <Route path="/mobileApp" element={<MobileApp />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/pos" element={<Pos />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
