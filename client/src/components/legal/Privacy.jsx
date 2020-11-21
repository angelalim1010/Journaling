import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';

import '../style/style.css';
import '../style/Legal.css';

class Privacy extends Component {
    render() {
        return (
          <div>
            <Navigation />
              <Container className="section">
                <Row className="justify-content-center title">
                  <Col className="text-center" md="auto">
                    <h1>Privacy Policy</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-justify toc" md="auto">
                      <h5>Table of Contents</h5>
                      <h6>1. </h6>
                      <h6>Last updated November 21, 2020.</h6>
                  </Col>
                  <Col className="text-justify section-text" md="auto">
                      <p>This is the privacy policy.</p>
                  </Col>
                </Row>
              </Container>
            <Footer />
          </div>
        )
      }
    }

export default Privacy
