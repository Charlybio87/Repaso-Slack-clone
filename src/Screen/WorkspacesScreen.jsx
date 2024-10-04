import React from 'react'
import { obtenerWokspaces } from '../../data'
import { Link } from 'react-router-dom'

const WorkspacesScreen = () => {
  const workspaces = obtenerWokspaces()
  return (
    <div>
      <h1>Entornos de Trabajos</h1>
      {
        workspaces.map((workspace) => {
          return (
          <div key={workspace.id}>
            <h3>{workspace.name}</h3>
            <Link to={'/workspace/' + workspace.id}>Entrar</Link>
            {/* <ul>
              {
                workspace.channels.map((channel) =>{
                  return (
                    <li key={channel.id}>
                      {channel.name}
                    </li>
                  )
                })
              }
            </ul> */}
          </div>
          )
        }) 
      }
      <Link to='/new'>Crear nuevo Workspace</Link>
    </div>
  )
}

export default WorkspacesScreen