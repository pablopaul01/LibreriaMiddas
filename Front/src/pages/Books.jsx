import {useEffect, useState} from 'react'
import { getBooks } from '../helpers/dataBooks'
import TableBooks from '../components/TableBooks'
import ActionButton from '../components/ActionButton'
import Modal from '../components/modal/Modal'

const Books = () => {
    const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks(setBooks)
  }, [])

  console.log("books", books)

  return (
    <div className='bg-slate-100 text-black h-[100vh] flex justify-center w-full'>
        <div className="container w-[100%] max-w-[1200px] flex flex-col gap-10 px-5">
            <h1>Librería Middas</h1>
            <Modal
                    btnA={<ActionButton value={`Agregar Libro`} />}
                    id={1}
                  >
                    <div className='flex flex-col gap-5'>
                      <h3 className='font-bold text-lg'>Cargar Libro</h3>
                      
                    </div>
                </Modal>

            
            <TableBooks books={books}/>
        </div>
    </div>
  )
}

export default Books