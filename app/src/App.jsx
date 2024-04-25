import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/Header'
import Input from './components/input/Input'
import Cards from './components/cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Input/>
        <Cards/>
    </>
  )
}

export default App