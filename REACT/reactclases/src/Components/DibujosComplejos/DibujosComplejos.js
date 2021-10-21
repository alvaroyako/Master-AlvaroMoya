import {Component} from 'react';

class DibujosComplejos extends Component{

    state={
        nombres: ["Marcos","Alvaro","Julian","Antonio","David"]
    };

    insertarNombre=()=>{
        this.state.nombres.push("Nuevo");

        this.setState({
            nombres: this.state.nombres
        });
    };

    render(){
        return(
            <div>
                <h1>Dibujos con bucles</h1>
                {this.state.nombres.map((name,index)=>{
                    return(
                        <h2 key={index}>Nombre: {name}</h2>
                    )
                })}
                <button onClick={()=>this.insertarNombre()}>
                    Pulsa
                </button>
            </div>
        );
    }
}

export default DibujosComplejos