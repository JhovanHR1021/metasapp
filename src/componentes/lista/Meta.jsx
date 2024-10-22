import estilos from './Meta.module.css';
function Meta() {
    return (
        <div className={estilos.meta + 'tarjeta'}>
            <div className='flex'>
                <div className={estilos.icono}>icono</div>
                <p className={estilos.frecuencia}>1 <sub>/ semana</sub> </p>
                <p>detalles</p>
            </div>
            <div className='flex'>
                <div>
                    <p>4/5</p>
                    <div>
                        <div></div>
                    </div>
                </div>
                <button>Completado</button>
            </div>
        </div>
    );
}

export default Meta;