import React from 'react'
import "./cards.css"

import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Title>MetalGreymon</Card.Title>
            <Card.Text>
            Um Digimon Ciborgue que mecanizou mais de metade do seu corpo.
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Cards