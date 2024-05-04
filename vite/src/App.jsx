
import './App.css'
import { useState } from 'react'
// Importar Modulos de Firebase
import appFirebase from './Credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

import { Routes, Route } from 'react-router-dom'

//importar componentes
import { Registro } from './components/Registro'
import Inicio from './components/Inicio'
// import Contacto from './components/Contascto'
// import AboutUS from './components/AboutUS'
// import { useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if ( usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null);
    }
    
  });
  return (
    <>
      {usuario ? <Inicio correoUsuario = {usuario.email}/> : <Registro/>}

      {/* <Routes>
        <Route path="/" element = {<Inicio/>} />
        <Route path="/contacto" element = {<Contacto/>} />
        <Route path="/about" element = {<AboutUS/>} />
        
      </Routes> */}
    </>
    
  )
}

export default App
