import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles_modal.css"

function CommunityList({ communities, onDelete, onEdit, onView, onAddCommunity }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSave = (newCommunity) => {
    onAddCommunity(newCommunity); // Llamar la función para agregar la comunidad
  };

  return (
    <div>
      <div className="table-responsive mt-4 ">
        <table className="table align-middle">
          <thead className="table-light text-center">
            <tr>
              <th>Acciones</th>
              <th></th>
              <th>Nombre Comunidad</th>
              <th>Código Postal</th>
              <th>Municipio</th>
            </tr>
          </thead>
          <tbody>
            {communities.map((community, index) => (
              <tr key={index} className="text-center">
                <td>
                  <button
                    className="boton-icono"
                    onClick={() => onDelete(community)}
                    title="Eliminar"
                  >
                    <i className="bi bi-trash3 icono-basura"></i>
                  </button>
                  <button
                    className="boton-icono"
                    onClick={() => onEdit(community)}
                    title="Editar"
                  >
                    <i className="bi bi-pencil-square icono-editar"></i>
                  </button>
                  <button
                    className="boton-icono"
                    onClick={() => onView(community)}
                    title="Ver"
                  >
                    <i className="bi bi-eye icono-editar"></i>
                  </button>
                </td>
                <td></td>
                <td>{community.name}</td>
                <td>{community.postalCode}</td>
                <td>{community.municipality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommunityList;
