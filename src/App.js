import { useState } from "react";
import AppForm from "./componente/AppForm";


function App() {
  const [idActual, setIdActual]= useState('');
  const [docsBD, setDocsBD] =useState([]);


//////LECTURA A BASE DE DATOS/////////////////////////
  const fnRead = () => {
    console.log("Lectura a BD");
  }
  const fnDelet = () => {
    console.log("Eliminar un registro");
  }
  return (
    <center><div style={{background:"#006f86", width:"350px", height:"500px", color:"white",paddingTop:"25px", fontSize:"27px"}}>
      <AppForm{...{idActual,setIdActual,fnRead}}/>
      
    </div></center>
  );
}

export default App;
