/* eslint-disable react/prop-types */
import estilos from './Vinculo.module.css';
function Vinculo({Icono, texto, href, alt}) {

    return (
        <a href={href} className={estilos.vinculo}>
            <img src={Icono} alt={alt} className={estilos.icono} />
            {texto && <span className={estilos.texto}> {texto} </span>}
        </a>
    )
  }
  
  export default Vinculo;