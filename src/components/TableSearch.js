import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SimulatedData from '../utils/SimulatedData';
import InputWithClearButton from './InputWithClearButton/InputWithClearButton';

/*
Este componente recibe el endpoint del backend para los datos
un array con el nombre de las columnas de las tablas,
el placeholder para el input del search
y un array con los filtros de busqueda
*/

export const TableSearch = ({ endpoint, columns, filters, actions }) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(filters[0].value);

    const handleInputChange = (value) => {
        setSearch(value);
        //console.log('Valor del input:', value);
    }

    /*
    //este seria el metodo en donde se jalarian los datos del endpoint
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => console.error(error));
    }, [endpoint])
    */

    useEffect(() => {
        setData(SimulatedData);
        setFilteredData(SimulatedData);
    }, []);

    return (
        <div className='container-fluid mx-auto'>
            <div className="rounded mb-3 d-flex justify-content-center w-50 mx-auto">
                <InputWithClearButton onInputChange={handleInputChange}></InputWithClearButton>
                {filters && (
                    <div className='dropdown'>
                        <button className='boton-icono' type="button" id={`dropdownMenuButtonFilter`} data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bi icono-filtro bi-filter fs-1 ' ></i>
                        </button>
                        <ul className='dropdown-menu' aria-labelledby={`dropdownMenuButtonFilter`}>
                            {filters.map((action, actionIndex) => (
                                <li key={actionIndex}>
                                    <button onClick={() => action.handler(filter)} className='dropdown-item' >
                                        {action.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className='d-flex justify-content-center'>
                <table className='table table-striped teble-hover shadow-lg text-center rounded-4 overflow-hidden ' style={{ marginBottom: '100px' }}>
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>{col.label}</th>
                            ))}
                            {actions && <th></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>{item[col.key]}</td>
                                ))}
                                {actions && (
                                    <td>
                                        <div className='dropdown'>
                                            <button className='boton-icono ' type="button" id={`dropdownMenuButton-${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className='bi icono-puntos-vertical bi-three-dots-vertical'></i>
                                            </button>
                                            <ul className='dropdown-menu' aria-labelledby={`dropdownMenuButton-${index}`}>
                                                {actions.map((action, actionIndex) => (
                                                    <li key={actionIndex}>
                                                        <button onClick={() => action.handler(item)} className='dropdown-item' >
                                                            {action.label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

