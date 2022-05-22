import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div style={{ display: "block", margin: "0 auto", width: "60%" }}>
      <h1> contact page</h1>
      <>
        <Form.Group className="mb-3">
          <Form.Label>Full name</Form.Label>
          <Form.Control placeholder="Full Name" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Phone Number" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control placeholder="Company" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control style={{ height: 200 }} placeholder="" disabled />
        </Form.Group>
        <Button>Send</Button>
      </>
    </div>
  );
}

export default Contact;
