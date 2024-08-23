import { useContext } from 'react';
import "./LoginForm.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ThemeContext } from '../../context/ThemeContext';

const LoginForm = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <Form className='Login_container' data-bs-theme={theme}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
  )
}

export default LoginForm