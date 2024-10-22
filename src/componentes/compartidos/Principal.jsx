/* eslint-disable react/prop-types */
import './Principal.css';
import Vinculo from './Vinculos';
import lista from './../../img/lista.svg';
import nuevo from './../../img/nueva.svg';
function Principal({children}) {

    return (
      <div className="principal">
        <aside className='aside'>
          <Vinculo href="/lista" texto="Lista de Metas">
            <img src={lista} alt="Icono de lista" className='icono' />
          </Vinculo>
          <Vinculo href="/crear" texto="Nueva Meta">
            <img src={nuevo} alt="Icono de nuevo" className='icono' />
          </Vinculo>
        </aside>
        <main className='main'> {children} </main>
      </div>
    )
  }
  
  export default Principal;