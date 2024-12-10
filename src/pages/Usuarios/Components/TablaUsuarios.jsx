import React, { useState } from "react";
import { CustomTable } from "../../../components/TablaIconos";
import FormularioUsuarios from "../Components/FormularioUsuarios";
import Swal from "sweetalert2";
import { AlertComponent } from "../../../components/AlertComponent";

const TablaUsuarios = () => {
  // Estados para usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEnEdicion, setUsuarioEnEdicion] = useState(null);

  const columns = [
    { header: "Nombre Usuario", accessor: "nombreUsuario" },
    { header: "Contraseña", accessor: "contrasena" },
    { header: "Tipo Usuario", accessor: "tipoUsuario" },
  ];

  // Eliminar usuario
  const eliminarUsuario = (item) => {
    AlertComponent.confirm({
      title: "¿Estás seguro?",
      text: `¿Deseas eliminar al usuario `,
      onConfirm: () => {
        const nuevosUsuarios = usuarios.filter((data) => data !== it);
        setUsuarios(nuevosUsuarios);

        AlertComponent.success({
          title: "Eliminado",
          text: "Usuario eliminado de manera exitosa",
        });
      },
    });
  };

  // Editar usuario
  const editarUsuario = (usuario) => {
    setUsuarioEnEdicion(usuario);
  };

  // Guardar o actualizar usuario
  const guardarUsuario = (nuevoUsuario) => {
    if (usuarioEnEdicion) {
      // Actualizar usuario existente
      const usuariosActualizados = usuarios.map((data) =>
        data === usuarioEnEdicion ? nuevoUsuario : data
      );
      setUsuarios(usuariosActualizados);
      setUsuarioEnEdicion(null); // Salir del modo edición

      AlertComponent.success({
        title: "Actualizado",
        text: "Usuario actualizado correctamente",
      });
    } else {
      // Agregar nuevo usuario
      setUsuarios([...usuarios, { ...nuevoUsuario, id: Date.now() }]);

      AlertComponent.success({
        title: "Agregado",
        text: "Usuario agregado correctamente",
      });
    }
  };

  return (
    <div>
      <CustomTable
        data={usuarios}
        columns={columns}
        onEdit={editarUsuario}
        onDelete={eliminarUsuario}
        searchPlaceholder="Buscar usuario..."
        edicion={usuarioEnEdicion}
      />

      <div className="px-5">
        <FormularioUsuarios
          onAdd={guardarUsuario}
          editarUsuario={usuarioEnEdicion}
          formularioForm={false}
        />
      </div>
    </div>
  );
};

export default TablaUsuarios;
