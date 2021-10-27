import axios from 'axios';
import React, { Component } from 'react';
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {
    

    state={
        empleado:[],
        status:false
    }

    buscarEmpleado=()=>{
        var request="/api/empleados/"+this.props.idempleado;
        var url=Global.urlempleados+request;
        axios.get(url).then(res=>{
            this.setState({
                empleado: res.data,
                status:true
            });
        });
    }

    componentDidUpdate=(oldProps)=>{
        if(this.props.idempleado != oldProps.idempleado){
            this.buscarEmpleado();
        }
    }

    componentDidMount=()=>{
        this.buscarEmpleado();
    }

    render() {
        return (
            <div>
                <h1>Detalles Empleado</h1>
                {this.state.status==true && (
                    <div>
                     <h2 style={{color:"red"}}>{this.state.empleado.apellido}</h2>
                     <h2 style={{color:"red"}}>{this.state.empleado.oficio}</h2>
                     <h2 style={{color:"red"}}>{this.state.empleado.salario} €</h2>
                     </div>
                )}
               
            </div>
        )
    }
}
