import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
        <h1> Pagina De Inicio </h1>
        <Link to="contacto"> Haz Click Para Ir a Contacto</Link>
        <hr />
        <Link to="about"> Haz Click Para Ir a AboutUs</Link>
    </div>
  )
}

export default Inicio