import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import rock from '../../img/rock.jpg';

class About extends Component {
  render() {
    return (
      <div id="about">
        <Container className="section">
            <Row className="justify-contents-center">
                <Col xs={12} md={6}>
                  <img src={rock} className="img-responsive" alt="zen garden"/>
                </Col>
                <Col xs={12} md={6}>
                    <h3>Our Story</h3>
                    <p>
                    We created Zenyu in order to encourage the individual to lead a healthy lifestyle with a focus on 
                    mental health. Our goal was to create a tool to help a person cope with overwhelming emotions, such 
                    as stress, fear, or anxiety. Our web application provides a structured approach to journaling and 
                    offers safe boundaries. Zenyu is a platform where you can record your thoughts and feelings, 
                    reflect on your posts, and track your progress.
                    </p>
                </Col>
            </Row>
        </Container>          
      </div>
    )
  }
}

export default About
