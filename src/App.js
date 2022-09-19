import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import BottomFooter from "./components/Footer/BottomFooter";
import TopHead from "./components/Header/TopHead";
const App = () => {
  return (
    <div className="app">
      <TopHead />
      <Header />
      <Home />
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default App;
