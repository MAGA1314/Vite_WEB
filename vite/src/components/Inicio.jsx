import React from 'react'
import { Link } from 'react-router-dom'
import appFirebase from '../Credenciales'
import { getAuth,signOut } from 'firebase/auth'

import { get } from 'firebase/database'
const auth = getAuth(appFirebase);

export const Inicio = ({correoUsuario}) => {
  return (
    <div>
        <h1 className='text-center'> Pagina De Inicio </h1>
        <h2 className='text-center'>Bienvenido {correoUsuario}</h2>
        <button className='btn btn-primary' onClick={()=>signOut(auth)}>Logout</button>
        <Link to="contacto"> Haz Click Para Ir a Contacto</Link>
        <hr />
        <Link to="about"> Haz Click Para Ir a AboutUs</Link>
    </div>
  )
}

export default Inicio