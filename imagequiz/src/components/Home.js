import flowers from "./flowers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import quizzes from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  console.log(quizzes);
  var i = 0;
  return (
    <div className="bg-dark">
      <Container fluid="md">
        <Row>
          {flowers.map(
            (flower, i) => (
              <Col key={flower.name}>
                <Link to={`${i}`}>
                  <img src={flower.picture} alt={flower.name} />{" "}
                </Link>
                <div style={{ color: "white" }}>{flower.name}</div>
              </Col>
            ),
            (i = i + 1)
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
