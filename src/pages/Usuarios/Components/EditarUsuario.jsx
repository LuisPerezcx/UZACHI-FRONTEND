import { useState } from "react";
import "./editarUsuario.css";
import { Button } from "bootstrap";
const Modal = ({ user }) => {
  console.log(user);

  return (
    <div>
      {
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h2>{user.user} </h2>
              <button onClick={() => {}}>&times;</button>
            </div>
            <div className="modal-body">This is the modal content.</div>
            <div className="modal-footer">
              <button onClick={console.log("us")}>Close</button>
              <button onClick={() => {}}>Save Changes</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;
