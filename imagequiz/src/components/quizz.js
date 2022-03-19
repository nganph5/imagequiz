import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import quizzes from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
function Quizz() {
  const { i } = useParams();
  const id = parseInt(i, 10);
  const name = quizzes[id].name;
  const questions = quizzes[id].questions;
  console.log(questions[0]);
  const [score, setScore] = useState(0);
  const [n, setN] = useState(0);
  const [picture, setPicture] = useState(questions[n].picture);
  const [choices, setChoices] = useState(questions[n].choices);
  const [answer, setAnswer] = useState(questions[n].answer);
  useEffect(() => {
    setPicture(questions[n].picture);
    setChoices(questions[n].choices);
    setAnswer(questions[n].answer);
  }, [id, n]);

  function handleClick(i) {
    if (n == 5) {
      return;
    }
    if (i === answer) {
      setScore(score + 1);
      setN(n + 1);
    } else {
      setN(n + 1);
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>Question {n + 1} / 6</div>
            <div>Your score is: {score} / 6</div>

            <img src={`${picture}`} />
          </Col>
          <Col>
            What is this flower?
            <br />
            {choices.map((i) => (
              <div>
                <Button onClick={() => handleClick(i)}>{i}</Button>{" "}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Quizz;
