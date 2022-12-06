import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Button, FloatingLabel, Toast } from "react-bootstrap";
import repairpic from "../../Assets/repair.png";
import mission from "../../Assets/mission.png";
import service from "../../Assets/qualityservice.png";

const About = () => {
  return (
    <AboutStyled>
      <h1 className="header"> About us</h1>
      <div className="repair">
        <Col>
          <img src={repairpic} />
        </Col>
        <Col style={{ marginTop: "0%" }}>
          <h1 style={{ marginLeft: "5%" }}> Quick Repair</h1>
          <p style={{ marginLeft: "5%" }}>
            We guarantee that your device will be ready fast, most of the device
            we're making them ready in the same day, with our professional team,
            Most iphone screen repair often carried out within 30 minutes. Our
            Technicion have fixed more than 30k devices including cracked
            screens, water damage, defective microphones and speakers, battery
            issue, in addition for Software issues. We fix it all.
          </p>
        </Col>
      </div>
      <div className="mission">
        <Col>
          <h1>Our Mission</h1>
          <p style={{ marginRight: "5%" }}>
            We strive to satisfy customer, We never ever strive for money, while
            repairing phones, and computers with quality standards. We work to
            create a welcoming environment for our customers, while learning and
            adjusting to their needs. Our customer they're not just customer,
            they're defintely partenrs of our mission and vision to improve our
            service.
          </p>
        </Col>
        <Col>
          <img src={mission} className="missionPic" />
        </Col>
      </div>
      <div className="qualityService">
        <Col>
          <img src={service} />
        </Col>
        <Col>
          <h1 style={{ marginLeft: "5%" }}>Quality service</h1>
          <p style={{ marginLeft: "5%" }}>
            At TechFix, we're looking to lead the industry in cell phone repair
            and computer replacements because of our reliability, affordability
            and quality service. Our team is able to fix electronic issues that
            are not even found by the average repair technician. That's why
            we're comfortable offering warranty and pricing guarantee . we stand
            by the quality of our same-day repair. Whether we're fixing your
            iPhone, Samsung, PC's and Mac. We will try to make looks like a
            brand new device.
          </p>
        </Col>
      </div>
    </AboutStyled>
  );
};
const AboutStyled = styled.div`
  color: #081c4b;
  background-color: transparent;
  margin-top: 3%;
  p {
    text-align: justify;
  }
  h1 {
    text-align: left;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  img {
    width: 100%;
    //  height: 70%;
  }
  .mission {
    flex-direction: row;
    display: flex;
    margin: 5%;
  }
  .header {
    text-align: center;
    margin-bottom: 2%;
  }
  .qualityService {
    flex-direction: row;
    display: flex;
    margin: 5%;
  }
  .repair {
    flex-direction: row;
    display: flex;
    margin: 5%;
  }

  Form {
    margin-top: 5%;
  }
  @media (max-width: 1000px) {
    text-align: justify;
    .repair {
      flex-direction: column;
      display: flex;
    }
    .mission {
      flex-direction: column-reverse;
      display: flex;
    }
    .qualityService {
      flex-direction: column;
      display: flex;
    }
    img {
      height: 100%;
    }
    .missionPic {
      flex-direction: column-reverse;
    }
  }
`;
export default About;
