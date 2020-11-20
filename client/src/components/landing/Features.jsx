import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEdit, FaRegListAlt, FaRegSmile, FaRegImage } from 'react-icons/fa';
import './Landing.css'

class Features extends Component {
  render() {
    return (
      <div id="features">
        <Container className="section">
          <Row className="justify-content-center">
            <Col className="text-center" md="auto">
              <h3>Features</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-center" s={6}>
              <p>Journaling can help bring awareness, clarity, and relief.<br/>
              Zenyu is a web application that encourages the indivindual to foster mindfulness and personal growth through expressive writing.</p>
            </Col>
          </Row>       
          <Row className="justify-content-center">
            <Col xs={6} md={3} className="text-center">
              <FaEdit className="icon" />
              <h5>Journal</h5>
              <p>Freely express your thoughts on a daily basis. You keep your journal personal, and we keep it private.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <FaRegListAlt className="icon" />
              <h5>Guided Prompts</h5>
              <p>Not sure about what to write? <br/> Choose from our library of curated therapeutic prompts to help you get started.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <FaRegSmile className="icon" />
              <h5>Mood Tracker</h5>
              <p>Keep a log of your daily mood to gain personal insights and follow your progress.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <FaRegImage className="icon" />
              <h5>Photos</h5>
              <p>Customize your entries by uploading photographs and rich images.</p>
            </Col>
          </Row>
          <Row className="justify-content-center section-emphasis">
              <h4>Start writing with Zenyu today.</h4>
          </Row>
          <Row className="justify-content-center">
            <Button href="/signup" className="btn-custom">Get started</Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Features
