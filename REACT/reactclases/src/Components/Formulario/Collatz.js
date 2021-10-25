import React, { Component } from 'react'


export default class Collatz extends Component {
    cajanumero=React.createRef();
    state={
        num:[]
    }

    collatz=(e)=>{
        e.preventDefault();
        var numero=0;
        numero=this.cajanumero.current.value;
        
        while(numero!=1){
            if(numero%2==0){
                numero=numero/2;
                this.state.num.push(numero);
               
            }else{
                numero=(numero*3)+1;
                this.state.num.push(numero);
            }
        }

        this.setState({
            num:this.state.num
            
          })

          
    }

    render() {
        return (
            <div>
                <h1>Ejemplo simple formularios</h1>

                <form onSubmit={this.collatz}>
                    <label>Numero: </label>
                    <input type="number" ref={this.cajanumero}/><br/>
                    <button>
                        Enviar datos
                    </button>
                    <br/>
                    <br/>
                    {this.state.num.map((numeros) => {
                return(
                    <h4>{numeros}</h4>
                );
            })}
                </form>
            </div>
        )
    }
}
