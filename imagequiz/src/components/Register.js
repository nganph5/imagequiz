import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import local_temp_store from '../data_access_layer/local_temp_storage';


function Register() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPass] = useState('');
    const navigate = useNavigate();

    let onNameChanged = (e) => {
        setName(e.target.value);
    }

    let onEmailChanged = (e) => {
      setEmail(e.target.value);
    }

    let onPassChanged = (e) => {
      setPass(e.target.value);
    }

    let onSubmitHandler = (e) =>{
      local_temp_store.customers.push({name: name, email: email, passwd: passwd});
      navigate("/login");
    }

    return(
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={onNameChanged}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} onChange={onEmailChanged}/>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={passwd} onChange={onPassChanged}/>
          </Form.Group>

          <Button variant="danger" type="submit">Submit</Button>  
      </Form>
    );
}

export default Register;