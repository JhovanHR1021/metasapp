/* eslint-disable no-unused-vars */
import './App.css'
import Encabezado from './componentes/compartidos/Encabezado'
import Pie from './componentes/compartidos/Pie'
import Principal from './componentes/compartidos/Principal'
import Lista from './componentes/lista/Lista'
import Detalles from './componentes/nueva/Detalles'

function App() {

  return (
    <>
      <Encabezado></Encabezado>
      <Principal>
        {/* <Lista></Lista> */}
        <Detalles></Detalles>
      </Principal>
      <Pie></Pie>
    </>
  )
}

export default App
