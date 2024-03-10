import { axiosInstance } from '../config/axiosInstance'
import { Toaster, toast } from 'sonner'

export const getBooks = async (setBooks) => {
    try {
      const response = await axiosInstance.get('/books')
        setBooks(response.data.books)
    } catch (error) {
      console.log("el error", error)
    }
}

export const createBook = async (newBook,setLoading,setBooks) => {
    try {
        await axiosInstance.post('/book', newBook)
    }
    catch(error){
        console.log("error al crear",error)
    } finally{
      setLoading(false)
      getBooks(setBooks)
      document.getElementById(`modal_${1}`).close()
    }
}

export const deleteBook = async (id,setBooks) => {
  try {
    await axiosInstance.delete(`/book/${id}`)
    getBooks(setBooks)
    toast.success('Libro eliminado correctamente', {position: 'top-right'})
  } catch (error) {
    console.log("Error al eliminar", error)
  }
}
