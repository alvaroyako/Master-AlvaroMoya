import {Component} from 'react';

function miFuncion(){
    console.log("Soy una funcion fuera de la clase")
}

class Contador extends Component{
    numero=1;
    incrementarContador=()=>{
        console.log("Contador: "+this.numero);
        this.numero++;
    }
    
    state={valor:parseInt(this.props.Inicio)};
    incrementarValor=()=>{
        this.setState({
            valor: this.state.valor+1
        });
    }
    render(){
        var valor=14;
        const miMetodo=()=>{
            valor+=1;
            console.log("Soy un metodo dentro de render "+valor);
        }
        return (
            <div>
                <h1>Primer component JSX</h1>
                <h2 style={{color:"blue"}}>Inicio: {this.props.Inicio}</h2>
                <h2 style={{color:"red"}}>Variable estado: {this.state.valor}</h2>
                <button onClick={()=>this.incrementarValor()}>
                    Incrementar variable State
                </button>
                <button onClick={()=>{miMetodo();miFuncion();this.incrementarContador()}}>Pulsa</button>
            </div>
        );
    }
}

export default Contador;