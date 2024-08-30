import { useContext } from 'react';
import "./InsertDigimon.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { ThemeContext } from '../../context/ThemeContext';

const InsertDigimon = () => {
    const { theme } = useContext(ThemeContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const digimonName = event.target.formDigimonName.value;
        const digimonType = event.target.formDigimonType.value;
        const digimonDescription = event.target.formDigimonCardDescription.value;

        const requestBody = {
            name: digimonName,
            type: digimonType,
            description: digimonDescription,
        };

        axios.post('http://localhost:3030/insertion/', requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Isso garante que o cookie de autenticação seja enviado
        })
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <Form className='Insert_container' data-bs-theme={theme} onSubmit={handleSubmit}>
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
