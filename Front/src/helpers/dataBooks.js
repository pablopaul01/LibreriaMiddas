import { axiosInstance } from '../config/axiosInstance'
import { Toaster, toast } from 'sonner'

export const getBooks = async (setBooks) => {
    try {
      const response = await axiosInstance.get('/books')
        setBooks(response.data.books)
    } catch (error) {
      console.log("el error", error)
      toast.error('Ocurrió un error al obtener los libros', {position: 'top-right'})
    }
}

export const createBook = async (newBook,setLoading,setBooks) => {
    try {
        await axiosInstance.post('/book', newBook)
        toast.success('Libro creado correctamente', {position: 'top-right'})
    }
    catch(error){
        console.log("error al crear",error)
        toast.error('Ocurrió un error al crear el libro', {position: 'top-right'})
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
    toast.error('Ocurrió un error al eliminar el libro', {position: 'top-right'})
  }
}

export const updateBook = async (updatedBook, id, setLoading, setBooks) => {
  try {
    await axiosInstance.put(`/book/${id}`, updatedBook)
    getBooks(setBooks)
    toast.success('Libro actualizado correctamente', {position: 'top-right'})
  }catch (error) {
    console.log("Error al actualizar", error)
    toast.error('Ocurrió un error al actualizar el libro', {position: 'top-right'})
  }finally {
    setLoading(false)
    document.getElementById(`modal_${id}`).close()
  }
}

export const addFavoriteBook = async (bookId, userId, setBooks) => {
  try {
    await axiosInstance.put(`/user/favorite/${userId}`, {bookId})
    getBooks(setBooks)
    toast.success('Libro agregado a favoritos', {position: 'top-right'})
  } catch (error) {
    console.log("Error al agregar a favoritos", error)
    toast.error('Ocurrió un error al agregar a favoritos', {position: 'top-right'})
  }
}


export const isFavorite = async (bookId, userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`)
    const checkFavorite = response.data.user.favorites.some(book => book._id === bookId)
    toast.success("Libro agregado a favoritos", {position:"top-right"})
  } catch (error) {
    
  }
}