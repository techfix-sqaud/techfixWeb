import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkedAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaUser,
} from "react-icons/fa";

function BottomFooter() {
  return (
    <ButtomFooterStyled>
      <div className="wrap">
        <p>Copyright 2022 © techfix LLC. All Rights Reserved</p>

        <p className="p">
          <a
            href="https://www.facebook.com/TechFix-102709275406206/"
            target="_blank"
          >
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/_tech_fix/" target="_blank">
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tech-fix-a95418216/"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/Infinitedevelo7" target="_blank">
            <FaTwitter style={{ fontSize: "20px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtCkSrL8VA7FO0LbCCVev5Q"
            target="_blank"
          >
            <FaYoutube className="icon" />
          </a>
        </p>
      </div>
    </ButtomFooterStyled>
  );
}

const ButtomFooterStyled = styled.div`
  background-color: black;
  color: white;
  padding: 0.5%;
  .wrap {
    margin-right: 5%;
    margin-left: 5%;
  }
  p {
    margin-top: 0.5%;
  }
  h1 {
    padding-top: 0.2%;
    padding-left: 0.2%;
    padding-bottom: 0.2%;
  }
  .p {
    text-align: right;
    margin-right: 2%;
    margin-top: -2.5%;
    color: white;
    a {
      color: white;
      margin: 0.5%;
    }
    .icon {
      font-size: 15px;
    }
  }
  @media (max-width: 1000px) {
    font-size: small;
    .p {
      text-align: left;
    }
    .wrap {
      flex-direction: column;
    }
  }
`;
export default BottomFooter;
