import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./DigimonGetALL.css"

function DigimonGetALL(){
    const [digimonData, setDigimonData] = useState([]);

    useEffect(() => {
        axios.get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
        .then(response => response.data)
        .then(data => setDigimonData(data))
        .catch(error => console.error('Error', error))            
    }, [])

    return <div>
        <ul>
            {digimonData.map((value, index) => (
                <li key={index} className='digimonPreencher'>
                   <h2>{value.name}</h2>
                   <p>{value.cardnumber}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default DigimonGetALL