import Button from "@restart/ui/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Navigation({ setText, setRating }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movies app</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Cantact</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
            </Nav>
            <samp style={{ marginRight: "20px" }}>
              <ReactStars
                count={5}
                size={40}
                activeColor="#ffd700"
                onChange={(newRating) => setRating(newRating)}
              />
            </samp>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setText(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
