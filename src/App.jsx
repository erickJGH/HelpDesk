import { Route, Routes } from "react-router-dom"

function Page({ route }){
  return(
    <div>route</div>
  )
}


function App() {
  

  return (
    <>
    <Routes>
      <Route exact path="/" element={<div>Inicio</div>}></Route>
      <Route exact path="/login" element={<div>Login</div>}></Route>
      <Route exact path="/registro" element={<div>Registro</div>}></Route>
    </Routes>
    </>
  )
}

export default App
