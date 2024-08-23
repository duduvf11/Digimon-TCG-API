import { useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import Header from './components/header/Header'
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm';
import DigimonSearchAPI from './components/Search-API/Input'
import DigimonGetALL from './components/GetAllDigimon/DigimonGetALL';

import { ThemeContext } from './context/ThemeContext'; 

function App() {
    const [showDigimonAPI, setShowDigimonAPI] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
        <div className={`${theme === "dark"? " dark-theme" : ""}`}>
            <button onClick={toggleTheme}></button>
            <h1>Tema: {theme}</h1>
            <Header/>
            <SignupForm/> 
            <LoginForm/>
            <DigimonSearchAPI/>
            <button onClick={() => setShowDigimonAPI(true)}>Preencher</button>
            {showDigimonAPI && <DigimonGetALL/>}
        </div>
        
    </>
  )
}

export default App