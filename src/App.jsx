import './App.css'
import Encabezado from './componentes/compartidos/Encabezado'
import Pie from './componentes/compartidos/Pie'
import Principal from './componentes/compartidos/Principal'
import Lista from './componentes/lista/Lista'

function App() {

  return (
    <>
      <Encabezado></Encabezado>
      <Principal> <Lista></Lista> </Principal>
      <Pie></Pie>
    </>
  )
}

export default App
