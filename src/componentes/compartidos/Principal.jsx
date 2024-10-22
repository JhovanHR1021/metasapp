/* eslint-disable react/prop-types */
import estilos from './Principal.module.css';
import Vinculo from './Vinculos';
import lista from './../../img/lista.svg';
import nuevo from './../../img/nueva.svg';
function Principal({children}) {

    return (
      <div className={estilos.principal}>
        <aside className={estilos.aside}>
          <Vinculo 
            href="/lista" 
            texto="Lista de Metas" 
            Icono={lista} 
            alt='Vínculo que contiene una imagen de una lista' 
          />
          <Vinculo 
            href="/crear" 
            texto="Nueva Meta" 
            Icono={nuevo} 
            alt='Vínculo que contiene una imagen de más' 
          />
        </aside>
        <main className={estilos.main}> {children} </main>
      </div>
    )
  }
  
  export default Principal;