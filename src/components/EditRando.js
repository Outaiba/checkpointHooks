import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addRando, editRando } from "../js/RandoSlice";

function EditRando({ rando }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({});
  return (
    <div>
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
          onClick={handleShow}
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>{" "}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Rando</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form.Label htmlFor="">Lieu</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEdited({ ...edited, name: e.target.value })}
              />
              <Form.Label htmlFor="">URL Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setEdited({ ...edited, posterurl: e.target.value })
                }
              />

              <Form.Label htmlFor="">description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setEdited({ ...edited, description: e.target.value })
                }
              />

              <Form.Label htmlFor="">rating</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setEdited({ ...edited, rating: e.target.value })
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
                dispatch(editRando({ id: rando.id, edited }));
              }}
            >
              Edit rando
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default EditRando;
