import estilos from './Encabezado.module.css';
import logo from './../../img/logo.svg';
import perfil from './../../img/perfil.svg';
import Vinculo from './Vinculos';
function Encabezado() {

    return (
      <header className={estilos.encabezado}>
        <div className={estilos.contenedor}>
          <img src={logo} alt="Logo de Metas App" className={estilos.logosvg} />
          <a href="/" className={estilos.titulo}>Metas App</a>
        </div>
        <nav>
          <Vinculo 
            href="/perfil" 
            Icono={perfil} 
            alt='Icono de perfil' 
          />
        </nav>
      </header>
    )
  }
  
  export default Encabezado;