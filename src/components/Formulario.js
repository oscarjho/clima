import { useState } from 'react';

const Formulario = () => {

    //State del formulario
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    //Creando state para el error
    const [error, guardarError] = useState(false);

    //Extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    //Funcion que coloca los elementos en el state
    const handleChange= e => {
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        });
    };

    //Cuando el usuario le da submit al form
    const handleSubmit = e => {
        e.preventDefault();
        //Validar
        if(ciudad.trim()===''||pais.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Pasar al componente principal
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4"> Todos los campos son obligatorios </p> : null}
                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>
                <div className="input-field col s12">
                    <select
                        name="pais"
                        value={pais}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                        <option value="VE">Venezuela</option>
                    </select>
                    <label htmlFor="pais">País: </label>
                </div>
                <div className="input-field col s12">
                    <input 
                        type="submit"
                        value="Buscar Clima"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
                </div>
            </form>
    );
};

export default Formulario;