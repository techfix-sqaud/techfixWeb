import React, { useState } from "react";
import styled from "styled-components";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Container,
} from "react-bootstrap";
import TopHead from "../Header/TopHead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BottomFooter from "../Footer/BottomFooter";
import wallpaper from "../../Assets/cor.jpeg";
import PopUp from "../Helpers/PopUp";
//import TechFixAPI from "../Helpers/Axios";

const ContactUs = () => {
  const [data, setData] = useState({
    sender_name: "",
    sender_email: "",
    subject: "",
    msg: "",
  });

  const submit = (e) => {
    // e.preventDefault();
    // TechFixAPI.post("/contactus", {
    //   sender_name: data.sender_name,
    //   sender_email: data.sender_email,
    //   subject: data.subject,
    //   msg: data.msg,
    // })
    //   .then((res) => {
    //     if (res) {
    //       alert(" we have recieved your massege! ");
    //       resetForm(e);
    //     }
    //   })
    //   .catch((error) => {
    //     alert(error);
    //     alert(" somthing went wrong ");
    //   });
  };
  const resetForm = (e) => {
    e.preventDefault();
    setData({
      sender_name: "",
      sender_email: "",
      subject: "",
      msg: "",
    });
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <ContactUsStyled>
      <TopHead />
      <Header />
      <div className="top">
        <img src={wallpaper} className="contactUsImg" />
      </div>
      <div>
        <h1 className="headerTag">Contact us</h1>
        <div className="ContactUsBody">
          <div className="ContactUsBodyMap" style={{ "margintop:": "40%" }}>
            <div>
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=2830%20capital%20blvd,%20raleigh,%20nc,%20+(ifix)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/wearable-gps/">Kids wearables</a>
              </iframe>
            </div>
          </div>
          <div className="ContactUsBodyForm">
            <Form onSubmit={(e) => submit(e)}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={(e) => handle(e)}
                    id="sender_name"
                    value={data.sender_name}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={(e) => handle(e)}
                    id="sender_email"
                    value={data.sender_email}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="subject"
                  value={data.subject}
                  placeholder="subject"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="msg"
                  value={data.msg}
                  as="textarea"
                  name="message"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
        <div className="wraps"></div>
      </div>

      <PopUp text="business hour" />

      <Footer />
      <BottomFooter />
    </ContactUsStyled>
  );
};
const ContactUsStyled = styled.div`
  color: #081c4b;
  .top {
    text-align: center;
  }
  .contactUsImg {
    height: 100%;
    width: 80%;
  }
  .ContactUsBody {
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: row;
    display: flex;
  }
  .ContactUsBodyMap {
    margin-right: 2%;
    width: 100%;
  }
  .ContactUsBodyForm {
    width: 100%;
  }
  td {
    width: 50%;
    border: 1px solid;
  }
  .wraps {
    text-align: center;
    flex-direction: column;
    display: flex;
  }

  h1 {
    margin-top: 5%;
    margin-bottom: 3%;
    text-align: center;
  }
  iframe {
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    height: 320px;
  }
  .mb-3 {
    z-index: -5;
  }
  @media (max-width: 1000px) {
    .contactUsImg {
      width: 100%;
    }
    .ContactUsBody {
      flex-direction: column-reverse;
      display: flex;
    }
    .ContactUsBodyMap {
      //margin-right: 2%;
      width: 100%;
    }
    .ContactUsBodyForm {
      width: 100%;
    }
  }
`;
export default ContactUs;
