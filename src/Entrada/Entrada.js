import React from 'react';
import './Entrada.css';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Entrada">
                 <div className = "Caja"> Vamos a separar la siguiente frase</div>
                <p> El texto de entrada es: </p>
                <input type="text" onChange={this.props.cambiando} value={this.props.valorInput}/>
            </div >
        )
    }
};

export default Entrada;