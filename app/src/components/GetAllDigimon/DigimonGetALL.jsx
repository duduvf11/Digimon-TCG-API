import { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./DigimonGetALL.css"
import { ThemeContext } from '../../context/ThemeContext'

import Card from 'react-bootstrap/Card'


function DigimonGetALL(){
    const [digimonData, setDigimonData] = useState([]);

    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        axios.get('https://localhost:3030/digimons', {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Isso garante que o cookie de autenticação seja enviado
        })
        .then(response => {
            setDigimonData(response.data);
        })
        .catch(error => console.error('Error', error))            
    }, [])

    return <div>
        <ul className="search_list">
          {digimonData.map((value, index) => (
              <li key={index}>
                <Card data-bs-theme={theme}  style={{ width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>{value.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{value.type}</Card.Subtitle>
                    <Card.Text>
                      {value.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
          ))}
      </ul>
    </div>
}

export default DigimonGetALL