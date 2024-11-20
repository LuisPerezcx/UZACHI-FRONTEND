import React from 'react'

export const InformacionTitular = () => {
    return (
        <div className="px-3 tarjeta-border mt-5">
            <h5 className="card-title size-font-title" style={{color:'var(--color-gris)',fontWeight:'bold'}}>Información del titular</h5> <br/>
            <form>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="nombre" className='form-label'>Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="domicilio" className='form-label'>Domicilio:</label>
                        <input type="text" className="form-control" id="domicilio" placeholder="Domicilio" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="curp" className='form-label'>CURP:</label>
                        <input type="text" className="form-control" id="curp" placeholder="CURP" />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="siem" className='form-label'>Registro SIEM:</label>
                        <input type="text" className="form-control" id="siem" placeholder="Registro SIEM" />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="fecha" className='form-label'>Fecha:</label>
                        <input type="date" className="form-control" id="fecha" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="oficio" className='form-label'>Número de oficio de autorización:</label>
                        <input type="text" className="form-control" id="oficio" placeholder="Número de oficio" />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="cantidad" className='form-label'>Cantidad que ampara:</label>
                        <input type="text" className="form-control" id="cantidad" placeholder="Cantidad" />
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="folios" className='form-label'>Folios autorizados:</label>
                        <input type="text" className="form-control" id="folios" placeholder="Folios autorizados" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="unidad" className='form-label'>Unidad de medida:</label>
                        <input type="text" className="form-control" id="unidad" placeholder="Unidad de medida" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="vencimiento" className='form-label'>Fecha vencimiento:</label>
                        <input type="date" className="form-control" id="vencimiento" />
                    </div>
                </div>
            </form>
        </div>
    );
}
