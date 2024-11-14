import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import basura from '../assets/basura.png';
import lapiz from '../assets/lapiz.png';

// Componente de tabla reutilizable
function CustomTable({ data, columns, onEdit, onDelete, searchPlaceholder = 'Buscar...' }) {

    // Estado para la búsqueda y el estado de carga
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    // Simulamos la carga de datos (puedes eliminar el useEffect si no se necesita simulación de carga)
    useEffect(() => {
        const loadData = async () => {
            // Simular un retraso en la carga
            await new Promise(resolve => setTimeout(resolve, 500));
            setLoading(false);
        };
        loadData();
    }, []);

    // Filtrado de datos según el criterio de búsqueda
    const filteredData = data.filter(item =>
        columns.some(column =>
            item[column.accessor].toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Mostrar mensaje de carga mientras los datos se cargan
    if (loading) {
        return <div>Cargando...</div>;
    }

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
                            <th style={{ width: '50px' }}></th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>{item[column.accessor]}</td>
                                ))}
                                <td style={{ width: '50px', textAlign: 'center' }}>
                                    <img
                                        src={lapiz}
                                        alt="Editar"
                                        style={{ cursor: 'pointer'}}
                                        onClick={() => onEdit(item)}
                                    />
                                </td>
                                <td style={{ width: '50px', textAlign: 'center' }}>
                                    <img
                                        src={basura}
                                        alt="Eliminar"
                                        style={{ cursor: 'pointer',marginRight: 30 }}
                                        onClick={() => onDelete(item)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CustomTable;
