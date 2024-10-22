import './App.css'
import Encabezado from './componentes/compartidos/Encabezado'
import Pie from './componentes/compartidos/Pie'
import Principal from './componentes/compartidos/Principal'
import Meta from './componentes/lista/Meta'

function App() {

  return (
    <>
      <Encabezado></Encabezado>
      <Principal> <Meta></Meta> </Principal>
      <Pie></Pie>
    </>
  )
}

export default App
