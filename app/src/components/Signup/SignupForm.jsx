import { useContext } from 'react';
import "./SignupForm.css";
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ThemeContext } from '../../context/ThemeContext';

const SignupForm = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <Form className='Signup_container' data-bs-theme={theme}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username"/>
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
        <Link to= "/Digimon-TCG-API/user/login" variant="primary" type="submit">
          Login
        </Link>
      </Form.Group>
    </Form>
  )
}

export default SignupForm