import React, { useContext } from 'react';
import "./input.css";
import axios from 'axios'
import { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { ThemeContext } from '../../context/ThemeContext';

function DigimonSearchAPI(){
  const [input, setInput] = useState('')
  const [send, setSend] = useState('')

  const {theme} = useContext(ThemeContext)

  return (
      <div>
          <div className='format-input'>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" data-bs-theme={theme}>
              <Form.Label data-bs-theme="light">Digimon Name</Form.Label>
              <Form.Control type="text" value={input} onChange={(ev) => setInput(ev.target.value)} placeholder="MetalGreymon" />
              </Form.Group>
            </Form>
            <Button onClick={() => {
                      setSend(input)
                      setInput('')
              }} variant="secondary" size="lg" active>
              Buscar
            </Button>
          </div>
          <div>
          {send && <SearchDigimon digimon={send} />}
          </div>
          <hr />
      </div>
  )
}

function SearchDigimon(props){
  const [digimonData, setDigimonData] = useState([]);

  const {theme} = useContext(ThemeContext)

  useEffect(() => {
      axios.get('https://digimoncard.io/api-public/search.php?n=' + props.digimon)
      .then(response => response.data)
      .then(data => setDigimonData(data))
      .catch(error => console.error('Error', error))            
  }, [props.digimon])

  return <div>
      <ul className="search_list">
          {digimonData.map((value, index) => (
              <li key={index}>
                <Card data-bs-theme={theme}  style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={value.image_url} />
                  <Card.Body>
                    <Card.Title>{value.name}</Card.Title>
                    <Card.Text>
                      {value.cardnumber}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
          ))}
      </ul>
  </div>
}

export default DigimonSearchAPI