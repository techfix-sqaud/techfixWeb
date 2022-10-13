import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
const TopHead = () => {
  const [text, setText] = useState("");
  const [adsText, setAdsText] = useState("");

  useEffect(() => {
    setText("we're Hiring!");
    // setAdsText("ios 16 now available!");
  }, []);

  if (text) {
    return (
      <TopHeadStyled>
        <Container>
          <div className="bodyWrapper">
            <p>{text}</p>
            <p style={{ marginLeft: "2%", color: "coral" }}>{adsText}</p>
          </div>
        </Container>
      </TopHeadStyled>
    );
  } else {
    return false;
  }
};

const TopHeadStyled = styled.div`
  background-color: #081c4b;
  color: white;
  padding: 0.5%;
  .bodyWrapper {
    flex-direction: row;
    display: flex;
    text-align: left;
    white-space: nowrap;
  }
`;
export default TopHead;
