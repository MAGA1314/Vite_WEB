import React, { useState } from 'react'
import Imagen from '../assets/Registro.jpg'
import User from '../assets/Usuario.jpg'
import appFirebase from '../Credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase);

export const Registro = () => {
    const [registrando, setRegistrando] = useState(false);
    
    const funcAutentication = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password;

        if (registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                {/*Columna pequeña del formulario*/}
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img src={User} alt="" className='estilo-user'/>
                        <form onSubmit={funcAutentication}>
                            <input type="text" placeholder='Ingresar Email' className='caja-texto'id='email'/>
                            <input type="password" placeholder='Ingresar Contraseña' className='caja-texto' id='password'/>
                            <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                        </form>
                        <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>

                    </div>
                </div>
            </div>
            <div className='col-md-8'>
                {/* Columna grande para la imagen */}
                <img src={Imagen} alt="" className='tamaño-imagen'/>
            </div>
        </div>
    </div>
  )
}
