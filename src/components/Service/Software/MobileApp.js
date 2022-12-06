import React from "react";
import styled from "styled-components";
import iphone from "../../../Assets/iphoneApp.png";
import android from "../../../Assets/android.png";
import gp from "../../../Assets/GooglePlay.png";
import appStore from "../../../Assets/AppStore.png";
const MobileApp = () => {
  const App = () => {
    console.log("Clicked!");
  };
  return (
    <MobileAppStyled>
      <img src={iphone} />
      <img src={appStore} onClick={(e) => App()} />
      <img src={android} /> <img src={gp} onClick={(e) => App()} />
    </MobileAppStyled>
  );
};
const MobileAppStyled = styled.div``;
export default MobileApp;
