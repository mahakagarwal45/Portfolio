import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./contact.css"; // Import your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formData);
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="contact-heading">Contact Me</h2>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                className="contact-input"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                className="contact-input"
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button className="contact-button" variant="primary" type="submit">
              <a href="/home">Submit</a>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
