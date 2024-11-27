import React, { useState } from "react";
import CommunityList from "./Components/CommunityList";
import CommunityModal from "./Components/CommunityModal";
import CommunityForm from "./Components/CommunityForm";

function FoliosAsignados() {
  const [communities, setCommunities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddCommunity = (newCommunity) => {
    setCommunities([...communities, newCommunity]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    
    <div className="container my-4">
      <div className="col-md-12">
      <h2 className="text-center mb-4">Asignar Folios Autorizados</h2>
        <CommunityForm communities={communities} />
      </div>

      <div className="col-md-12">
        <CommunityList communities={communities} />
      </div>

      {/* Botón para abrir el modal */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary" onClick={handleOpenModal}>
          Agregar Comunidad
        </button>
      </div>

      {/* Modal */}
      <CommunityModal showModal={showModal} handleClose={handleCloseModal} onSave={handleAddCommunity} />

    </div>
  );
}

export default FoliosAsignados;
