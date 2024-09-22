import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css";  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">© 2024 Deveffect. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;