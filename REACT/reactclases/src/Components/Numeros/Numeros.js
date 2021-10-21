import React, {Component} from 'react';
import Numero from './Numero';

var resultado=0;
class Numeros extends Component{

    state={
        numeros:[4,5],
        suma:0
    };

    
    sumar=(numero)=>{
        resultado+=numero;
        this.setState({
            suma:resultado
        })
    }

    nuevoNumero=()=>{
        var random=Math.floor(Math.random() * 10)+1;
        this.state.numeros.push(random);
        this.setState({
            numeros:this.state.numeros
        });
    }

    render(){
        return(
            <React.Fragment>
                <h1>La suma es: <span style={{color:"red"}}>{this.state.suma}</span></h1>

                <button onClick={()=>this.nuevoNumero()}>
                    Añade un nuevo numero
                </button>

                {this.state.numeros.map((num,index)=>{
                    return (<Numero numero={num} key={index} sumarNumeros={this.sumar}/>);
                })}


            </React.Fragment>
            
        );
    }
}

export default Numeros;