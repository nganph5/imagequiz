import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import APIAccess from '../communication/APIAccess';

function Home() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    APIAccess.getFlowers()
    .then(x => {
      setFlowers(x);
    })
    .catch(e => {
      console.log(e);
      alert('Something went wrong!');
    })
  }, [])

  return Object.keys(flowers).length > 0 ? (
    <div className="bg-dark">
      <Container fluid="md">
        <Row>
          {flowers.map(
            (flower, i) => (
              <Col key={flower.name}>
                <Link to={`${flower.name}`}>
                  <img src={flower.picture} alt={flower.name} />{" "}
                </Link>
                <div style={{ color: "white" }}>{flower.name}</div>
              </Col>
            ),
          )}
        </Row>
      </Container>
    </div>
  ) : (<h1>Loading...</h1>)
}

export default Home;
