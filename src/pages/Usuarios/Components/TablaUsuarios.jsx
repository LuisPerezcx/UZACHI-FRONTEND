import React, { useState } from "react";
import { CustomTable } from "../../../components/TablaIconos";
import FormularioUsuarios from "../Components/FormularioUsuarios";
import Swal from "sweetalert2";
import { AlertComponent } from "../../../components/AlertComponent";

const TablaUsuarios = () => {
  // Usuarios Definidos
  const [usuarios, setUsuarios] = useState([
    {
      nombreUsuario: "LuisDavid",
      contrasena: "loboSolitario",
      tipoUsuario: "Usuario",
    },
    {
      nombreUsuario: "LuisHernandez",
      contrasena: "12345678",
      tipoUsuario: "Administrador",
    },
    {
      nombreUsuario: "Efren David",
      contrasena: "87654321",
      tipoUsuario: "Usuario",
    },
  ]);
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
      text: `¿Deseas eliminar al usuario ${item.nombreUsuario}?`,
      onConfirm: () => {
        const nuevosUsuarios = usuarios.filter((data) => data !== item);
        setUsuarios(nuevosUsuarios);

        AlertComponent.success({
          title: "Eliminado",
          text: "Usuario eliminado de manera exitosa",
        });
      },
    });
  };

  // Editar usuario
  const editarUsuario = (item) => {
    setUsuarioEnEdicion(item);
  };

  const guardarUsuario = (nuevoUsuario) => {
    if (usuarioEnEdicion) {
      // Se actualizar usuario existente
      const usuariosActualizados = usuarios.map((data) =>
        data === usuarioEnEdicion ? nuevoUsuario : data
      );
      setUsuarios(usuariosActualizados);
      setUsuarioEnEdicion(null); // Salir del modo de edición
    } else {
      // Se a nuevo usuario
      setUsuarios([...usuarios, { ...nuevoUsuario, id: Date.now() }]);
    }
  };

  const cancelarEdicion = () => {
    setUsuarioEnEdicion(null); // Salir del modo edición
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
          onCancel={cancelarEdicion}
        />
      </div>
    </div>
  );
};

export default TablaUsuarios;

