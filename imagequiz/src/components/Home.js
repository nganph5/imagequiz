import React, { Component } from 'react';
import flowers from './data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  render(){
    return(
      <div>
        <div>Welcome to the Image Quizz :)</div>
        <Container fluid="md">
          <Row>
          {flowers.map(flower => (
          <Col key={flower.name}>
            <img src={flower.picture} />
            <div>{flower.name}</div>
          </Col>
          ))}
          </Row>
        </Container>
      </div>

    );
  }
}