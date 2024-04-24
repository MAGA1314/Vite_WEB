
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import AboutUS from './components/AboutUS'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element = {<Inicio/>} />
        <Route path="/contacto" element = {<Contacto/>} />
        <Route path="/about" element = {<AboutUS/>} />
        
      </Routes>
    </>
    
  )
}

export default App
