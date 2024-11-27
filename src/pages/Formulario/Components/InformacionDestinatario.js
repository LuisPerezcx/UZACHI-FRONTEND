import React from 'react'

export const InformacionDestinatario = () => {
    return (
        <div className="tarjeta-border px-5 mt-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title size-font-title" style={{color:'var(--color-gris)',fontWeight:'bold'}}>Información destinatario</h5> <br/>
                            <div className="d-flex align-items-center">
                                <span className="me-2">Agregar datos de un cliente frecuente</span>
                                <button className="btn btn-success btn-sm">Seleccionar cliente</button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="curp" className="form-label">CURP:</label>
                                <input type="text" className="form-control" id="curp" placeholder="" />
                            </div>
                            <div className="col-md-7">
                                <label htmlFor="domicilioDest" className="form-label">Domicilio del destino:</label>
                                <input type="text" className="form-control" id="domicilioDest" placeholder="" />
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="rfn" className="form-label">RFN:</label>
                                <input type="text" className="form-control" id="rfn" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="municipio" className="form-label">Municipio:</label>
                                <input type="text" className="form-control" id="municipio" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="poblacion" className="form-label">Población:</label>
                                <input type="text" className="form-control" id="poblacion" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="entidad" className="form-label">Entidad:</label>
                                <input type="text" className="form-control" id="entidad" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="domicilio" className="form-label">Domicilio:</label>
                                <input type="text" className="form-control" id="domicilio" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="codigo" className="form-label">Código de identificación:</label>
                                <input type="text" className="form-control" id="codigo" placeholder="" />
                            </div>
                            <div className="col-md-6 d-flex align-items-end">
                                <button type="button" className="btn btn-success">Agregar como cliente frecuente</button>
                            </div>
                        </div>
                    </form>
        </div>
    )
}
