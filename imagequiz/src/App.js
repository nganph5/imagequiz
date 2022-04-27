import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Quizz from "./components/quizz";
import { useState } from "react";
import APIAccess from './communication/APIAccess';

function App() {
  const [customer, setCustomer] = useState(localStorage.getItem('customer'));

  let customerLoggedInHandler = (customerEmail) => {
    localStorage.setItem('customer', customerEmail);
    setCustomer(customerEmail);
  };

  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Menu customer={customer} />
          </Col>
        </Row>

        <Routes>
          <Route exact path="/register" element={<Register />}></Route>

          <Route
            exact
            path="/login"
            element={<Login customerLoggedIn={customerLoggedInHandler} />}
          ></Route>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:i" element={<PrivateRoute><Quizz customer={customer}/></PrivateRoute>}></Route>
        </Routes>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

const PrivateRoute = ({customer, children}) => {
  let isAuthenticated = localStorage.getItem('customer');
  console.log(isAuthenticated);
  if (isAuthenticated){
    
    // e.preventDefault();
    // APIAccess.login(email, passwd)
    // .then(x => {
    //   if (x.done){
    //     props.customerLoggedIn(email);
    //     navigate("/");
    //   }else{
    //     alert(x.message);
    //   }
    // }).catch(e => {
    //   alert("Something went wrong!");
    // })


    return children;
  }else{
    return <Navigate to='/login' />
  }
}

export default App;
