import React, {useState} from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import ActionButton from '../components/ActionButton'
import { Link } from 'react-router-dom'
import CardUser from '../components/CardUser'
import LoginForm from '../components/LoginForm'

const Login = () => {


  return (
    <div className='h-[100vh] bg-slate-100 flex justify-center items-center'>
        <CardUser title={"Iniciar Sesión"} subTitle={"Ingrese su correo para iniciar sesión"}>
            <LoginForm />
        </CardUser>
    </div>
  )
}

export default Login