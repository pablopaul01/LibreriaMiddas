import React from 'react'
import CardUser from '../components/CardUser'
import RecoverForm from '../components/RecoverForm'

const RecoverPass = () => {
  return (
    <div className='h-[100vh] bg-slate-100 flex justify-center items-center'>
        <CardUser title={"Recuperar contraseña"} subTitle={"Ingrese el correo electrónico de la cuenta que desea recuperar contraseña"}>
            <RecoverForm/>
        </CardUser>
    </div>
  )
}

export default RecoverPass