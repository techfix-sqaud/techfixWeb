import React, { useRef, useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TechFixAPI from "./Axios";
import styled from "styled-components";
const Quotes = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const deviceRef = useRef();
  const descriptionRef = useRef();
  const [isSignature, setIsSignature] = useState(false);

  const resetForm = (e) => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    deviceRef.current.value = "";
    descriptionRef.current.value = "";
    setIsSignature(false);
  };
  const submit = async (e) => {
    e.preventDefault();
    await TechFixAPI.post("api/Quotes/GetQuote", {
      FullName: nameRef.current.value,
      Email: emailRef.current.value,
      deviceModel: deviceRef.current.value,
      Description: descriptionRef.current.value,
      signature: isSignature,
    })
      .then((res) => {
        if (res) {
          alert(" we have recieved your Quote! ");
          resetForm(e);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
        alert(" somthing went wrong ");
      });
  };
  return (
    <QoutesStyled>
      <Container>
        <Row className="getQoute">
          <h2>Quote</h2>
          <Form onSubmit={(e) => submit(e)}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="sender_name"
                  type="text"
                  name="name"
                  ref={nameRef}
                  placeholder="Name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="sender_email"
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Device</Form.Label>
              <Form.Control
                id="device"
                ref={deviceRef}
                placeholder="Please enter device model number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>

              <Form.Control
                id="msg"
                as="textarea"
                name="message"
                ref={descriptionRef}
                placeholder="Descripe your problem"
                style={{ height: "100px" }}
                required
              />
            </Form.Group>
            <p>
              By clicking "Submit", you authorize TechFix and its stores to
              contact you with marketing information through written
              communications, calling or texting you at the phone number(s)
              you’ve provided. You understand these calls or texts may use
              computer-assisted dialing and/or prerecorded messages. This
              authorization is not required to complete the purchase or lease of
              any TechFix product. See our{" "}
              <Link to="/terms">Privacy Policy.</Link>
            </p>

            <input
              type="checkbox"
              value={isSignature}
              onChange={() => {
                setIsSignature(true);
              }}
              checked={isSignature}
              required
            />
            <label>
              &nbsp; I Understand and agree to the &nbsp;
              <Link to="/terms">Privacy Policy</Link> and{" "}
              <Link to="/terms">Terms of service</Link>
            </label>
            <br></br>

            <Button variant="outline-primary" className="Button" type="submit">
              Get Quote
            </Button>
          </Form>
          <br></br>
        </Row>
      </Container>
    </QoutesStyled>
  );
};

const QoutesStyled = styled.div`
  color: #081c4b;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  Button {
    margin-left: 20%;
    text-align: center;
    width: 60%;
  }

  h2 {
    text-align: center;
  }
  @media (max-width: 1000px) {
    align-items: center;
  }
  h2 {
    margin-right: 3%;
  }
`;

export default Quotes;
