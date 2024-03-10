import React from 'react'
import DataTable from 'react-data-table-component';
import { FaRegHeart } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import "../css/pagination.css"
import DeleteButton from './DeleteButton';
import Modal from './modal/Modal';


const TableBooks = ({books}) => {

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
                <FaRegHeart 
                size={20} 
                className='p-0 text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
                />
                <Modal
                    btnText={<GrEdit size={20} />}
                    id={row._id}
                  >
                    <div className='flex flex-col gap-5'>
                      <h3 className='font-bold text-lg'>Editar</h3>
                      
                    </div>
                </Modal>
                <DeleteButton id={row._id}/>
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
        paginationDropdown: {
            style: {
                color: 'red', // Cambiar color del texto aquí
            },
        },
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