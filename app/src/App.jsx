import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const [showDigimonAPI, setShowDigimonAPI] = useState(false)
    
    return <div>
        <h1>Digimon API</h1>
        <hr />
        <DigimonSearchAPI/>
        <button onClick={() => setShowDigimonAPI(true)}>Preencher</button>
        {showDigimonAPI && <DigimonAPI/>}
    </div>
}

function DigimonSearchAPI(){
    const [input, setInput] = useState('')
    const [send, setSend] = useState('')

    return (
        <div>
            <div>
               <input type="text" value={input} onChange={(ev) => setInput(ev.target.value)}/> 
               <button onClick={() => {
                        setSend(input)
                        setInput('')
                }}>Buscar</button>
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

    useEffect(() => {
        axios.get('https://digimoncard.io/api-public/search.php?n=' + props.digimon)
        .then(response => response.data)
        .then(data => setDigimonData(data))
        .catch(error => console.error('Error', error))            
    }, [props.digimon])

    return <div>
        <ul>
            {digimonData.map((value, index) => (
                <li key={index}>
                    <img src={value.img} alt="Digimon" />
                   <h2>{value.name}</h2>
                   <p>{value.cardnumber}</p>
                </li>
            ))}
        </ul>
    </div>
}

function DigimonAPI(){
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

function InputValidado(){
    const [exInput, setExInput] = useState(''),
          [search, setSearch] = useState([]),
          [count, setCount] = useState(0)

    return (
        <div>
            <div>
               <input type="text" value={exInput} onChange={(ev) => setExInput(ev.target.value)}/> 
               <button onClick={() => {
                    if (exInput.length > 3){
                        setCount(count + 1)
                        setSearch([...search, {valor: exInput, num: count}])
                        setExInput('')
                    }
               }}>Adicionar</button>
            </div>
            {exInput.length <= 3 && exInput.length != 0 && (
                <h1 className='erro'>Pesquisa muito curta.</h1>
            )}
            <Item vetor={search}/>
        </div>
    )
}

function Item(props){

    return <div>
        <h1>Lista</h1>
        <ul>
            {props.vetor.map((valor, index) => (
                <li key={index} style={valor.num % 2 == 0 ? {background: "red"} : {background: "green"}}>
                    {valor.valor}
                </li>
            ))}
        </ul>
    </div>
}

export default App
