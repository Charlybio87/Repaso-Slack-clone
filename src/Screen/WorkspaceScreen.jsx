import React from 'react'
import ChatList from '../Components/ChatList/ChatList'
import ChannelList from '../Components/ChannelList/ChannelList'
import { useParams } from 'react-router-dom'
import { obtenerWokspacesPorId } from '../../data'

const WorkspaceScreen = () => {
  const {workspace_id} = useParams()
  const workspace = obtenerWokspacesPorId(workspace_id)
  console.log(workspace);
  
  const mensajes = 
  [
    {
      hour: '11:06 PM',
      author: 'Pepe suarez',
      text: 'Hola a todos!',
      id: 1
    },
    {
      hour: '11:05 AM',
      author: 'Martina Sanchez',
      text: 'Que tal?',
      id: 2
    },
    {
      hour: '11:17 AM',
      author: 'Juancito',
      text: 'Muy mal, no se nada de HTML para el examen',
      id: 3
    }
  ]

  const canales = [
    {
        id: 1,
        nombre: 'Consultas'
    },
    {
        id: 2,
        nombre: 'General'
    },
    {
        id: 3,
        nombre: 'Tareas'
    }
  ]
  return (
    <>
      <h1>{workspace.name}</h1>

      <ChatList  mensajes={mensajes}/>
      <ChannelList canales={workspace.channeles} titulos={'Canales'}/>
    </>
  )
}

export default WorkspaceScreen
