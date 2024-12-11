import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const PlantillaDocumento = () => {
  return (
    <div className="container my-4">
      <h5 className="text-center">
        SEMARNAT DOCUMENTO ÚNICO DE REMISIÓN Y REEMBARQUE FORESTAL PARA ACREDITAR LA LEGAL PROCEDENCIA DE MATERIAS PRIMAS, PRODUCTOS,
        <br />
        SUBPRODUCTOS FORESTALES DURANTE SU TRANSPORTE, ALMACENAMIENTO Y/O TRANSFORMACIÓN
      </h5>

      {/* Tipo de documento */}
      <div className="row">
        <div className="col-md-8  border p-2">
          Tipo de Documento(2): <strong>Reembarque Forestal</strong>
        </div>
        <div className="col-md-4 border p-2">
          Folio Autorizado: <strong>315 / 317</strong>
        </div>
      </div>

      {/* Datos del titular */}
      <div className="row">
        <div className="col-12 border p-2">
          Nombre: <strong>Procesadora Maderera La Trinidad Ixtlan, S.P.R de R.L.</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-2">
          Domicilio: <strong>Carretera Ixtlan-Zoogocho, Km 22.5 La Trinidad Ixtlan 68701 Santiago Xiacuí Oaxaca</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-2">CURP:</div>
        <div className="col-md-3 border p-2">Registro SIEM:</div>
        <div className="col-md-3 border p-2">
          Número de Oficio: <strong>SEMARNAT-AR-1012-2020</strong>
        </div>
        <div className="col-md-3 border p-2">
          Fecha: <strong>06/08/2020</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-2">Cantidad que Ampara:</div>
        <div className="col-md-3 border p-2">Folios autorizados del (12) al (13):</div>
        <div className="col-md-3 border p-2">Unidad de medida:</div>
        <div className="col-md-3 border p-2">
          Fecha de Vencimiento de autorización de documentos: <strong>6 de Agosto de 2021</strong>
        </div>
      </div>

      {/* Datos del remitente */}
      <div className="row">
        <div className="col-12 border p-2">
          Ubicación del Lugar de Origen: <strong>Carretera Ixtlan-Zoogocho Km 22.5 68701</strong>
        </div>
      </div>
      <div className="row">
      <div className="col-md-4 border p-2">
          RFN: <strong>Santiago Xiacuí</strong>
        </div>
        <div className="col-md-4 border p-2">
          Municipio: <strong>Santiago Xiacuí</strong>
        </div>
        <div className="col-md-4 border p-2">
          Entidad: <strong>Oaxaca</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 border p-2">Tipo de resolución: </div>
        <div className="col-md-3 border p-2">N°:</div>
        <div className="col-md-3 border p-2">Fecha:</div>
      </div>
      <div className="row">
        <div className="col-md-2 border p-2">Vigencia: </div>
        <div className="col-md-3 border p-2">Volumen autorizado para esta anualidad:</div>
        <div className="col-md-2 border p-2">Anualidad:</div>
        <div className="col-md-5 border p-2">Género y/o producto:</div>
      </div>

      {/* Información del destinatario */}
      <div className="row">
        <div className="col-12 border p-2">Nombre:</div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-2">CURP:</div>
        <div className="col-md-3 border p-2">Código de Identificación:</div>
        <div className="col-md-6 border p-2">RFN:</div>
      </div>
      <div className="row">
        <div className="col-12 border p-2">Domicilio del destino:</div>
      </div>
      <div className="row">
        <div className="col-md-4 border p-2">Población:</div>
        <div className="col-md-4 border p-2">Municipio:</div>
        <div className="col-md-4 border p-2">Entidad:</div>
      </div>
      <div className="row">
        <div className="col-12 border p-2">Domicilio:</div>
      </div>

      {/* Información sobre el subproducto */}
      <div className="row">
        <div className="col-md-3 border p-2">Número y/o Cantidad:</div>
        <div className="col-md-3 border p-2">Descripción:</div>
        <div className="col-md-3 border p-2">Volumen y/o peso amparado:</div>
        <div className="col-md-3 border p-2">Unidad de medida:</div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-2"></div>
        <div className="col-md-3 border p-2"></div>
        <div className="col-md-3 border p-2"></div>
        <div className="col-md-3 border p-2"></div>
      </div>
      <div className="row">
        <div className="col-12 border p-2">Cantidad que ampra este documento con letra:</div>
      </div>

      {/* Saldos y transporte */}
      <div className="row">
        <div className="col-md-6 border p-2">Saldo disponible según documento anterior:</div>
        <div className="col-md-6 border p-2"></div>
      </div>
      <div className="row">
        <div className="col-md-6 border p-2">Cantidad que ampara este documento:</div>
        <div className="col-md-6 border p-2"></div>
      </div>
      <div className="row">
        <div className="col-md-6 border p-2">Saldo que pasa al siguiente documento:</div>
        <div className="col-md-6 border p-2"></div>
      </div>
      <div className="row">
        <div className="col-md-6 border p-2">Saldo que pasa al siguiente documento:</div>
        <div className="col-md-6 border p-2">Medio de Transporte:</div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-2">Marca:</div>
        <div className="col-md-3 border p-2">Tipo:</div>
        <div className="col-md-3 border p-2">Modelo:</div>
        <div className="col-md-3 border p-2">Placas o matrícula:</div>
      </div>

      {/* Firmas */}
      <div className="d-flex justify-content-between mt-4">
        <div>
          <p>Nombre y Firma de quien Expide</p>
          <p>____________________________</p>
        </div>
        <div>
          <p>Nombre y Firma del Chofer</p>
          <p>____________________________</p>
        </div>
        <div>
          <p>Nombre y Firma de quien Recibe</p>
          <p>____________________________</p>
        </div>
      </div>
    </div>
  );
};
