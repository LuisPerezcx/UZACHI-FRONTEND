import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CustomTable({ data, columns, onEdit, onDelete, searchPlaceholder = 'Buscar...', edicion }) {
    // Estado para la búsqueda
    const [searchQuery, setSearchQuery] = useState('');

    // Estado para la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Filtrado de datos según el criterio de búsqueda
    const filteredData = data.filter(item =>
        columns.some(column =>
            item[column.accessor]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Datos para la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular total de páginas
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Manejador de cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container p-3">
            <div className="d-flex justify-content-start mb-3">
                <input
                    type="text"
                    maxLength={16}
                    className="form-control buscar-input"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={e => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1); // Reiniciar a la primera página al buscar
                    }}
                />
            </div>
            <div className="d-flex justify-content-center table-responsive">
                <Table className="table" striped bordered hover>
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
                        {currentData.length > 0 ? (
                            currentData.map((item, index) => (
                                <tr key={index}>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex}>{item[column.accessor]}</td>
                                    ))}
                                    <td className="celda-icono">
                                        <button
                                            className="boton-icono"
                                            onClick={() => onEdit(item)}
                                            title="Editar"
                                        >
                                            <i className="bi bi-pencil-square icono-editar"></i>
                                        </button>
                                    </td>
                                    <td className="celda-icono">
                                        {edicion === null && (
                                            <button
                                                className="boton-icono"
                                                onClick={() => onDelete(item)}
                                                title="Eliminar"
                                            >
                                                <i className="bi bi-trash3 icono-basura"></i>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + 2} className="text-center text-muted">
                                    Sin datos registrados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Pagination>
                    {[...Array(totalPages).keys()].map(page => (
                        <Pagination.Item
                            key={page + 1}
                            active={page + 1 === currentPage}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>
    );
}
