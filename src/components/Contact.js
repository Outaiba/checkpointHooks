import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div
      style={{
        display: "bloc",
        margin: "0 auto",
        backgroundColor: "rgb(203,217,226)",
      }}
    >
      <h1> CONTACT US</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ width: "300px", marginLeft: "200px" }}>
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="Enter your name" />
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Enter your last name" />
            <Form.Label>email</Form.Label>
            <Form.Control placeholder="Enter your email" />
            <Form.Label>message</Form.Label>
            <Form.Control placeholder="" style={{ height: "200px" }} />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;
