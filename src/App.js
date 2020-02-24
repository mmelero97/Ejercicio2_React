import React from 'react';
import './App.css';
import Entrada from './Entrada/Entrada';
import Resultado from './Resultado/Resultado';
import Letra from './Letras/Letra/Letra';
import Letras from './Letras/Letras';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorEntrada: "",
      resultado: []
    }
  }

  borrarLetra = (letraIndex) => {
    console.log(letraIndex)
    let entrada = this.state.valorEntrada
    console.log(entrada)
    let aux1 = entrada.substring(0, letraIndex);
    let aux2 = entrada.substring(letraIndex+1, entrada.length);
    let aux = aux1.concat(aux2)
    this.setState({ valorEntrada: aux });
  }

  cambiarEstado = (event) => {
    this.setState({valorEntrada: event.target.value})
    console.log( event.target.value)
  }


  render() {
    return (
      <div>
        <Entrada
          cambiando={this.cambiarEstado}
          valorInput={this.state.valorEntrada}
        />

        <Letras
          texto={this.state.valorEntrada}
          clicked={this.borrarLetra}
        />

        <Resultado
          valor={this.state.valorEntrada}
        />
       

      </div>
    );
  }
}

export default App;


// Problemas al borrar las letras
// Cómo cambiar también lo que hay en el input de forma dinámica
