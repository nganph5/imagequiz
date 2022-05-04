import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import FederatedLogin from './components/FederatedLogin';
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Quizz from "./components/quizz";
import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState(localStorage.getItem('customer'));

  let customerLoggedInHandler = (customerEmail) => {
    localStorage.setItem('customer', customerEmail);
    setCustomer(customerEmail);
  };

  let customerLoggedOutHandler = () => {
    localStorage.removeItem('customer');
    setCustomer(undefined);
  }

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
            <Menu customer={customer} customerLoggedOut={customerLoggedOutHandler} />
          </Col>
        </Row>

        <Routes>
          <Route exact path="/register" element={<Register />}></Route>

          <Route path='/login/:from' element={<Login customerLoggedIn={customerLoggedInHandler} />}></Route>
          
          <Route path='/login' element={<Login customerLoggedIn={customerLoggedInHandler} />}></Route>

          <Route path='/google/:username/:name' element={<FederatedLogin provider="google" customerLoggedIn={customerLoggedInHandler} />}></Route>

          <Route exact path="/logout" element={<Logout customerLoggedIn={customerLoggedInHandler} />}></Route>

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
  if (isAuthenticated){
    return children;
  }else{
    return <Navigate to='/login' />
  }
}

export default App;
