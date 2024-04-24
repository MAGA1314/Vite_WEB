import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <Nav>
        <Link to="contacto"> Haz Click Para Ir a Contacto</Link>
        <hr />
        <Link to="about"> Haz Click Para Ir a AboutUs</Link>
        </Nav>
    </div>
  )
}

export default Nav