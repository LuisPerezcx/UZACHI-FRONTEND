import React, { useState } from 'react';

export const InformacionTitular = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        domicilio: '',
        curp: '',
        siem: '',
        fecha: '',
        oficio: '',
        cantidad: '',
        folios: '',
        unidad: '',
        vencimiento: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <div className="tarjeta-border mt-5 p-5">
            <h5 className="card-title size-font-title" style={{ color: 'var(--color-gris)', fontWeight: 'bold' }}>
                Información del titular
            </h5>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="domicilio" className="form-label">
                            Domicilio: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="domicilio"
                            id="domicilio"
                            value={formData.domicilio}
                            onChange={handleChange}
                            placeholder="Domicilio"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="curp" className="form-label">
                            CURP:
                        </label>
                        <input
                            type="text"
                            name="curp"
                            id="curp"
                            value={formData.curp}
                            onChange={handleChange}
                            placeholder="CURP"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="siem" className="form-label">
                            Registro SIEM:
                        </label>
                        <input
                            type="text"
                            name="siem"
                            id="siem"
                            value={formData.siem}
                            onChange={handleChange}
                            placeholder="Registro SIEM"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="fecha" className="form-label">
                            Fecha: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            name="fecha"
                            id="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            size="sm"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="oficio" className="form-label">
                            Número de oficio de autorización: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="oficio"
                            id="oficio"
                            value={formData.oficio}
                            onChange={handleChange}
                            placeholder="Número de oficio"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="cantidad" className="form-label">
                            Cantidad que ampara: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="cantidad"
                            id="cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                            placeholder="Cantidad"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="folios" className="form-label">
                            Folios autorizados: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="folios"
                            id="folios"
                            value={formData.folios}
                            onChange={handleChange}
                            placeholder="Folios autorizados"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="unidad" className="form-label">
                            Unidad de medida: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="unidad"
                            id="unidad"
                            value={formData.unidad}
                            onChange={handleChange}
                            placeholder="Unidad de medida"
                            size="sm"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="vencimiento" className="form-label">
                            Fecha vencimiento: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            name="vencimiento"
                            id="vencimiento"
                            value={formData.vencimiento}
                            onChange={handleChange}
                            size="sm"
                            className="form-control"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
