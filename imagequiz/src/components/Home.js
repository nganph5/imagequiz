import flowers from "./flowers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import quizzes from "./data";
import { Link } from "react-router-dom";

function Home() {
  console.log(quizzes);
  return (
    <div className="bg-dark">
      <Container fluid="md">
        <Row>
          {flowers.map((flower) => (
            <Col key={flower.name}>
              <Link to={`${flower.name}`}>
                <img src={flower.picture} alt={flower.name} />{" "}
              </Link>
              <div style={{ color: "white" }}>{flower.name}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
