import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';

import './Landing.css';

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
                <Nav.Link className="text" eventKey="link-1">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text" eventKey="link-2">Disclaimer</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
      </div>
    )
  }
}

export default Footer;
