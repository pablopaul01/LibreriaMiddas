import React from 'react'
import CardUser from '../components/CardUser'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className='h-[100vh] bg-slate-100 flex justify-center items-center'>
        <CardUser title={"Registrarse"} subTitle={"Completa los datos para crear tu cuenta"}>
          <RegisterForm />
        </CardUser>
    </div>
  )
}

export default Register