import { useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/Header'
import DigimonSearchAPI from './components/Search-API/Input'
import DigimonGetALL from './components/GetAllDigimon/DigimonGetALL';

import { ThemeContext } from './context/ThemeContext'; 

function App() {
    const [showDigimonAPI, setShowDigimonAPI] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
        <h1>Tema: {theme}</h1>
        <Header/>    
        <DigimonSearchAPI/>
        <button onClick={() => setShowDigimonAPI(true)}>Preencher</button>
        {showDigimonAPI && <DigimonGetALL/>}
    </>
  )
}

export default App