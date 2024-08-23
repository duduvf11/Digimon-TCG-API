import { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./DigimonGetALL.css"
import { ThemeContext } from '../../context/ThemeContext'

function DigimonGetALL(){
    const [digimonData, setDigimonData] = useState([]);

    const {theme} = useContext(ThemeContext)

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
                    <div className={theme === 'dark' ? 'light-letter' : ''}>
                        <h2>{value.name}</h2>
                        <p>{value.cardnumber}</p>
                    </div>
                   
                </li>
            ))}
        </ul>
    </div>
}

export default DigimonGetALL