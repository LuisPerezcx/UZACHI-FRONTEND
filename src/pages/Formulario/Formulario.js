import React, { useState, useRef } from 'react'
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import { InformacionDocumento } from './Components/InformacionDocumento'
import { InformacionTitular } from './Components/InformacionTitular'
import {InformacionSubproductosYSaldos } from './Components/InformacionSubproductosYSaldos'
import { FormularioTransporte } from './Components/FormularioTransporte'
import FormularioCliente from '../ClientesFrecuentes/Components/FormularioCliente'
import { Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/BreadCrumb'
import Swal from "sweetalert2"; 

export const Formulario = () => {

  const infoDocumentoRef = useRef();

  const handleGuardar = () => {
      if (infoDocumentoRef.current.validar()) {
          console.log('Datos válidos. Proceder con el guardado.');
          // Realiza la acción de guardar
      } else {
        Swal.fire({
          title: 'Datos incompletos',
          text: `Por favor, llena todos los campos requeridos.`,
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)';
          }
        });
      }
  };

const links = [
  { url: '/PrincipalAdmin', label: 'Inicio' },
  {url: '/Formulario', label: 'Formulario'}
];
  const [datosTransporte, setDatosTransporte] = useState([]);
  const [editingTransport, setEditingTransport] = useState(null); // Transporte en edición
  
  const [clientes, setClientes] = useState([]);
  const [editarClientesFrecuentes,setEditarClientesFrecuentes] = useState(null);

  const guardarDatos = (nuevoCliente) => {
    if (editarClientesFrecuentes) {
      // Actualizar transporte existente
      const updatedData = clientes.map((data) =>
        data === editarClientesFrecuentes ? nuevoCliente : data
      );
      setClientes(updatedData);
      setEditarClientesFrecuentes(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setClientes([...clientes, { ...nuevoCliente, id: Date.now() }]);
    }
  };

  const guardarTransporte = (newTransport) => {
    if (editingTransport) {
      // Actualizar transporte existente
      const updatedData = datosTransporte.map((data) =>
        data === editingTransport ? newTransport : data
      );
      setDatosTransporte(updatedData);
      setEditingTransport(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setDatosTransporte([...datosTransporte, newTransport]);
    }
  };

  return (
    <div>
        <NavAdmin></NavAdmin>
        <BreadCrumb links={links} />
            <div style={{marginInline: '10%'}}>
              <h1 className='size-font-title'style={{color: 'var(--color-gris)', fontWeight:'bold' }}>Formulario</h1>
                <div className='row'>
                  <div className='col-sm-6'>
                    <h2 className='size-font-title' > <span style={{color: 'var(--color-gris)', fontWeight:'bold' }}>FOLIO NÚMERO:</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>27</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>/</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>38</span></h2>
                  </div>
                  <div className='col-sm-6 text-end'>
                    <h2 className='size-font-title' > <span style={{color: 'var(--color-gris)', fontWeight:'bold' }}>FOLIO PROGRESIVO:</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>3821353</span></h2>
                  </div>
                </div>
                <InformacionDocumento></InformacionDocumento>
                <InformacionTitular></InformacionTitular>
                <FormularioCliente
                  formularioForm={true} 
                  onAdd={guardarDatos} 
                ></FormularioCliente>
                <InformacionSubproductosYSaldos></InformacionSubproductosYSaldos>
                <FormularioTransporte 
                  titulo="Transporte empleado" 
                  formularioForm={true}
                  onAdd={guardarTransporte}
                  />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <Button style={{ backgroundColor: 'var(--color-verde)', color: 'white' }} onChangeCapture={handleGuardar}>Guardar</Button>
                <Button style={{ backgroundColor: 'var(--color-verde)', color: 'white', marginLeft: '50px' }}>Guardar e imprimir</Button>
                <Button style={{ backgroundColor: '#0192C7', color: 'white', marginLeft: '50px' }}>Vista previa</Button>
            </div>
        <Footer></Footer>
    </div>
  )
}
