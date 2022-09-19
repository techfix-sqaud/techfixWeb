import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import styled from "styled-components";
import fav from "../../Assets/favicon.ico";
const Toasts = (props) => {
  const [counter, setCounter] = useState(0);
  const [showA, setShowA] = useState(false);
  const [showCounter, setShowCounter] = useState(true);
  const [position, setPosition] = useState("top-start");
  const toggleShowA = () => setShowA(true);
  const hideShowA = () => {
    setShowCounter(false);
    setShowA(false);
  };

  useEffect(() => {
    showCounter &&
      counter != 70 &&
      setTimeout(() => setCounter(counter + 1), 1000);
    toggleShowA(true);
  }, [counter]);
  return (
    <ToastsStyled>
      <ToastContainer id="toast">
        {counter != 70 && (
          <Toast show={showA} onClose={hideShowA} bg={props.color}>
            <Toast.Header>
              <img src={fav} className="rounded me-2" alt="" />
              <strong className="me-auto">{props.title}</strong>
              <small className="text-muted">{counter} sec ago</small>
            </Toast.Header>
            <Toast.Body>{props.text}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </ToastsStyled>
  );
};

const ToastsStyled = styled.div`
  @media (max-width: 1000px) {
    #toast {
      z-index: 0;
    }
  }
`;

export default Toasts;
