import {collection,addDoc} from "firebase/firestore";
import React from 'react'
import { useState } from "react";
import firebase, { db } from './firebase' ;
import Select from 'react-select'
const AppForm = (props) => {
    ////////////////////actualizar y eliminar///////////////////////
  const camposRegistro = {url:'',nombre:"",descripcion:""}; ////estructura de campo de resgitro/////
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
            addDoc(collection(db, 'favoritos'),objeto);
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
    if(objeto.url==="" || /^\s+$/.test(objeto.url)){
       alert("URL");
       return false;
      }
    if (objeto.nombre ==="" ||/^\s+$/.test(objeto.nombre)){
       alert("Nombre")
       return false;
    }
    if (objeto.descripcion ==="" ||/^\s+$/.test(objeto.descripcion)){
      alert("Descripcion")
      return false;
   }
    return true;
    
  };
  
  return (
    <div style={{background:"#123748",height:"489px",width:"350px",boxShadow: "7px 13px 37px #000", paddingTop:"7px"}}>
    <h3 style={{fontSize: "30px", marginBottom: "0px"}}>Registro</h3>
    <form onSubmit={controlSubmit} style={{ padding:"40px", fontFamily: "calibri"}}>
      <input style={{width:"100%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name='url' placeholder='URL' onChange={controlarEstadoCambio} value={objeto.url}/> <br />
      <input style={{width:"100%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name='nombre' placeholder='Nombre' onChange={controlarEstadoCambio} value={objeto.nombre}/> <br />
      <input style={{width:"100%", background:"#123748", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #1f53c5", fontFamily: "calibri", fontSize:"18px", color:"white"}} type="text" name='descripcion' placeholder='Descripcion' onChange={controlarEstadoCambio} value={objeto.descripcion}/> <br />
      <button style={{width:"100%", background:"#1f53c5", border: "none",padding:"12px", color:"white", margin:"16px 15px", fontSize: "18px", fontFamily: "calibri"}}>
      {props.idActual === ""? "Guardar" : "Actualizar"}
      </button>
    </form>
    </div>
  )
}

export default AppForm


