import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{backgroundColor: '#d1e0ff'}} className="mt-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md="auto">
            <img src="/logo.png" alt="Logo" height="30" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <p>© 2023 Quiz Master. All Rights Reserved || Md Faysal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;