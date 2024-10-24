function Detalles() {
    return ( 
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">Describe tu meta
                    <input className="input" placeholder="Ej. 52 caminatas" />
                </label>
                <label className="label">¿Con que frecuencia deseas cumplir tu meta? <span>(Ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number" />
                        <select className="input">
                            <option value="dia">al día</option>
                            <option value="semana">a al semana</option>
                            <option value="mes">al mes</option>
                            <option value="anho">al año</option>
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    ¿Tienes una fecha limite?
                    <input className="input" type="date" />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <section >
                        <select className="input">
                            <option value="💻">💻</option>
                        </select>
                    </section>
                </label>
            </form>
            <div className="botones">
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;