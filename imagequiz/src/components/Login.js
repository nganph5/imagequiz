import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import local_temp_store from '../data_access_layer/local_temp_storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [passwd, setPass] = useState('');
  const navigate = useNavigate();

  let onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  let onPassChanged = (e) => {
    setPass(e.target.value);
  }

  let onSubmitHandler = (e) =>{
    e.preventDefault();
    let found = local_temp_store.customers.find(x => 
      (x.email.toLowerCase() === email.toLowerCase() && x.passwd === passwd));
    if (found) {
      props.customerLoggedIn(email);
      navigate("/");
    }else{
      alert("Invalid credentials!");
    }
  }

  return(
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={onEmailChanged}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={passwd} onChange={onPassChanged}/>
        </Form.Group>

        <Button variant="danger" type="submit">Submit</Button>
    </Form>
  );
}

export default Login;
