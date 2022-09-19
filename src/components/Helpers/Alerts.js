import React from "react";
import styled from "styled-components";
import { Alert } from "react-bootstrap";
const Alerts = (props) => {
  return (
    <AlertStyled>
      <Alert variant="warning">
        <p>{props.text}</p>
      </Alert>
    </AlertStyled>
  );
};
const AlertStyled = styled.div`
  margin-bottom: -1%;
`;
export default Alerts;
