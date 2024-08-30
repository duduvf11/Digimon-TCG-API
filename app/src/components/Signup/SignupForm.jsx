import { useContext, useState } from 'react';
import "./SignupForm.css";
import { Link } from 'react-router-dom';
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { ThemeContext } from '../../context/ThemeContext';

const SignupForm = () => {
    const {theme} = useContext(ThemeContext);
      
    // Estado para armazenar username e password
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3030/user/new', { user, password })
        .then(() => {
            setAlertMessage('Cadastro bem-sucedido!');
        })
        .catch(error => {
            setAlertMessage('Erro ao fazer Cadastro. Verifique suas credenciais.');
            setAlertVariant('danger');
            console.error('Erro ao fazer cadastro:', error);
        });
    };


  return (
    <Form className='Signup_container' data-bs-theme={theme} onSubmit={handleSubmit}>
    {alertMessage && (
      <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
          {alertMessage}
      </Alert>
    )}

      <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
                    type="text" 
                    placeholder="Enter Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
            />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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