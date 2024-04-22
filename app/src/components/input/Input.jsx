import React from 'react';
import "./input.css";

import Form from 'react-bootstrap/Form';

const Input = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Digimon Name</Form.Label>
          <Form.Control type="digimon" placeholder="MetalGreymon" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Input