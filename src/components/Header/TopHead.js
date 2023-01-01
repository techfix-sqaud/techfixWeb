import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Container, Form } from "react-bootstrap";
import { BsBag, BsSearch } from "react-icons/bs";
const TopHead = () => {
  const [text, setText] = useState("");
  const [adsText, setAdsText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 800;
  const renderSearch = () => {
    if (!showSearch) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };
  const Search = () => {
    alert("Not Found ");
    setShowSearch(false);
  };
  useEffect(() => {
    setText("Happy new year!");
    // setAdsText("ios 16 now available!");
  }, []);

  return (
    <TopHeadStyled>
      <Container>
        <div className="bodyWrapper">
          <p>{text}</p>
          <p style={{ marginLeft: "2%", marginTop: "2%", color: "coral" }}>
            {adsText}
          </p>
        </div>
        <div>
          {!isMobile && (
            <BsBag
              className="cart"
              onClick={() => alert("your cart is empty")}
            ></BsBag>
          )}
        </div>
        <div>
          {isMobile && (
            <BsBag
              className="cartMobile"
              onClick={() => alert("your cart is empty")}
            />
          )}

          {showSearch && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {!isMobile ? (
                <Button variant="outline-primary" onClick={() => Search()}>
                  Search
                </Button>
              ) : (
                <BsSearch
                  className="mobileSearch"
                  onClick={() => Search(true)}
                />
              )}
            </Form>
          )}

          {!showSearch && (
            <BsSearch className="button" onClick={() => renderSearch(true)} />
          )}
        </div>
      </Container>
    </TopHeadStyled>
  );
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
  .cart {
    float: right;
    color: white;
    // margin-right: 10%;
    font-size: 25px;
    margin-top: -3%;
  }
  .cartMobile {
    float: right;
    color: white;
    font-size: 15px;
    margin-top: -8%;
  }
  .d-flex {
    width: 20%;
    float: right;
    margin-right: 9%;
    margin-top: -3%;
  }
  .button {
    float: right;
    color: white;
    margin-right: 6%;
    font-size: 25px;
    margin-top: -2.5%;
  }
  @media (max-width: 1000px) {
    .button {
      float: right;
      color: white;
      font-size: 15px;
      margin-top: -8%;
      margin-right: 10%;
    }
    .d-flex {
      width: 60%;
      float: right;
      margin-right: 9%;
      margin-top: -10%;
      margin-bottom: 2%;
    }
    .mobileSearch {
      margin-top: 3%;
    }
  }
`;
export default TopHead;
