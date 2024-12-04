import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputWithClearButton from '../../../components/InputWithClearButton/InputWithClearButton';

export const TableSearch = ({ endpoint, columns, filters, actions, data }) => {
    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(filters[0].value);
    const [loading, setLoading] = useState(true); // Estado de carga

    const handleInputChange = (value) => {
        setSearch(value);
    };

    useEffect(() => {
        // Simulación de carga de datos
        setTimeout(() => {
            setTableData(data);
            setFilteredData(data);
            setLoading(false); // Finaliza la carga
        }, 2000);

        // Para una solicitud real:
        /*
        axios.get(endpoint)
            .then((response) => {
                setTableData(response.data);
                setFilteredData(response.data);
                setLoading(false); // Finaliza la carga
            })
            .catch((error) => console.error(error));
        */
    }, [data, endpoint]);

    return (
        <div className="container-fluid mx-auto">
            <div className="rounded mb-3 d-flex justify-content-center w-50 mx-auto">
                <InputWithClearButton onInputChange={handleInputChange}></InputWithClearButton>
                {filters && (
                    <div className="dropdown">
                        <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonFilter`}>
                            {filters.map((action, actionIndex) => (
                                <li key={actionIndex}>
                                    <button onClick={() => action.handler(filter)} className="dropdown-item">
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
                                                                onClick={() => action.handler(item)}
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
