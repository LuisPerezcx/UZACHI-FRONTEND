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
  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    {url: '/Formulario', label: 'Formulario'}
  ];

  const [formData, setFormData] = useState({
    InformacionDocumento: {},
    InformacionTitular: {},
    InformacionSubproductosYSaldos: {},
    FormularioTransporte: {},
    FormularioCliente: {},
  });

  const refInformacionDocumento = useRef();
  const refInformacionTitular = useRef();
  /*
  const refFormularioCliente = useRef();
  const refInformacionSubproductosYSaldos = useRef();
  const refFormularioTransporte = useRef();
  */


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

  const handleSubmit = () =>{
    const allRefs = [refInformacionDocumento, refInformacionTitular]; // Todas las referencias
    const collectedValues = {}; // Aquí almacenaremos los valores de todos los componentes
    const errors = []; 

    allRefs.forEach((ref, index) => {
      try {
        const values = ref.current.getValues(); // Validar y obtener los valores
        Object.assign(collectedValues, values); // Acumular valores válidos
      } catch (error) {
        // Si ocurre un error, lo agregamos al arreglo `errors`
        errors.push(`${error.message}`);
      }
    });
  
    if (errors.length > 0) {
      // Mostrar todos los errores acumulados
      Swal.fire({
        icon: 'error',
        title: 'Errores en la validación',
        html: errors.join('<br>'), // Mostrar errores como una lista
      });
    } else {
      console.log("Valores válidos:", collectedValues);
      // TODO: Continuar con el flujo normal (por ejemplo, enviar los valores al servidor)
    }
    console.log("Valores válidos:", collectedValues);
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
                <InformacionDocumento ref={refInformacionDocumento}>
                  </InformacionDocumento>
                <InformacionTitular ref={refInformacionTitular}></InformacionTitular>
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
                <Button style={{ backgroundColor: 'var(--color-verde)', color: 'white' }} onClick={handleSubmit} >Guardar</Button>
                <Button style={{ backgroundColor: 'var(--color-verde)', color: 'white', marginLeft: '50px' }}>Guardar e imprimir</Button>
                <Button style={{ backgroundColor: '#0192C7', color: 'white', marginLeft: '50px' }}>Vista previa</Button>
            </div>
        <Footer></Footer>
    </div>
  )
}
