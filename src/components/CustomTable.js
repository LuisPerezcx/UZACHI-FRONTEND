import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente de tabla reutilizable
export function CustomTable({ data, columns, onEdit, onDelete, searchPlaceholder = 'Buscar...' }) {

    // Estado para la búsqueda
    const [searchQuery, setSearchQuery] = useState('');

    // Filtrado de datos según el criterio de búsqueda
    const filteredData = data.filter(item =>
        columns.some(column =>
            item[column.accessor].toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="container">
            <div className="d-flex justify-content-start mb-3">
                <input
                    type="text"
                    className="form-control buscar-input"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-center">
                <Table className="table" striped bordered hover >
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column.header}</th>
                            ))}
                            <th className="celda-icono"></th>
                            <th className="celda-icono"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>{item[column.accessor]}</td>
                                ))}
                                <td className="celda-icono">
                                    <button
                                        className="boton-icono"
                                        onClick={() => onEdit(item)}  
                                        title="Editar">
                                        <i className="bi bi-pencil-square icono-editar"></i>
                                    </button>
                                </td>
                                <td className="celda-icono">
                                    <button
                                        className="boton-icono"
                                        onClick={() => onDelete(item)}
                                        title="Eliminar">
                                        <i className="bi bi-trash3 icono-basura"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
