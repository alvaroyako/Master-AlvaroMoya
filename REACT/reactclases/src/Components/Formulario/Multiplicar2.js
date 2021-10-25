import React, { Component } from 'react'

export default class Multiplicar2 extends Component {
    optionseleccionado=React.createRef();
    
    state={
        filas:[]
    }
    
    mostrarTabla=(e)=>{
        e.preventDefault();
        var numero=parseInt(this.optionseleccionado.current.value);
        var datos=[];
        for (var i=1;i<=10;i++){
            var multi = numero*1;
            datos.push(<tr key={i}>
                <td>{numero+"*"+i}</td>
                <td>{multi}</td>
                </tr>);
        }
        this.setState({filas:datos});
    }

    generarOptions=()=>{
        var options=[];
        for(var i=1;i<=5;i++){
            var aleatorio=Math.round((Math.random()*50)+1);
            options.push(<option key={i} value={aleatorio}>
                {aleatorio}
            </option>);
        }
        return options;
    };

    render() {
        return (
            <div>
                <h1>
                    Form select
                </h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Seleccione un numero: </label>
                    <select ref={this.optionseleccionado}>
                        {this.generarOptions()}
                    </select>
                    <button>
                        Mostrar tabla
                    </button>
                </form>
                <hr/>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.filas}</tbody>
                </table>
            </div>
        )
    }
}
