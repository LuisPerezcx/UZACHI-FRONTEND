import Swal from 'sweetalert2';

export const AlertComponent = {
  confirm: ({ title, text, onConfirm }) => {
    Swal.fire({
      title: title || '¿Estás seguro?',
      text: text || 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'var(--color-rojo)', // Color rojo para confirmar
      cancelButtonColor: 'var(--color-gris)', // Color gris para cancelar
    }).then((result) => {
      if (result.isConfirmed && typeof onConfirm === 'function') {
        onConfirm(); // Ejecutar acción confirmada
      }
    });
  },
  success: ({ title, text }) => {
    Swal.fire({
      title: title || 'Éxito',
      text: text || 'Operación realizada con éxito.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
      },
    });
  },
};
