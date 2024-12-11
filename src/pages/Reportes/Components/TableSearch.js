import React, { useEffect, useState } from 'react';
import { InputWithClearButton } from '../../../components/InputWithClearButton/InputWithClearButton';
import { ContenedorDeCarga } from '../../../components/ContenedorDeCarga';

export const TableSearch = ({ endpoint, columnas, filtros, acciones, datos, onDelete }) => {
    const [datosTabla, setDatosTabla] = useState([]);
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtro, setFiltro] = useState(filtros[0].value);
    const [cargando, setCargando] = useState(true);

    // Maneja el cambio en el campo de búsqueda
    const handleInputChange = (valor) => {
        setBusqueda(valor);
    };

    // Maneja el cambio de filtro
    const handleFilterChange = (valorFiltro) => {
        setFiltro(valorFiltro);
        setBusqueda('');
    };

    // Filtra los datos cuando cambia la búsqueda o el filtro
    useEffect(() => {
        let filtrados = [...datosTabla];
    
        if (busqueda !== '') {
            filtrados = filtrados.filter(item => {
                if (item.hasOwnProperty(filtro)) {
                    const campo = item[filtro];
                    if (typeof campo === 'string') {
                        return campo.toLowerCase().includes(busqueda.toLowerCase());
                    }
                }
                return false;
            });
        }
    
        setDatosFiltrados(filtrados); 
    }, [busqueda, filtro, datosTabla]);
    

    // Carga los datos iniciales
    useEffect(() => {
        setTimeout(() => {
            setDatosTabla(datos);
            setDatosFiltrados(datos || []);  
            setCargando(false);
        }, 2000);
    }, [datos]);
    
    // Maneja la eliminación de un ítem
    const handleDelete = (item) => {
        if (onDelete) {
            onDelete(item);
        }
    };

    return (
        <div className="container-fluid mx-auto">
            <div className="rounded mb-3 d-flex justify-content-center w-50 mx-auto">
                <InputWithClearButton
                    onInputChange={handleInputChange}
                    value={busqueda}
                    filter={filtro}
                />
                <div className="dropdown">
                    <button className="boton-icono" type="button" id={`dropdownMenuButtonFilter`} data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi icono-filtro bi-filter fs-1"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonFilter`}>
                        {filtros.map((accion, indexAccion) => (
                            <li key={indexAccion}>
                                <button onClick={() => handleFilterChange(accion.value)} className="dropdown-item">
                                    {accion.label}
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
                            {columnas.map((col, index) => (
                                <th key={index}>{col.label}</th>
                            ))}
                            {acciones && <th></th>}
                        </tr>
                    </thead>
                    <tbody>
                        <ContenedorDeCarga cargando={cargando} colSpan={columnas.length + (acciones ? 1 : 0)}>
                            {datosFiltrados.length > 0 ? (
                                datosFiltrados.map((item, index) => (
                                    <tr key={index}>
                                        {columnas.map((col, colIndex) => (
                                            <td key={colIndex}>{item[col.key]}</td>
                                        ))}
                                        {acciones && (
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
                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdownMenuButton-${index}`}>
                                                        {acciones.map((accion, indexAccion) => (
                                                            <li key={indexAccion}>
                                                                <button
                                                                    onClick={() => {
                                                                        if (accion.label === 'Eliminar') {
                                                                            handleDelete(item);  // Llama la función handleDelete
                                                                        } else {
                                                                            accion.handler(item);
                                                                        }
                                                                    }}
                                                                    className="dropdown-item"
                                                                >
                                                                    {accion.label}
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
                                    <td colSpan={columnas.length + (acciones ? 1 : 0)} className="text-center">
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
