import React from 'react'
import { useEffect,useState } from 'react'
import { ArrowRight, Pencil, Trash } from 'react-bootstrap-icons';
import { json, Link, useNavigate, useOutletContext } from 'react-router-dom';
import './usuario.css';

    export const Usuario = () => {
    const [usuarios, setUsuarios] = useState([{  
        id: 1,
        nombreUsuario: "LuisDavid",
        contrasena:"loboSolitario",
        tipoUsuario:"Usuario"   
    },
    {  
        id:2,
        nombreUsuario: "Luis Hernandez",
        contrasena:"12345678",
        tipoUsuario:"Administrador"   
    },
    {  
        id:3,
        nombreUsuario: "Efren David",
        contrasena:"87654321",
        tipoUsuario:"Usuario"   
    }

])
  
    const [usuario,setUsuario] = useState({})
    const [nombreUsuario,setNombreUsuario] = useState("")
    const [contrasena,setContrasena] = useState("")
    const [tipoUsuario,setTipoUsuario] = useState("administrador")
    const obtenerUsuarios = () =>{

        setUsuarios(
    )}



    useEffect(() => { 
        
    },[])
    
    console.log(usuarios)
    return(
    <>  

<div className="form-wrapper">
  <div className="form-container">
    <div className="form-group">
      <label htmlFor="username">Nombre usuario:</label>
      <input type="text" id="username" placeholder="" value={nombreUsuario} onChange={(event )=>{setNombreUsuario(event.target.value)}}/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" placeholder="" value={contrasena} onChange={(event )=>{setContrasena(event.target.value);console.log(event.target.value)}}/>
    </div>
    <div className="form-group">
      <label htmlFor="userType">Tipo de usuario:</label>
      <select id="userType" value={tipoUsuario} onChange={(event )=>{setTipoUsuario(event.target.value)}}>
      <option id='0'>Selecciona la opcion que quieres</option>
        <option id='1'>Usuario</option>
        <option id='2'>Administrador</option>
      </select>
    </div>
    <div className="button-container">
      <button type="submit" className="add-user-button">Agregar usuario</button>
    </div>
  </div>
</div>



<div className="form-wrapper">
  <div className="form-containertable">
  
    <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Nombre Usuario</th>
                        <th>contraseña</th>
                        <th>Tipo Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((m) => (<tr key={m.id}>
                        <td> <Link to= {`/usuario/eliminar/${m.id}`}> <Trash/> </Link>  </td>
                        <td> <Link to= {`/usuario/modificar/${m.id}`}> <Pencil/> </Link>  </td>
                        <td>{m.nombreUsuario}</td>
                        <td >{m.contrasena}</td>
                        <td>{m.tipoUsuario}</td>
                    </tr>))}
                </tbody>  
    </table>
    </div>
    </div>
    </>)
  
}