import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center text-center">
        <Col md="auto" className="footer-copywright">
          <h3>Designed and Developed by Mahak Agarwal</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
