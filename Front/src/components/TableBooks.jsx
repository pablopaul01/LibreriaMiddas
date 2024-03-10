import React from 'react'
import DataTable from 'react-data-table-component';
import { FaRegHeart } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import DeleteButton from './DeleteButton';

const TableBooks = ({books}) => {

    const columns = [
        {
            name: '',
            selector: row =>  <FaRegHeart className='text-lg'/>,
            sortable: true,
            center: "true",
            width: "10%"
        },
        {
            name: 'Titulo',
            selector: row => row.title,
            sortable: true,
            center: "true"
        },
        {
            name: 'Autor',
            selector: row => row.autor,
            sortable: true,
            center: "true",
            width: "20%"
        },
        {
            name: 'Año',
            selector: row => row.year,
            sortable: true,
            center: "true",
            width: "10%"
        },
        {
            name: 'Acciones',
            selector: row =>                         
            <div className="flex justify-center gap-2 flex-col lg:table-cell">
                <button className="btn btn-ghost btn-xs"><GrEdit className='text-base'/></button>
                <DeleteButton id={row._id}/>
            </div>,
            center: "true",
            width: "10%"
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