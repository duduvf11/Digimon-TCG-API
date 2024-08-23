import { useContext } from 'react';
import "./SignupForm.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ThemeContext } from '../../context/ThemeContext';

const SignupForm = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <Form className='Signup_container' data-bs-theme={theme}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Form.Group className="login" controlId="formBasicLogin">
        <Form.Text className="text-muted">
          Already have a account?
        </Form.Text>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form.Group>
    </Form>
  )
}

export default SignupForm