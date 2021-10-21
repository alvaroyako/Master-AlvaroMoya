import React, {Component} from 'react';

class Numero extends Component{
    render(){
        return (
            <React.Fragment>
                <h2>{this.props.numero}</h2>
                <button onClick={()=>this.props.sumarNumeros(this.props.numero)}>
                    Sumar {this.props.numero}
                </button>
            </React.Fragment>
        );
    }
    
    
}

export default Numero;