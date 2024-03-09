import React from 'react'

const TableBooks = ({books}) => {
  return (
    <div className="overflow-x-auto md:mx-20">
        <table className="table table-sm md:table-lg card_container">
            <thead>
            <tr>
                <th>Titulo</th>
                <th>Año</th>
                <th className='hidden md:inline'>Genero</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
                books.map(book => (
                    <tr key={book._id}>
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
                        <td className="text-sm opacity-50 hidden md:block ">
                        {book.year}
                        </td>
                        <td className="text-sm opacity-50">{book.gender}</td>
                        <th className="sm:flex justify-center gap-2 flex-col md:flex-row">
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