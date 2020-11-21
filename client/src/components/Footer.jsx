import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <div>
          <Container id="footer" fluid>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link className="text" eventKey="disabled" disabled>
                    Copyright © 2020 Zenyu. All rights reserved.
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text" eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="terms" className="text" eventKey="tos">Terms of Service</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="disclaimer" className="text" eventKey="disclaimer">Disclaimer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="privacy" className="text" eventKey="privacy">Privacy Policy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
      </div>
    )
  }
}

export default Footer;
