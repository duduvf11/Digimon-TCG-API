import { useContext } from 'react';
import "./InsertDigimon.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { ThemeContext } from '../../context/ThemeContext';

const InsertDigimon = () => {
    const {theme} = useContext(ThemeContext)
  return (
        <div>
            <Form className='Insert_container' data-bs-theme={theme} >
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
  )
}

export default InsertDigimon