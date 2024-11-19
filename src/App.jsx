import { useState } from "react"
import Formulario from "./components/formulario"
import Tables from "./components/tables"

function App() {
  const [imc, setImc] = useState(null);

  return (
    <>
      <Formulario setImc={setImc}/>
      <Tables imc={imc}/>
    </>
  )
}

export default App
