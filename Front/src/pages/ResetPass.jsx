import React from 'react'
import CardUser from '../components/CardUser'
import ResetForm from '../components/ResetForm'

const ResetPass = () => {
  return (
    <div className='h-[100vh] bg-slate-100 flex justify-center items-center'>
        <CardUser title={"Reestablecer contraseña"} subTitle={"Ingrese una nueva contraseña"}>
            <ResetForm/>
        </CardUser>
    </div>
  )
}

export default ResetPass