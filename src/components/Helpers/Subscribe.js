import React, { useState, useRef } from "react";
import { Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import TechFixAPI from "./Axios";
const Subscribe = (props) => {
  const subscriberEmail = useRef();
  const resetForm = () => {
    subscriberEmail.current.value = "";
  };
  const submit = async (e) => {
    e.preventDefault();
    await TechFixAPI.post("api/Subscriber/joinNow", {
      email: subscriberEmail.current.value,
    })
      .then((res) => {
        if (res) {
          alert(" Welcome to our Newsletter! ");
          resetForm();
        }
      })
      .catch((error) => {
        alert(" Email already exist " + error);
        //alert();
        resetForm(e);
      });
  };
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <InputGroup>
            <FormControl
              className="subEmail"
              id="subscriber"
              type="email"
              ref={subscriberEmail}
              placeholder="Email"
              required
            />

            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
            >
              Join Now
            </Button>
          </InputGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Subscribe;
