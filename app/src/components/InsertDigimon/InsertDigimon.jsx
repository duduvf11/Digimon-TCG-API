import { useContext, useState} from 'react';
import "./InsertDigimon.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';
import { ThemeContext } from '../../context/ThemeContext';

const InsertDigimon = () => {
    const { theme } = useContext(ThemeContext);

    const [alertMessage, setAlertMessage] = useState(null); // Estado para a mensagem de alerta
    const [alertVariant, setAlertVariant] = useState('danger'); // Estado para o tipo de alerta (danger, success, etc.)

    const handleSubmit = (event) => {
        event.preventDefault();

        const digimonName = event.target.formDigimonName.value;
        const digimonType = event.target.formDigimonType.value;
        const digimonDescription = event.target.formDigimonCardDescription.value;

            // Validações
            if (digimonName.trim() === '') {
                setAlertMessage('O nome do Digimon não pode estar vazio.');
                setAlertVariant('danger');
                return;
            }
    
            if (digimonName.length < 6) {
                setAlertMessage('O nome do Digimon deve ter pelo menos 6 caracteres.');
                setAlertVariant('danger');
                return;
            }
    
            if (!digimonName.toLowerCase().endsWith('mon')) {
                setAlertMessage('O nome do Digimon deve terminar com "mon".');
                setAlertVariant('danger');
                return;
            }
    
            if (digimonType.trim() === '') {
                setAlertMessage('O tipo do Digimon não pode estar vazio.');
                setAlertVariant('danger');
                return;
            }
    
            if (digimonType.length < 2) {
                setAlertMessage('O tipo do Digimon deve ter pelo menos 2 caracteres.');
                setAlertVariant('danger');
                return;
            }
    
            if (digimonDescription.trim() === '') {
                setAlertMessage('A descrição do Digimon não pode estar vazia.');
                setAlertVariant('danger');
                return;
            }
    
            if (digimonDescription.length < 8) {
                setAlertMessage('A descrição do Digimon deve ter pelo menos 8 caracteres.');
                setAlertVariant('danger');
                return;
            }
    
            // Limpa a mensagem de alerta ao enviar com sucesso
            setAlertMessage(null);

        const requestBody = {
            name: digimonName,
            type: digimonType,
            description: digimonDescription,
        };

        axios.post('https://localhost:3030/digimons', requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Isso garante que o cookie de autenticação seja enviado
        })
        .then(() => {
            setAlertMessage('Digimon criado com sucesso!');
            setAlertVariant('success');
        })
        .catch((error) => {
            setAlertMessage('Erro ao criar Digimon.');
            setAlertVariant('danger');
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <Form className='Insert_container' data-bs-theme={theme} onSubmit={handleSubmit}>
                {alertMessage && (
                    <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
                <Form.Group className="mb-3" controlId="formDigimonName">
                    <Form.Label>Digimon Name</Form.Label>
                    <Form.Control type="digimon_name" placeholder="Enter Digimon Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDigimonType">
                    <Form.Label>Digimon Type</Form.Label>
                    <Form.Control type="digimon_type" placeholder="Enter Digimon Type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDigimonCardDescription">
                    <Form.Label>Digimon Card Description</Form.Label>
                    <Form.Control type="digimon_card_value" placeholder="Enter Digimon Card Description" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Digimon
                </Button>
            </Form>
        </div>
    );
}

export default InsertDigimon;
