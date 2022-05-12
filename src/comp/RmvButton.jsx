import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function RmvButton(props, { players }) {
  //   console.log(props);
  function remove() {
    props.Remove(props.playerData.name);
  }
  return (
    <Button variant="primary" onClick={remove}>
      Remove
    </Button>
  );
}
