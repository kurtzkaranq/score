import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddButton(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const sendInfo = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
    props.AddData(name);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements.score.value);
    props.AddData(e.target.elements);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Player
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="#" className="me-3">
                Player Name :{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="player's name"
                name="playerName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="#" className="me-3">
                Player Score :
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="player's score"
                name="score"
              />
            </Form.Group>
            <div className="mt-3">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
