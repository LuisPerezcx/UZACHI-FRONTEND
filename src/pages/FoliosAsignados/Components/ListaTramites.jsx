import React from "react";
import Swal from "sweetalert2";
import { Card, Button } from "react-bootstrap"; 

export const ListaTramites = ({ tramites }) => {
  const handleDeleteTramite = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar este trámite?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // eliminar (se va implentar o no )
        Swal.fire('Eliminado', 'El trámite ha sido eliminado.', 'success');
      }
    });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4" style={{textAlign:"center", fontFamily:"serif", color:"#595B5A", fontWeight:"bold"}}>Trámites realizados</h3>
      {tramites.length === 0 ? (
        <div className="alert alert-info" role="alert" style={{ textAlign: "center" }}>
          No hay trámites existentes.
        </div>
      ) : (
        <div className="row">
          {tramites.map((tramite, index) => (
            <div className="col-md-6 mb-4 d-flex justify-content-center" key={index}>
              <Card className="shadow-sm border-light">
                <Card.Body>
                  <Card.Title className="text-center" style={{color:"#14C3A2", fontWeight:"bold"}}>Trámite {index + 1}</Card.Title>
                  <Card.Text>
                    <strong>Anualidad:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                    {new Date(tramite.fechaTramite).toLocaleDateString()}
                    <br />
                    <strong>Folio Pinus:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                    {tramite.folioPinus}
                    <br />
                    <strong>Folio Quercus:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                    {tramite.folioQuercus}
                    <br />
                    <strong>Folio Hojosa:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                    {tramite.folioHojosa}
                    <br />
                    <strong>Clasificación:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                    {tramite.clasificacion}
                    <br />
                    <strong>Folio Inicial Pinus:&nbsp; </strong> {tramite.folioInicialPinus}
                    <strong>&nbsp;&nbsp;&nbsp;Folio Final Pinus:&nbsp;</strong> 
                    {tramite.folioFinalPinus}
                    <br />
                    <strong>Folio Inicial Quercus:&nbsp; </strong> {tramite.folioInicialQuercus}
                    <strong>&nbsp;&nbsp;&nbsp;Folio Final Quercus:&nbsp;</strong> 
                    {tramite.folioFinalQuercus}
                    <br />
                    <strong>Folio Inicial Hojosa:&nbsp; </strong> {tramite.folioInicialHojosa}
                    <strong>&nbsp;&nbsp;&nbsp;Folio Final Hojosa:&nbsp;</strong> 
                    {tramite.folioFinalHojosa}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    {/*
                    <Button style={{background:"#14C3A2"}} variant="info" onClick={() => 
                    Swal.fire(
                        'Detalles', 
                        JSON.stringify(tramite), 
                        'info')}>
                    Ver detalles
                  </Button>
                  
                    <Button variant="danger" onClick={() => handleDeleteTramite(index)}>
                      Eliminar
                    </Button>
                    */}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
