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
            <Row className="justify-content-center">
              <Col className="text-center title" s={6}>
                <h1>Disclaimer</h1>
                <h6><em>Last updated November 21, 2020.</em></h6>
              </Col>
            </Row>
            <Row className="justify-content">
              <Col className="section-text" s={6}>
                <h5>INTRODUCTION</h5>
                The information provided by Zenyu (“we,” “us” or “our”) on zenyu.herokuapp.com (the “Site”) is for general informational purposes only.
                  All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, 
                  regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
                <br/><br/>
                <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the 
                  site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site 
                  is solely at your own risk. This disclaimer template was created using Termly.</p>

                <h5>PROFESSIONAL DISCLAIMER</h5>
                The Site cannot and does not contain medical/fitness/health/other advice. Although writing can be a powerful tool, the Site is not a 
                  substitute for psychotherapy or professional advice by any means. The medical/fitness/health/other information is provided for general 
                  informational and educational purposes only. If you are highly distressed, expressive writing is not recommended. If you become upset, 
                  agitated or overwhelmed while writing, simply stop writing.
                <br/><br/>
                <p>Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We 
                  do not provide any kind of medical/fitness/health/other advice. The use or reliance of any information contained on this site is solely 
                  at your own risk.</p>
              </Col>
            </Row>
          </Container>
          <footer className="footer"><Footer /></footer>
      </div>
    )
  }
}

export default Disclaimer
