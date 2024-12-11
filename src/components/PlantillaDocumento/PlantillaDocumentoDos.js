import React from 'react';
import './PlantillaDocumento.css';

export const PlantillaDocumento = () => {
  return (
    <div className="mi-container my-4">
      <h5 className="text-center">
        SEMARNAT DOCUMENTO ÚNICO DE REMISIÓN Y REEMBARQUE FORESTAL PARA ACREDITAR LA LEGAL PROCEDENCIA DE MATERIAS PRIMAS, PRODUCTOS,
        <br />
        SUBPRODUCTOS FORESTALES DURANTE SU TRANSPORTE, ALMACENAMIENTO Y/O TRANSFORMACIÓN
      </h5>
      <table className="mi-table mi-table-bordered">
        <tbody>
          <tr>
            <td colSpan="2" className="mi-bordered-cell dark-cell">
              Tipo de Documento(2): <strong>Reembarque Forestal</strong>
            </td>
            <td className="mi-bordered-cell dark-cell">
              Folio Autorizado: <strong>315 / 317</strong>
            </td>
          </tr>
          {/*PRIMERA PARTE DATOS DEL TITULAR*/}
          <tr>
            <td  colSpan="2" className=" large-row"></td>
            
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Nombre: <strong>Procesadora Maderera La Trinidad Ixtlan, S.P.R de R.L.</strong></td>
            </tr>
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Domicilio: <strong>Carretera Ixtlan-Zoogocho, Km 22.5 La Trinidad Ixtlan 68701 Santiago Xiacuí Oaxaca</strong></td>
            </tr>
            <tr>
              <td colSpan="2" className="mi-bordered-cell">CURP:</td>
              <td colSpan="2" className="mi-bordered-cell">Registro SIEM:</td>
              <td colSpan="2" className="mi-bordered-cell">Número de Oficio: <strong>SEMARNAT-AR-1012-2020</strong></td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">Cantidad que Ampara:</td>
              <td colSpan="2" className="mi-bordered-cell">Folios autorizados del (12) al (13)</td>
              <td colSpan="3" className="mi-bordered-cell">Fecha de Vencimiento: <strong>6 de Agosto de 2021</strong></td>
            </tr>
          </tr>
          {/*DATOS DEL REMITENTE */}
          <tr>
            <td  colSpan="2" className=" large-row"></td>
            <tr>
              <td colSpan="6" className="mi-bordered-cell dark-cell">
                Ubicación del Lugar de Origen: <strong>Carretera Ixtlan-Zoogocho Km 22.5 68701</strong>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="mi-bordered-cell">Municipio: <strong>Santiago Xiacuí</strong></td>
              <td colSpan="3" className="mi-bordered-cell">Entidad: <strong>Oaxaca</strong></td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">Vigencia:</td>
              <td colSpan="2" className="mi-bordered-cell">No Aplica</td>
              <td className="mi-bordered-cell">Anualidad:</td>
              <td colSpan="2" className="mi-bordered-cell">No Aplica</td>
            </tr>
          </tr>

          {/*INFORMACION DEL DESTINATARIO */}
          <tr>
            <td  colSpan="2" className=" large-row"></td>
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Nombre:</td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">CURP:</td>
              <td colSpan="2" className="mi-bordered-cell">Código de Identificación:</td>
              <td colSpan="3" className="mi-bordered-cell">Domicilio del Destino:</td>
            </tr>
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Domicilio del destino:</td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">Población:</td>
              <td colSpan="2" className="mi-bordered-cell">Municipio:</td>
              <td colSpan="3" className="mi-bordered-cell">Entidad:</td>
            </tr>
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Domicilio:</td>
            </tr>
          </tr>
          
          {/*INFORMACION SOBRE DEL SUBPRODUCTO */}
          <tr>
            <td  colSpan="2" className=" large-row"></td>
            <tr>
              <td colSpan="3" className="mi-bordered-cell">Número y/o Cantidad:</td>
              <td colSpan="3" className="mi-bordered-cell">Descripción:</td>
              <td colSpan="3" className="mi-bordered-cell">Volumen y/o peso amparado:</td>
              <td colSpan="3" className="mi-bordered-cell">Unidad de medida:</td>
            </tr>
            <tr>
              <td colSpan="3" className="mi-bordered-cell"></td>
              <td colSpan="3" className="mi-bordered-cell"></td>
              <td colSpan="3" className="mi-bordered-cell"></td>
              <td colSpan="3" className="mi-bordered-cell"></td>
            </tr>
            <tr>
              <td colSpan="6" className="mi-bordered-cell">Cantidad que ampara este documento con letra:</td>
            </tr>
          </tr>
         
          {/*INFORMACION SOBRE SALDOS y medios de transporte*/}
          <tr>
            <td  colSpan="2" className=" large-row"></td>
            <tr>
              <td colSpan="2" className="mi-bordered-cell dark-cell">
                Saldo disponible según documento anterior: 
              </td>
              <td className="mi-bordered-cell dark-cell">
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="mi-bordered-cell dark-cell">
                Cantidad que ampara este documento: 
              </td>
              <td className="mi-bordered-cell dark-cell">
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="mi-bordered-cell dark-cell">
                Saldo que pasa al siguiente documento: 
              </td>
              <td className="mi-bordered-cell dark-cell">
              </td>
            </tr>
            <td  colSpan="2" className=" large-row"></td>
            <tr> 
              <td colSpan="2" className="mi-bordered-cell dark-cell">Medio de Transporte:</td>
              <td className="mi-bordered-cell">Propietario:</td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">Marca :</td>
              <td className="mi-bordered-cell">Tipo:</td>
              <td className="mi-bordered-cell">Modelo:</td>
            </tr>
            <tr>
              <td className="mi-bordered-cell">Capacidad:</td>
              <td className="mi-bordered-cell">Placas o matrícula:</td>

            </tr>
          </tr>
        </tbody>
      </table>

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
