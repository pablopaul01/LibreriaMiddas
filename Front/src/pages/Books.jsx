import {useEffect, useState} from 'react'
import { getBooks } from '../helpers/dataBooks'

const Books = () => {
    const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks(setBooks)
  }, [])

  console.log("books", books)

  return (
    <div>
        Libreria Middas
        
    </div>
  )
}

export default Books