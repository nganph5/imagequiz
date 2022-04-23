import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIAccess from '../communication/APIAccess';


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
      APIAccess.addCustomer(name, email, passwd)
      .then(x => {
        if (x.done){
          navigate("/login");
        }else{
          alert(x.message);
        }
      })
      .catch(e => {
        alert("Registration failed.");
      })
    }

    return(
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
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