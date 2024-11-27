import React from 'react';
import { CalculadoraEstandar } from '../components/Calculadora/CalculadoraEstandar';
import { CalculadoraEspecial } from '../components/Calculadora/CalculadoraEspecial';
import { Footer } from '../components/Footer';
import NavAdmin from '../components/NavAdmin';

export const Calculadoras = () => {
  return (
    <>
    <NavAdmin />
    <div className="container">
      <div className="text-center my-4">
        <h2>Calculadora</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <h4 className="text-center mb-3">Calculadora Estándar</h4>
          <CalculadoraEstandar />
        </div>
        <div className="col-12 col-md-6">
          <h4 className="text-center mb-3">Calculadora Especial</h4>
          <CalculadoraEspecial />
        </div>
      </div>
    </div>
    <div className='mt-5 mb-5'></div>
    <Footer></Footer>
    </>
  );
};
