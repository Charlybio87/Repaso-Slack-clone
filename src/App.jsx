import React from "react"
import ChannelList from "./Components/ChannelList/ChannelList"
import ChatList from "./Components/ChatList/ChatList"
import CreateWorkspaceScreen from "./Screen/CreateWorkspaceScreen"
import { Route, Routes } from "react-router-dom"
import WorkspaceScreen from "./Screen/WorkspaceScreen"
import WorkspacesScreen from "./Screen/WorkspacesScreen"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WorkspacesScreen />} />
        <Route path="/workspace/:workspace_id" element={<WorkspaceScreen />} />
        <Route path='/new' element={<CreateWorkspaceScreen/>}/>
      </Routes> 

      {/* <ChannelList canales={canales} titulos={'Mensajes Directos'}/>  llama a la funcion/componente (INNVOCA) */}
      {/*{canalesJSX}  llama a la variable que tiene el array (TRAE EL DATO DE DICHA VARIABLE) */}
    </>
  )
}
  
  export default App