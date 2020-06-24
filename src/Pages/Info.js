import React, { Component } from 'react';
import {Nav, Row, Tab, Col, Container} from "react-bootstrap";

export default class Info extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="w1">WHat the fuck </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="w2">WHat the fuck </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="w3">WHat the fuck </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="w4">WHat the fuck </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="w5">WHat the fuck </Nav.Link>
                </Nav.Item>

              </Nav>
            
            </Col>
            <Col sm={9}>
              <Tab.Content className="m-2">
                  <Tab.Pane eventKey='w1'>
                      <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"></img>
                      <p> LOL</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey='w2'>
                      <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"></img>
                      <p> LOL2</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey='w3'>
                      <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"></img>
                      <p> LOL3</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey='w4'>
                      <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"></img>
                      <p> LOL4</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey='w5'>
                      <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"></img>
                      <p> LOL5</p>
                  </Tab.Pane>
              </Tab.Content>

            </Col>

          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
