import React, { Component } from 'react'

export default class Multiplicar extends Component {
    cajanumero=React.createRef();
    state={
        tabla:[]
    }

    multiplicacion=(e)=>{
        var datos=[];
        e.preventDefault();
        
        for(var i=0;i<=10;i++){
           var numero=this.cajanumero.current.value;
            numero=numero*i;
            datos.push(numero);
        }

        this.setState({
            tabla:datos
            
          })

    }

    render() {
        return (
            <div>
                 
                <h1>Tabla multiplicar</h1>

                <form onSubmit={this.multiplicacion}>
                    <label>Numero: </label>
                    <input type="number" ref={this.cajanumero}/><br/>
                    <button>
                        Enviar datos
                    </button>
                    <br/>
                    <br/>
                   {this.state.tabla.map((numero,index)=>{
                       return(
                           <h4 key={index}>{numero} </h4>
                        
                       )
                   })}
                   
                </form>
            
            </div>
        )
    }
}
