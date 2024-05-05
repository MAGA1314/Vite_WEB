import React, { useState } from 'react';
import Imagen from '../assets/Registro.jpg';
import User from '../assets/Usuario.jpg';
import appFirebase from '../Credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

export const Registro = () => {
    const [registrando, setRegistrando] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const funcAutentication = async (e) => {
        e.preventDefault();

        // Validación básica de los campos
        if (!email ||!password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validación de longitud de la contraseña
        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (error) {
                alert("Error al crear cuenta: " + error.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                alert("Error al iniciar sesión: " + error.message);
            }
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card card-body shadow-lg">
                        <img src={User} alt="" className='estilo-user'/>
                        <form onSubmit={funcAutentication}>
                            <input type="text" placeholder='Ingresar Email' className='caja-texto' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Ingresar Contraseña' className='caja-texto' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='btnform'>{registrando? "Registrate" : "Inicia Sesion"}</button>
                        </form>
                        <h4 className='texto'>{registrando? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={() => setRegistrando(!registrando)}>{registrando? "Inicia Sesion" : "Registrate"}</button></h4>
                    </div>
                </div>
                <div className='col-md-8'>
                    <img src={Imagen} alt="" className='tamaño-imagen'/>
                </div>
            </div>
        </div>
    );
};
