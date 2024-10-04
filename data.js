import { v4 as uuidv4 } from "uuid"
const workspaces_estado_inicial = [
  {
    id : 1,
    name : 'workspace 1',
    description : 'Workspace 1 description',
    img : 'https://picsum.photos/id/237/200/300',
    channeles:[
      {
        id : 1,
        name : 'channel 1',
        messages: [
          {
            id : 1,
            author: 'pepe',
            text : 'message 1',
          },
          {
            id : 2,
            author: 'charly',
            text : 'message 2',
          },
        ]
      },
      {
        id : 2,
        name : 'channel 2',
        messages: [
          {
          id : 3,
          author: 'pepe',
          text : 'message 3',
          },
          {
            id : 4,
            author: 'charly',
            text : 'message 4',
          },
        ]
      },
    ]
  },
  {
    id : 2,
    name : 'workspace 2',
    description : 'Workspace 2 description',
    img : 'https://picsum.photos/id/237/200/300',
    channeles:[
      {
        id : 1,
        name : 'canal 1',
        messages: [
          {
            id : 1,
            author: 'pepe',
            text : 'message 1',
          },
          {
            id : 2,
            author: 'charly',
            text : 'message 2',
          },
        ]
      },
      {
        id : 2,
        name : 'Consultas',
        messages: [
          {
          id : 3,
          author: 'pepe',
          text : 'message 3',
          },
          {
            id : 4,
            author: 'charly',
            text : 'message 4',
          },
        ]
      },
    ]
  }
]

const obtenerWokspaces = () => {
  let workspaces = localStorage.getItem('workspaces')
  if (workspaces) {
    return JSON.parse(workspaces)
  } else {
    // localStorage.setItem('workspaces',JSON.stringify([]))
    // return []
    localStorage.setItem('workspaces',JSON.stringify(workspaces_estado_inicial))
    return workspaces_estado_inicial
  }
}

const crearWorkspaces = (newWorkspace) => { 
  newWorkspace.id = uuidv4()
  let workspaces = obtenerWokspaces()
  workspaces.push(newWorkspace)
  localStorage.setItem('workspaces',JSON.stringify(workspaces))
}

const obtenerWokspacesPorId = (id) => {
  let workspaces = obtenerWokspaces()
  return workspaces.find(workspace => workspace.id == id)
  
}

export {obtenerWokspaces, crearWorkspaces, obtenerWokspacesPorId}