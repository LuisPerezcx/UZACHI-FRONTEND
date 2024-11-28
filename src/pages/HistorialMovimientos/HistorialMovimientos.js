import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from '../../components/TableSearch';
import { Footer } from '../../components/Footer';
import { BreadCrumb } from '../../components/BreadCrumb';
import { AlertDialog } from '../../components/AlertDialog';


export const HistorialMovimientos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const links = [
    { url: '/', label: 'Inicio' },
    { url: '/HistorialMovimientos', label: 'Historial' },
  ];

  const communityData = [
    {
      folio: '12321',
      nombreDocumento: 'RemisiónXiacui',
      tipo: 'Remisión',
      fecha: '2024-10-23',
      estado: 'Aceptado',
    },
    {
      folio: '45231',
      nombreDocumento: 'ReembarqueCapu',
      tipo: 'Reembarque',
      fecha: '2024-10-23',
      estado: 'Anulado',
    },
    {
      folio: '65436',
      nombreDocumento: 'DatosIxtlan',
      tipo: 'Remisión',
      fecha: '2024-10-23',
      estado: 'Anulado',
    },
  ];
  // Transforma los datos para estilizar el estado
  const styledCommunityData = communityData.map((item) => ({
    ...item,
    estado: (
      <span
        style={{
          color: item.estado === 'Aceptado' ? 'green' : item.estado === 'Anulado' ? 'red' : 'black',
        
        }}
      >
        {item.estado}
      </span>
    ),
  }));

  const columns = [
    { label: 'Folio', key: 'folio' },
    { label: 'Nombre documento', key: 'nombreDocumento' },
    { label: 'Tipo', key: 'tipo' },
    { label: 'Fecha', key: 'fecha' },
    { label: 'Estado', key: 'estado' },
  ];

  const filters = [
    { label: 'Estado', value: 'estado' },
    { label: 'Fecha', value: 'fecha' },
    { label: 'Nombre', value: 'nombreDocumento' },
    { label: 'Folio', value: 'folio' },
  ];
  const handleAnular = (item) => {
    setSelectedDocument(item);
    setShowDialog(true);
  };

  const handleConfirmAnular = () => {
    console.log('Documento anulado:', selectedDocument);
    setShowDialog(false);
    setSelectedDocument(null);
  };

  const actions = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Descargando:', item),
    },
    {
      label: 'Anular',
      handler: handleAnular,
    },
    {
      label: 'Imprimir',
      handler: (item) => console.log('Imprimiendo:', item),
    },
  ];

  return (
    <div>
      <NavAdmin/>
      <BreadCrumb links={links} />
      
      <div className="container">
        <h2 className="text-center mb-4">HISTORIAL DE MOVIMIENTOS</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <input
              type="text"
              placeholder="Buscar en el historial"
              className="form-control"
            />
          </div>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
              Filtrar por
            </button>
            <ul className="dropdown-menu">
              {filters.map((filter, index) => (
                <li key={index}>
                  <button className="dropdown-item">{filter.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <TableSearch
          columns={columns}
          data={styledCommunityData}
          filters={filters}
          actions={actions}
          endpoint={null} // Configura tu endpoint aquí
        />
      </div>
      <Footer/>
      <AlertDialog
        show={showDialog}
        title="Confirmación de anulación"
        message={`¿Está seguro que quiere anular el documento "${selectedDocument?.nombreDocumento}"?`}
        onConfirm={handleConfirmAnular}
        onCancel={() => setShowDialog(false)}
        confirmText="Anular"
        cancelText="Cancelar"
      />

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h5 className="text-center mb-4">Generar reporte</h5>
          <div className="mb-3">
            <label htmlFor="fechaInicio" className="form-label">
              Fecha de inicio
            </label>
            <input type="date" id="fechaInicio" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="fechaFinal" className="form-label">
              Fecha final
            </label>
            <input type="date" id="fechaFinal" className="form-control" />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-primary">Generar</button>
          </div> 
        </Modal.Body>
      </Modal>
    </div>
  );
};
