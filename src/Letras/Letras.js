import React from 'react';
import Letra from './Letra/Letra';
import './Letras.css';

class Letras extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let array_letras = Array.from(this.props.texto)
        let letras = null

        console.log(array_letras)

        letras =(
            array_letras.map((letra, index) => {
              return <Letra
                  click={() => this.props.clicked(index)}
                  letra_suelta={letra}
                  key={index}
                />
            })
          )

        return (
            <div className="Letras">
                {/* <p> Texto separado en letras: {this.props.texto}</p> */}
                {/* <Letra
                letra_suelta="a
                "/> */}
                <p> Texto separado en letras: </p>
                {letras}
            </div >
        )
    }
};

export default Letras;