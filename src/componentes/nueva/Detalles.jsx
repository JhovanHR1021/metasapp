function Detalles() {
    return ( 
        <div>
            <form>
                <label>Describe tu meta
                    <input placeholder="Ej. 52 caminatas" />
                </label>
                <label>¿Con que frecuencia deseas cumplir tu meta? <span>(Ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select>
                            <option value="dia">al día</option>
                            <option value="semana">a al semana</option>
                            <option value="mes">al mes</option>
                            <option value="anho">al año</option>
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha limite?
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label>
                    Escoge el icono para la meta
                    <section>
                        <select>
                            <option value="💻">💻</option>
                        </select>
                    </section>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;