import React, { useEffect, useState } from 'react';
import {InputWithClearButton} from '../../../components/InputWithClearButton/InputWithClearButton';
import { ContenedorDeCarga } from '../../../components/ContenedorDeCarga';

export const TableSearch = ({ endpoint, columns, filters, actions, data, onDelete }) => {
    const [tableData, setTableData] = useState([]);  // Todos los datos de la tabla
    const [filteredData, setFilteredData] = useState([]);  // Datos filtrados
    const [search, setSearch] = useState('');  // Valor de búsqueda
    const [filter, setFilter] = useState(filters[0].value);  // Filtro seleccionado
    const [loading, setLoading] = useState(true);  // Estado de carga

    // Maneja el cambio en el campo de búsqueda
    const handleInputChange = (value) => {
        setSearch(value);
    };

    // Maneja el cambio de filtro
    const handleFilterChange = (filterValue) => {
        setFilter(filterValue); 
        setSearch('');  
    };

    // Filtra los datos cuando cambia la búsqueda o el filtro
    useEffect(() => {
        let filtered = [...tableData];

        if (search !== '') {
            // Filtra los datos según el valor de búsqueda
            filtered = filtered.filter(item => {
                const field = item[filter];
                if (typeof field === 'string') {
                    return field.toLowerCase().includes(search.toLowerCase());  // Ignora mayúsculas/minúsculas
                }
                return false;
            });
        }

        setFilteredData(filtered);  
    }, [search, filter, tableData]);

    // Carga los datos iniciales
    useEffect(() => {
        setTimeout(() => {
            setTableData(data);  
            setFilteredData(data);  
            setLoading(false);  
        }, 2000);
    }, [data]);

    // Maneja la eliminación de un ítem
    const handleDelete = (item) => {
        if (onDelete) {
            onDelete(item);  // Llama al callback onDelete
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
                <div className="dropdown">
                    <button className="boton-icono" type="button" id={`dropdownMenuButtonFilter`} data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi icono-filtro bi-filter fs-1"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonFilter`}>
                        {filters.map((action, actionIndex) => (
                            <li key={actionIndex}>
                                <button onClick={() => handleFilterChange(action.value)} className="dropdown-item">
                                    {action.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div> 
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
                        <ContenedorDeCarga cargando={loading} colSpan={columns.length + (actions ? 1 : 0)}>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index}>
                                        {columns.map((col, colIndex) => (
                                            <td key={colIndex}>{item[col.key]}</td>
                                        ))}
                                        {actions && (
                                            <td>
                                                <div className="dropdown">
                                                    <button className="boton-icono" type="button" id={`dropdownMenuButton-${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi icono-puntos-vertical bi-three-dots-vertical"></i>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
                                                        {actions.map((action, actionIndex) => (
                                                            <li key={actionIndex}>
                                                                <button onClick={() => {
                                                                    if (action.label === 'Eliminar') {
                                                                        handleDelete(item);
                                                                    } else {
                                                                        action.handler(item);
                                                                    }
                                                                }} className="dropdown-item">
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
                        </ContenedorDeCarga>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
