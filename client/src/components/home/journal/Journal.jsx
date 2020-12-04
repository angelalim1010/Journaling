import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from './home/Navigation';
import Footer from '../../Footer';

import '../../style/style.css';


class Journal extends Component {
  handleLogout = () => {
    const { logout } = this.context
    logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <Fragment>
        <Navigation handleLogout={this.handleLogout} />
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1>Journal Components</h1>
                    <h1>Journal Components</h1>
                    <h1>Journal Components</h1>
                    <h1>Journal Components</h1>
                    <h1>Journal Components</h1>
                </Col>
            </Row>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Journal
