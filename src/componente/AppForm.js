import {collection,addDoc} from "firebase/firestore";
import React from 'react'
import { useState } from "react";
import firebase, { db } from './firebase' ;
import Select from 'react-select'
const AppForm = (props) => {
    ////////////////////actualizar y eliminar///////////////////////
  const camposRegistro = {nombre:'',edad:"",genero:""}; ////estructura de campo de resgitro/////
  const [objeto,setObjeto] = useState(camposRegistro);
   
  const controlarEstadoCambio= async(e) => {///////////////maneja cambios en input//////////////////
     const {name,value} = e.target;
     setObjeto({...objeto,[name]:value});
     console.log(objeto);////lectura al objeto////
  };

  const controlSubmit= async (e) => {///maneja submit (envio)////
     e.preventDefault(); ////evita por defecto
     if (props.idActual === ""){
        if(validarForm()){
            addDoc(collection(db, 'persona'),objeto);
            console.log("Se guardo en bd");

        }else{
          console.log("No se guardo");
              }
    }else{
      //console.log("No se guardo");
    }
    setObjeto(camposRegistro);
  };
  const validarForm= (e) => {
    if(objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){
       alert("Escriba nombre...");
       return false;
      }
    if (objeto.edad ==="" ||/^\s+$/.test(objeto.edad)){
       alert("Escriba su edad...")
       return false;
    }
    if (objeto.genero ==="" ||/^\s+$/.test(objeto.genero)){
      alert("Escriba su edad...")
      return false;
   }
    return true;
    
  };
  
  return (
    <div style={{background:"#123748",height:"489px",width:"350px",boxShadow: "7px 13px 37px #000", paddingTop:"7px"}}>
    <h3 style={{fontSize: "30px", marginBottom: "0px"}}>Registro</h3>
    <form onSubmit={controlSubmit} style={{ padding:"40px", fontFamily: "calibri"}}>
      <input style={{width:"100%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name='nombre' placeholder='Ingrese su nombre' onChange={controlarEstadoCambio} value={objeto.nombre}/> <br />
      <input style={{width:"100%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name='edad' placeholder='Ingrese su edad' onChange={controlarEstadoCambio} value={objeto.edad}/> <br />
      <select style={{width:"108%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name="genero" onChange={controlarEstadoCambio}value={objeto.genero} >
        <option >Seleccione su genero</option>
        <option value={"femenino"}>Femenino</option>
        <option value={"masculino"}>Masculino</option>
      </select>
      <button style={{width:"100%", background:"#1f53c5", border: "none",padding:"12px", color:"white", margin:"16px 15px", fontSize: "18px", fontFamily: "calibri"}}>
      {props.idActual === ""? "Guardar" : "Actualizar"}
      </button>
    </form>
    </div>
  )
}

export default AppForm


