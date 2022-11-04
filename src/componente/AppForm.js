import React from 'react'

const AppForm = (props) => {
    ////////////////////actualizar y eliminar///////////////////////
  const camposRegistro = {nombre:'',edad:"",genero:""}; ////estructura de campo de resgitro/////
  const [objeto,setObjeto] = useState(camposRegistro);
   
  const controlarEstadoCambio= (e) => {///////////////maneja cambios en input//////////////////
     
  };

  const controlSubmit= (e) => {
     
  };


  return (
    <div>
      Formulario AppForm.js
    </div>
  )
}

export default AppForm


