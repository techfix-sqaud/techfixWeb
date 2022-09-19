import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";

const PopUp = (props) => {
  return (
    <ToolTipStyled>
      <div className="tooltiptext"></div>
    </ToolTipStyled>
  );
};

const ToolTipStyled = styled.div`
  margin-bottom: 3%;
  text-align: center;
`;
export default PopUp;
