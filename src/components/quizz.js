import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import APIAccess from '../communication/APIAccess';

function Quizz(props) {
  const [quizzes, setQuizzes] = useState({});
  const { i } = useParams();
  const [score, setScore] = useState(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    APIAccess.getQuizz(i).then(
      res => {
        if(res.done){
          setQuizzes(res.result);
        }
      }
    ).catch(e => {
      alert("Can't load quiz. Make sure to log in first.")
    })
  },[i])

  return Object.keys(quizzes).length > 0 ? (
    <>
      <Container>
        {n < quizzes.questions.length ?
        <Row>
          <Col>
            <div>Question {n + 1} / {quizzes.questions.length}</div>
            <div>Your score is: {score} / {quizzes.questions.length}</div>
          </Col>
          <Quiz quiz={quizzes.questions[n]} n={n} setN={setN} score={score} setScore={setScore}/>
        </Row>
        :
          <Row>
            <p>The quizz end! Your score is {score}.</p>
            <EndQuiz quizTaker={props.customer} quizName={i} score={score}/>
          </Row>
        }
      </Container>
    </>
  ) : (<h5> Loading... </h5>);
}

export const Quiz = ({quiz: {answer, choices, picture}, n, setN, score, setScore}) => {

  const [clickedChoice, setClickedChoice] = useState('');

  const onSubmit = (choice) => {
    if (choice.toLowerCase().trim() === answer.toLowerCase().trim()) {
      setScore(score + 1);
    }
    setN(n + 1);
  }

  return(
    <div>
      <Col>
        What is this flower?
        <br />
        <img src={picture} alt='Some flower'/>
        {choices.split(",").map((choice, key) => (
          <div key={key}>
            <input type="radio" id={choice} value={choice} name='choices' onChange={(e) => {
              setClickedChoice(e.target.value);
            }}/>
            <label htmlFor={`${choice}${key}`}>{choice}</label><br></br>
          </div>
        ))}
        <Button onClick={() => {
          onSubmit(clickedChoice)
        }}>Submit</Button>
      </Col>
    </div>
  );
}

export const EndQuiz = ({quizTaker, quizName, score}) => {  
  const [stored, setStored] = useState(false);
  
  if (quizTaker.length > 0 && !stored){
    APIAccess.addScore(quizTaker, quizName, score)
    .then(
    (res) => {
      setStored(true);
      // console.log(res);
    })
  } 

  return stored ? (
    <p>Score saved for user {quizTaker}.</p>
  ) : (<p>Please log in to save your score.</p>);
}


export default Quizz;
