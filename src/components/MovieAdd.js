import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addRando } from "../js/RandoSlice";

function MovieAdd() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newRando, setNewRando] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  return (
    <div style={{ marginTop: "20px" }}>
      <>
        <Button
          style={{ display: "block", margin: "0 auto" }}
          variant="dark"
          onClick={handleShow}
        >
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Rando</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form.Label htmlFor="">Lieu</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewRando({ ...newRando, name: e.target.value })
                }
              />
              <Form.Label htmlFor="">URL Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewRando({ ...newRando, posterurl: e.target.value })
                }
              />
              <Form.Label htmlFor="">description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewRando({ ...newRando, description: e.target.value })
                }
              />
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(addRando(newRando));
              }}
            >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default MovieAdd;
