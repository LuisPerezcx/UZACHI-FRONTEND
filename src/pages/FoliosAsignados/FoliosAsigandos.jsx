import React, { useState } from "react";
import CommunityList from "./Components/CommunityList";
import CommunityForm from "./Components/CommunityForm";
import CommunityModal from "./Components/CommunityModal";
import FormularioRemision from "./Components/FormularioRemision";
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'



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
    <div>
      <NavAdmin></NavAdmin>
      <div className="container my-4">
      <div className="col-md-12">
      {
        /*
        */ 
      }
      <h2 className="text-center size-font-title">Asignacion de Folios</h2>
      <FormularioRemision/>
        {/*<CommunityForm communities={communities} />*/}
        {
          /*<FormularioRemision/> */
        }
      </div>

      <div className="col-md-12">
        <CommunityList communities={communities} />
      </div>

      {/* Botón para abrir el modal */}
      <div className="d-flex justify-content-center mb-4">
        <button className="boton-guardar" onClick={handleOpenModal}>
          Agregar Comunidad
        </button>
      </div>

      {/* Modal */}
      <CommunityModal showModal={showModal} handleClose={handleCloseModal} onSave={handleAddCommunity} />

      </div>
      <Footer></Footer>
    </div>

    
  );
}

export default FoliosAsignados;
