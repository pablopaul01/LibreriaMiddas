import React from 'react'

const TableBooks = ({books}) => {
  return (
    <div className="overflow-x-auto md:mx-20 mb-10 rounded-lg shadow-md p-7">
        <table className="table table-sm md:table-lg card_container">
            <thead>
            <tr className='text-center'>
                <th>Titulo</th>
                <th className='hidden md:table-cell'>Año</th>
                <th >Genero</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
                books.map(book => (
                    <tr key={book._id} className='text-center'>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar hidden md:inline">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={book.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                            <div className="font-bold">{book.title}</div>
                            <div className="text-sm opacity-50">{book.autor}</div>
                            </div>
                        </div>
                        </td>
                        <td className="text-sm opacity-50 hidden md:table-cell ">
                        {book.year}
                        </td>
                        <td className="text-sm opacity-50">{book.gender}</td>
                        <th className="flex justify-center gap-2 flex-col lg:table-cell">
                        <button className="btn btn-ghost btn-xs">Edit</button>
                        <button className="btn btn-ghost btn-xs">Delete</button>
                        <button className="btn btn-ghost btn-xs">Fav</button>
                        </th>
                    </tr>
                ))
            }
            </tbody>
            
        </table>
    </div>
  )
}

export default TableBooks