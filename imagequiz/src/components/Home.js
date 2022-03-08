import flowers from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

function Home() {
  return (
    <div className="bg-dark">
      <Container fluid="md">
        <Row>
          {flowers.map((flower) => (
            <Col key={flower.name}>
              <img src={flower.picture} alt={flower.name} />
              <div style={{ color: "white" }}>{flower.name}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
