import { useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/header/Header'
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm';
import DigimonGetALL from './components/GetAllDigimon/DigimonGetALL';

import { ThemeContext } from './context/ThemeContext'; 
import InsertDigimon from './components/InsertDigimon/InsertDigimon';

function App() {
    const [showDigimonAPI, setShowDigimonAPI] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
      <>
          <div className={`${theme === "dark"? " dark-theme" : ""}`}>
              <Header/>
              <button className='theme_button' onClick={toggleTheme}>Tema: {theme}</button>
              <BrowserRouter>
                  <Routes>
                      <Route path='/Digimon-TCG-API/users/new' element={<SignupForm/>}></Route>
                      <Route path='/Digimon-TCG-API/users/login' element={<LoginForm/>}></Route>
                      <Route path='/Digimon-TCG-API/digimons' element={<InsertDigimon/>} ></Route>
                  </Routes>
              </BrowserRouter>
              <button onClick={() => setShowDigimonAPI(true)}>Mostrar Digimons</button>
              {showDigimonAPI && <DigimonGetALL/>}
          </div>
      </>
    )
}

export default App