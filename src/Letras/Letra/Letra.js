import React from 'react';
import './Letra.css';


class Letra extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Letra">
                <p onClick={this.props.click}>{this.props.letra_suelta}</p>
            </div >
        )
    }
};

export default Letra;