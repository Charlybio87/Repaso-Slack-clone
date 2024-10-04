import React, { useState } from 'react'
import { crearWorkspaces, obtenerWokspaces } from '../../data'
import { useNavigate } from 'react-router-dom'

const CreateWorkspaceScreen = () => {
  const navigation = useNavigate()
  const [errorWorkspace, setErrorWorkspace] = useState({text: '', isError: false})
  const [errorChannel, setErrorChannel] = useState({text: '', isError: false})
  
  const handleSubmitForm = (evento) => {
    evento.preventDefault();
    const form = evento.target; // Obtener el elemento del formulario
    const workspace = form.workspace.value; // Obtener el valor del campo name
    const channel = form.channel.value;
    const newWorkspace = { 
      name: workspace,
      channels :[
        {
          name: channel
        }
      ]
    }

    if ( workspace !== '' && workspace.length >= 3) {  
      setErrorWorkspace ({text: '', isError: false})
    } else {
      (workspace === '') ? setErrorWorkspace ({text: 'Por favor, ingrese un nombre.', isError: true}) : setErrorWorkspace ({text: 'Debe tener al menos 3 caracteres.', isError: true})
    }  
    if (channel !== '' & channel.length >= 3 ) {
      setErrorChannel ({text: '', isError: false})  
    } else {
      (channel === '') ? setErrorChannel ({text: 'Por favor, ingrese un nombre.', isError: true}) : setErrorChannel ({text: 'Debe tener al menos 3 caracteres.', isError: true})
    }
    if (workspace !== '' && workspace.length >= 3 && channel !== '' && channel.length >= 3 ) {
      // console.log(newWorkspace)
      // localStorage.setItem('workspaces', JSON.stringify(newWorkspace))
      // let workspaces = JSON.parse(localStorage.getItem('workspaces'))
      // console.log( typeof workspaces);
      crearWorkspaces(newWorkspace)
      console.log(obtenerWokspaces())
      navigation('/')
    }
  }

  return (
    <>
    <h1>Crear Workspace</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>Nombre del Workspace</label>
            <br />
            <input name='workspace'/>
            {errorWorkspace.isError && <span>{errorWorkspace.text}</span>}
          </div>
          <div>
            <label>Nombre del Canal</label>
            <br />
            <input name='channel'/>
            {errorChannel.isError && <span>{errorChannel.text}</span>}
          </div>
          <button type='submit'>Crear</button>
        </form>
      </div>
    </>
  )
}

export default CreateWorkspaceScreen