import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import { FaRegHeart } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import "../css/pagination.css"
import DeleteButton from './DeleteButton';
import Modal from './modal/Modal';
import FormUpdateBook from './FormUpdateBook';
import { addFavoriteBook, isFavorite } from '../helpers/dataBooks';
import { jwtDecode } from 'jwt-decode';
import { FaHeart } from "react-icons/fa";



const TableBooks = ({books, setBooks, }) => {
    const [userId, setUserId]  = useState (null)

    useEffect(() => {
      const decode = jwtDecode(localStorage.getItem("token"))
      setUserId(decode.sub)

    }, [])
    

    const addFavorite = (idBook)=>{
        addFavoriteBook(idBook,userId, setBooks)
    }

    const columns = [
        {
            name: '',
            selector: row => (<img src={row.img} alt={row.title} width="50" className='py-2'/>),
            sortable: true,
            center: "true",
            width: "7%",
            hide:"md"
        },
        {
            name: 'Titulo',
            selector: row => row.title,
            sortable: true,
            center: "true",
        },
        {
            name: 'Autor',
            selector: row => row.autor,
            sortable: true,
            center: "true",
            width: "20%",
            hide: "md"
        },
        {
            name: 'Año',
            selector: row => row.year,
            sortable: true,
            center: "true",
            width: "10%",
            hide: "md"
        },
        {
            name: 'Genero',
            selector: row => row.gender,
            sortable: true,
            center: "true",
            width: "10%",
            hide: "md"
        },
        {
            name: 'Acciones',
            selector: row =>               
            <div className="flex justify-center gap-1 flex-col lg:flex-row items-center px-5">
                {
                isFavorite(row._id,userId) ?
                (
                    <FaHeart 
                    size={20} 
                    className='p-0 text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
                    onClick={()=>addFavorite(row._id, setBooks)}
                    />
                )
                :
                (
                    
                    <FaRegHeart 
                    size={20} 
                    className='p-0 text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
                    onClick={()=>addFavorite(row._id, setBooks)}
                    />
                )
            }          
                <Modal
                    btnText={<GrEdit size={20} />}
                    id={row._id}
                  >
                    <div className='flex flex-col gap-5'>
                      <h3 className='font-bold text-lg'>Editar</h3>
                      <FormUpdateBook id={row._id} setBooks={setBooks} book={row}/>
                    </div>
                </Modal>
                <DeleteButton id={row._id} setBooks={setBooks}/>
            </div>,
            center: "true",
            width: "19%"
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

  return (
    <div className="overflow-x-auto mb-10 rounded-lg shadow-md p-7 bg-white">
        <DataTable 
            columns={columns} 
            data={books}
            pagination
            highlightOnHover
		    pointerOnHover
            paginationComponentOptions={paginationComponentOptions}
        />
    </div>
  )
}

export default TableBooks