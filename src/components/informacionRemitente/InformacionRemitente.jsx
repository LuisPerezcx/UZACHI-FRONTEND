import React from 'react'

export const InformacionRemitente = () => {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Información del remitente</h4>
                    <form>
                        <div className="row g-3">
                            {/* Lugar de origen y RFN */}
                            <div className="col-md-8">
                                <label htmlFor="origen" className="form-label">
                                    Lugar de origen (materia prima):
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="origen"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="rfn" className="form-label">
                                    RFN:
                                </label>
                                <input type="text" className="form-control" id="rfn" placeholder="" />
                            </div>

                            {/* Municipio y Entidad */}
                            <div className="col-md-5">
                                <label htmlFor="municipio" className="form-label">
                                    Municipio:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="municipio"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="entidad" className="form-label">
                                    Entidad:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="entidad"
                                    placeholder=""
                                />
                            </div>

                            {/* Fecha y Vigencia */}
                            <div className="col-md-2">
                                <label htmlFor="fecha" className="form-label">
                                    Fecha:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="fecha"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="vigencia" className="form-label">
                                    Vigencia:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="vigencia"
                                    placeholder=""
                                />
                            </div>

                            {/* Tipo de resolución y N */}
                            <div className="col-md-5">
                                <label htmlFor="resolucion" className="form-label">
                                    Tipo de resolución:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="resolucion"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="n" className="form-label">
                                    N:
                                </label>
                                <input type="text" className="form-control" id="n" placeholder="" />
                            </div>

                            {/* Género y/o producto y Anualidad */}
                            <div className="col-md-5">
                                <label htmlFor="producto" className="form-label">
                                    Género y/o producto:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="producto"
                                    placeholder=""
                                />
                            </div>
                            {/* Volumen autorizado */}
                            <div className="col-md-6">
                                <label htmlFor="volumen" className="form-label">
                                    Volumen autorizado para esta anualidad:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="volumen"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="anualidad" className="form-label">
                                    Anualidad:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="anualidad"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
