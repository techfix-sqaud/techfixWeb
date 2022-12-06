import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col, Button } from "react-bootstrap";
import wallpaper from "../../Assets/cor.jpeg";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsEnvelope, BsPhone } from "react-icons/bs";
import HelperMethods from "../Helpers/HelperMethods";
//import TechFixAPI from "../Helpers/Axios";

const ContactUs = () => {
  const [data, setData] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    setData({});
  };

  const validatePhoneNumber = () => {
    console.log(phoneNumber);
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <ContactUsStyled>
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
            <div className="businesInfo">
              <h5>Hours</h5>
              <div>M - F &nbsp; 10:00 AM - 7:00 PM</div>
              <div>Sat &nbsp; 12:00 AM - 5:00 PM</div>
              <div>Sun &nbsp; Closed</div>
              <br />
              <h5>Customer Service</h5>
              <div>
                <BsWhatsapp />
                &nbsp; 919-537-6191
              </div>
              <div>
                <BsPhone /> &nbsp; 919-301-8950
              </div>
              <div>
                <BsEnvelope /> &nbsp;Support@techfix-raleigh.com
              </div>
              <br />
            </div>
          </div>
          <div className="ContactUsBodyForm">
            <Form onSubmit={(e) => submit(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="subject"
                  value={data.subject}
                  placeholder="Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  // onChange={(e) => handle(e)}
                  //id="email"
                  //value={data.Email}
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  minLength={10}
                  onChange={(event) =>
                    setPhoneNumber(
                      HelperMethods.formatFaxAndPhoneNumber(event.target.value)
                    )
                  }
                  id="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
              <small style={{ color: "red" }}>{errorMessage}</small>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  // onChange={(e) => handle(e)}
                  // id="msg"
                  // value={data.msg}
                  as="textarea"
                  name="message"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  required
                />
              </Form.Group>

              <div>
                <p>
                  By clicking "Submit", you authorize TechFix and its stores to
                  contact you with marketing information through written
                  communications, calling or texting you at the phone number(s)
                  you’ve provided. You understand these calls or texts may use
                  computer-assisted dialing and/or prerecorded messages. This
                  authorization is not required to complete the purchase of any
                  TechFix products. See our{" "}
                  <Link to="/terms">Privacy Policy.</Link>
                </p>

                <input
                  type="checkbox"
                  // value={isSignature}
                  // onChange={() => {
                  //   setIsSignature(true);
                  // }}
                  // checked={isSignature}
                  required
                />
                <label>
                  &nbsp; I Understand and agree to the &nbsp;
                  <Link to="/terms">Privacy Policy</Link> and{" "}
                  <Link to="/terms">Terms of service</Link>
                </label>
              </div>

              <Button
                variant="primary"
                type="submit"
                //onClick={(e) => validatePhoneNumber()}
                style={{ marginBottom: "5%", marginTop: "3%" }}
              >
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
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
