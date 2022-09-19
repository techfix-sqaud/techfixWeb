import React from "react";
import {
  Carousel,
  Row,
  Col,
  Button,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import styled from "styled-components";
const Quotes = () => {
  return (
    <QoutesStyled>
      <Container>
        <Row className="getQoute">
          <h2>Quote</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  // onChange={(e) => handle(e)}
                  id="sender_name"
                  // value={data.sender_name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  // onChange={(e) => handle(e)}
                  id="sender_email"
                  // value={data.sender_email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Device</Form.Label>
              <Form.Control
                // onChange={(e) => handle(e)}
                id="device"
                // value={data.subject}
                placeholder="Please enter device model number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>

              <Form.Control
                // onChange={}
                id="msg"
                // value={data.msg}
                as="textarea"
                name="message"
                placeholder="Descripe your problem"
                style={{ height: "100px" }}
                required
              />
            </Form.Group>
          </Form>
          <Button variant="outline-dark" className="Button">
            Get Quote
          </Button>
        </Row>
      </Container>
    </QoutesStyled>
  );
};

const QoutesStyled = styled.div`
  margin-top: 5%;
  //margin-left: 10%;
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
