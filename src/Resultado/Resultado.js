import React from 'react';
import './Resultado.css';

class Resultado extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let frase = this.props.valor;
        let mensaje = null;
        
        if (frase.length > 5) {
            mensaje = (
                "Texto suficientemente largo"
            );
        } else {
            mensaje = (
                "Texto muy corto"
            );
        }

        return (
            <div className="Resultado">
               <p> Resultado: {mensaje}</p>
            </div >
        )
    }
};

export default Resultado;