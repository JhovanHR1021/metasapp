import './Encabezado.css';
import logo from './../../img/logo.svg';
import perfil from './../../img/perfil.svg';
function Encabezado() {

    return (
      <header className="encabezado">
        <div className="contenedor">
          <img src={logo} alt="Logo de Metas App" className="logo-metas" />
          <a href="/" className='titulo'>Metas App</a>
        </div>
        <nav>
            <a href="/perfil" className="vinculo">
              <img src={perfil} alt="Icono de perfil" className="icono" />
            </a>
        </nav>
      </header>
    )
  }
  
  export default Encabezado;