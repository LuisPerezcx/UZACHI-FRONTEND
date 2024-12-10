import React, { useEffect, useState } from 'react';
import InputWithClearButton from '../../../components/InputWithClearButton/InputWithClearButton';

export const TableSearch = ({ endpoint, columns, filters, actions, data, onDelete }) => {
    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(filters[0].value);
    const [loading, setLoading] = useState(true);

    // Maneja el cambio en el input de búsqueda
    const handleInputChange = (value) => {
        setSearch(value);
    };

    // Maneja el cambio en el filtro seleccionado
    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
        setSearch(''); // Restablecer el campo de entrada al cambiar el filtro
    };

    // Filtra los datos basados en el valor de búsqueda y el filtro seleccionado
    useEffect(() => {
        let filtered = [...tableData];

        if (search !== '') {
            // Filtrar según el filtro seleccionado
            filtered = filtered.filter(item => {
                // Usar el filtro para elegir qué campo comparar
                const field = item[filter];
                if (typeof field === 'string') {
                    return field.toLowerCase().includes(search.toLowerCase());
                }
                return false;
            });
        }

        setFilteredData(filtered);
    }, [search, filter, tableData]);

    useEffect(() => {
        // Simulación de carga de datos
        setTimeout(() => {
            setTableData(data);
            setFilteredData(data);
            setLoading(false);
        }, 2000);
    }, [data]);

    const handleDelete = (item) => {
        if (onDelete) {
            onDelete(item);  // Llamamos la función onDelete para eliminar el elemento
        }
    };

    return (
        <div className="container-fluid mx-auto">
            <div className="rounded mb-3 d-flex justify-content-center w-50 mx-auto">
                <InputWithClearButton 
                    onInputChange={handleInputChange} 
                    value={search} 
                    filter={filter} 
                />
                {filters && (
                    <div className="dropdown">
                        <button
                            className="boton-icono"
                            type="button"
                            id={`dropdownMenuButtonFilter`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi icono-filtro bi-filter fs-1"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonFilter`}>
                            {filters.map((action, actionIndex) => (
                                <li key={actionIndex}>
                                    <button
                                        onClick={() => handleFilterChange(action.value)}
                                        className="dropdown-item"
                                    >
                                        {action.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-striped table-hover shadow-lg text-center rounded-4 overflow-hidden" style={{ marginBottom: '100px' }}>
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>{col.label}</th>
                            ))}
                            {actions && <th></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center">
                                    <div className="text-center">
                                        <div className="spinner-border text-success" role="status">
                                            <span className="visually-hidden">Cargando...</span>
                                        </div>
                                        <p>Cargando datos, por favor espere...</p>
                                    </div>
                                </td>
                            </tr>
                        ) : filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={index}>
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex}>{item[col.key]}</td>
                                    ))}
                                    {actions && (
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="boton-icono"
                                                    type="button"
                                                    id={`dropdownMenuButton-${index}`}
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bi icono-puntos-vertical bi-three-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
                                                    {actions.map((action, actionIndex) => (
                                                        <li key={actionIndex}>
                                                            <button
                                                                onClick={() => {
                                                                    if (action.label === 'Eliminar') {
                                                                        handleDelete(item);  // Si la acción es "Eliminar", ejecutamos la función
                                                                    } else {
                                                                        action.handler(item);
                                                                    }
                                                                }}
                                                                className="dropdown-item"
                                                            >
                                                                {action.label}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center">
                                    No hay datos disponibles
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
