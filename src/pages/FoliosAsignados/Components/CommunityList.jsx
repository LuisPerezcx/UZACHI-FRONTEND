import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CommunityList({ communities, onEdit, onDelete, onView }) {
  return (
    <div className="table-responsive mt-4">
      <table className="table align-middle">
        <thead className="table-light text-center">
          <tr>
            <th>Nombre comunidad</th>
            <th>Código Postal</th>
            <th>Municipio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {communities.map((community, index) => (
            <tr key={index} className="text-center">
              <td>{community.name}</td>
              <td>{community.postalCode}</td>
              <td>{community.municipality}</td>
              <td>
                <button
                  className="btn btn-sm me-2 p-0"
                  onClick={() => onDelete(community)}
                >
                  <img
                    src="/assets/trash-icon.png"
                    alt="Eliminar"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
                <button
                  className="btn btn-sm me-2 p-0"
                  onClick={() => onEdit(community)}
                >
                  <img
                    src="/assets/edit-icon.png"
                    alt="Editar"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
                <button
                  className="btn btn-sm p-0"
                  onClick={() => onView(community)}
                >
                  <img
                    src="/assets/view-icon.png"
                    alt="Ver"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommunityList;
