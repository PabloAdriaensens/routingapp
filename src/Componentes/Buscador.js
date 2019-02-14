import React, {Component} from 'react';
import '../css/Buscador.css';

class Buscador extends Component {

    leerDatos = (e) => {
        // termino de búsqueda
        const termino = e.target.value;

        // enviamos por props
        this.props.busqueda(termino);
    };

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange={this.leerDatos}/>
            </form>
        );
    }
}

export default Buscador;