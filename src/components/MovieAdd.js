import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function MovieAdd({ movies, setMovies }) {
  const handleAdd = () => {
    setMovies([...movies, newMovie]);
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  return (
    <div style={{ marginTop: "20px" }}>
      <>
        <Button variant="dark" onClick={handleShow}>
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form.Label htmlFor="inputPassword5">name</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, name: e.target.value })
                }
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </>
            <>
              <Form.Label htmlFor="inputPassword5">URL</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, posterurl: e.target.value })
                }
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </>
            <>
              <Form.Label htmlFor="inputPassword5">description</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </>
            <>
              <Form.Label htmlFor="inputPassword5">rating</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rating: e.target.value })
                }
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default MovieAdd;
