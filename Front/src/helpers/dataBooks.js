import { axiosInstance } from '../config/axiosInstance'

export const getBooks = async (setBooks) => {
    try {
      const response = await axiosInstance.get('/books')
      setBooks(response.data.books)
    } catch (error) {
      console.log("el error", error.response.data.mensaje)
    }
}

export const addBook = async (newBook) => {
    try {
        await axiosInstance.post('/book', newBook)
    }
    catch(error){
        console.log(error)
    }
}