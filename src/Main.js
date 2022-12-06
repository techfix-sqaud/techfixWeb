import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthoPage from "./components/Authuntication/authontication";
import ContactUs from "./components/Contactus/contactUs";
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
import Header from "./components/Header/Header";
import TopHead from "./components/Header/TopHead";
import Footer from "./components/Footer/Footer";
import BottomFooter from "./components/Footer/BottomFooter";
import Home from "./components/Home/Home";
import AdminSideBar from "./components/Admin/sidebar/AdminSideBar";
import Tawk from "./Tawk";
import "../src/admin.css";
const Main = () => {
  const User = "LoggedIn";
  if (User === "LoggedInd") {
    return (
      <BrowserRouter>
        <TopHead />
        <Header />
        <Routes>
          <Route path="/Login" element={<AuthoPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/phone" element={<PhoneRepair />}></Route>
          <Route path="/computers" element={<ComputersRepair />}></Route>
          <Route path="/tablet" element={<TabletsRepair />}></Route>
          <Route path="/consoles" element={<GameConsole />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/mobileApp" element={<MobileApp />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/pos" element={<Pos />}></Route>
          <Route path="/Landing" element={<Landing />}></Route>
        </Routes>
        <Tawk />
        <Footer />
        <BottomFooter />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <AdminSideBar />
        <div className="c2">
          <Routes>
            <Route path="/Customers" element={<Customers />} />
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/addnewcustomer" element={<AddNewCustomer />}></Route>
            <Route path="/pos" element={<Pos />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
};

export default Main;
