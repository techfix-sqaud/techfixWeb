import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ProgressBar } from "react-bootstrap";

const TrackModal = (props) => {
  const [Percentage, setPercentage] = useState(98);
  const TrackOrder = (event) => {
    event.preventDefault();
    window.confirm("Please enter a valid Tracking number!");
  };
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Track your order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => TrackOrder(e)}>
          <Form.Group
            role="form"
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Order number</Form.Label>
            <Form.Control
              type="text"
              placeholder="order number"
              autoFocus
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" value="Submit">
            Track
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <ProgressBar
          now={Percentage}
          label={`${Percentage}%`}
          style={{ width: "100%" }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default TrackModal;
