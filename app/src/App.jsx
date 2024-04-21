import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/Header'
import Home from './components/Forms/Forms'
import About from './components/about/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Home/>
        <About/>
    </>
  )
}

export default App