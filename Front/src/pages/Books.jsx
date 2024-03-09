import {useEffect, useState} from 'react'
import { getBooks } from '../helpers/dataBooks'
import TableBooks from '../components/TableBooks'

const Books = () => {
    const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks(setBooks)
  }, [])

  console.log("books", books)

  return (
    <div className='bg-slate-50 text-black h-[100vh]'>
        <h1>Librería Middas</h1>
        <TableBooks books={books}/>
        
    </div>
  )
}

export default Books