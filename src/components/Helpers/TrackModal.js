import React, { useState } from "react";
import { Form, Button, Modal, Container, ProgressBar } from "react-bootstrap";

const TrackModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };

  const [Percentage, setPercentage] = useState(98);

  const TrackOrder = (event) => {
    event.preventDefault();
    alert("status is ready for pick up");
  };
  return (
    <Modal show={show} onHide={handleClose}>
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
            <Form.Control type="text" placeholder="order number" autoFocus />
          </Form.Group>

          <Button variant="dark" type="submit" value="Submit">
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
