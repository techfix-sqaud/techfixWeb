import React, { useState } from "react";
import { Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const Subscribe = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const [data, setData] = useState({
    subscriber_email: "",
  });

  const Subscribe = (event) => {
    event.preventDefault();
    alert("status is ready for pick up");
  };

  const submit = async (e) => {
    // e.preventDefault();
    // await TechFixAPI.post("/api/subscriber", {
    //   subscriber_email: data.subscriber_email,
    // }).then((res) => {
    //   let respond = res.data;
    //   alert(respond);
    //   resetForm(e);
    // });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setData({
      subscriber_email: "",
    });
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <InputGroup>
            <FormControl
              className="subEmail"
              onChange={(e) => handle(e)}
              id="subscriber_email"
              value={data.subscriber_email}
              type="email"
              name="email"
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
