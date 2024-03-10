import axios from 'axios';
import {useState} from 'react'
import { IoTrash } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";



const DeleteButton = () => {
    const [openDelete, setOpenDelete] = useState(false)

    const handleDelete = async (_id) => {
        try {
          await axios
            .delete(`http://localhost:3000/Api/Bill/${billId}/Participant/${_id}`)
            .then((res) => {
              fnGetData()
              toast.success('Participante eliminado correctamente')
            })
            .catch((err) => console.log(err))
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <span className='flex flex-row gap-3 justify-center items-center'>
      {!openDelete ? (
        <IoTrash
          size={24}
          className='p-0  text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
          onClick={() => setOpenDelete(true)}
        />
      ) : (
        <>
          <MdCheckCircle
            size={30}
            className='hover:scale-110 hover:cursor-pointer transition-all text-red-600'
            onClick={() => {
              handleDelete(id)
              setOpenDelete(false)
            }}
          />
          <MdCancel
            size={30}
            className='hover:scale-110 hover:cursor-pointer transition-all'
            onClick={() => setOpenDelete(false)}
          />
        </>
      )}
    </span>
  )
}

export default DeleteButton