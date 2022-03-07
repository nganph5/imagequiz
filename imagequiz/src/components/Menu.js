import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Menu extends Component {
  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Image Quiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar nav" />
          <Navbar.Collapse id="basic-navbar nav">
            <Nav className="me-auto">
            <Nav.Link href="#/register">Register</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}