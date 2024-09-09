import { useState, useContext } from 'react';
import "./LoginForm.css";
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { ThemeContext } from '../../context/ThemeContext';

const LoginForm = () => {
    const {theme} = useContext(ThemeContext);
    
    // Estado para armazenar username e password
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.trim() === '') {
            setAlertMessage('O campo Username não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }
    
        if (user.length < 5) {
            setAlertMessage('O Username deve ter pelo menos 5 caracteres.');
            setAlertVariant('danger');
            return;
        }
    
        if (password.trim() === '') {
            setAlertMessage('O campo Senha não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }
    
        if (password.length < 6) {
            setAlertMessage('A Senha deve ter pelo menos 6 caracteres.');
            setAlertVariant('danger');
            return;
        }
    
        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;
    
        if (!hasNumber.test(password) || !hasLetter.test(password)) {
            setAlertMessage('A Senha deve conter pelo menos uma letra e um número.');
            setAlertVariant('danger');
            return;
        }

        axios.post('https://localhost:3030/users/login', { user, password }, { withCredentials: true })
        .then(response => {
            // Resgatar o cookie da resposta
            const cookies = response.headers['set-cookie'];
            console.log('Cookies:', cookies);
        
            setAlertMessage('Login bem-sucedido!');
            setAlertVariant('success');
        })
        .catch(error => {
            setAlertMessage('Erro ao fazer login. Verifique suas credenciais.');
            setAlertVariant('danger');
            console.error('Erro ao fazer login:', error);
        });
    };

    return (
        <Form className='Login_container' data-bs-theme={theme} onSubmit={handleSubmit}>
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
                Submit
            </Button>
        </Form>
    );
}

export default LoginForm;