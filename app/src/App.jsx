import { useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

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
              <Router>
                  <Routes>
                      <Route path='/user/new' element={<SignupForm/>}></Route>
                      <Route path='/user/login' element={<LoginForm/>}></Route>
                      <Route path='/insertion/' element={<InsertDigimon/>} ></Route>
                  </Routes>
              </Router>
              <button onClick={() => setShowDigimonAPI(true)}>Mostrar Digimons</button>
              {showDigimonAPI && <DigimonGetALL/>}
          </div>
      </>
    )
}

export default App