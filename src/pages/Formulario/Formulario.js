import React, { useState } from 'react'
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import { InformacionDocumento } from './Components/InformacionDocumento'
import { InformacionTitular } from './Components/InformacionTitular'
import { Formulario3 } from './Components/Formulario3'
import { FormularioTransporte } from './Components/FormularioTransporte'
import FormularioCliente from '../ClientesFrecuentes/Components/FormularioCliente'
import { Button } from 'react-bootstrap'

export const Formulario = () => {
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
            <div style={{marginInline: '10%'}}>
                <div className='row'>
                  <div className='col-sm-6'>
                    <h2 className='size-font-title' > <span style={{color: 'var(--color-gris)', fontWeight:'bold' }}>FOLIO NUMERO:</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>27</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>/</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>38</span></h2>
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
                <Formulario3></Formulario3>
                <FormularioTransporte 
                  titulo="Transporte empleado" 
                  formularioForm={true}
                  onAdd={guardarTransporte}
                  />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <Button style={{ backgroundColor: 'var(--color-verde)', color: 'white' }}>Guardar e imprimir</Button>
                <Button style={{ backgroundColor: '#0192C7', color: 'white', marginLeft: '50px' }}>Vista previa</Button>
            </div>
        <Footer></Footer>
    </div>
  )
}
