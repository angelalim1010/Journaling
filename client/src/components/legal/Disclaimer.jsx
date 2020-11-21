import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';

import '../style/style.css';
import '../style/Legal.css';

class Disclaimer extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <Container className="section">
            <Row className="justify-content-center title">
              <Col className="text-center" md="auto">
                <h1>Disclaimer</h1>
              </Col>
            </Row>
            <Row>
              <Col className="text-justify section-text" md="auto">
                  <p>This is the Disclaimer.</p>
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    )
  }
}

export default Disclaimer
