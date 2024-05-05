import './App.css';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './Credenciales';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Contacto from './components/Contacto'; // Asegúrate de importar este componente
import AboutUS from './components/AboutUS'; // Asegúrate de importar este componente

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={usuario? <Inicio correoUsuario={usuario.email} /> : <Registro />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/about" element={<AboutUS />} />
    </Routes>
  );
}

export default App;
