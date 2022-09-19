import React from "react";
import styled from "styled-components";
import iphone from "../../../Assets/iphoneApp.png";
import BottomFooter from "../../Footer/BottomFooter";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopHead from "../../Header/TopHead";
import android from "../../../Assets/android.png";
import gp from "../../../Assets/GooglePlay.png";
import appStore from "../../../Assets/AppStore.png";
const MobileApp = () => {
  const App = () => {
    console.log("Clicked!");
  };
  return (
    <MobileAppStyled>
      <TopHead />
      <Header />
      <img src={iphone} />
      <img src={appStore} onClick={(e) => App()} />
      <img src={android} /> <img src={gp} onClick={(e) => App()} />
      <Footer />
      <BottomFooter />
    </MobileAppStyled>
  );
};
const MobileAppStyled = styled.div``;
export default MobileApp;
