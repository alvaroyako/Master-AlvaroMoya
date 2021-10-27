import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'
import { Redirect } from 'react-router';

export default class EliminarDepartamento extends Component {

    state={
        status:false
    }

    eliminarDepartamento=(e)=>{
        e.preventDefault()
        var numero=this.props.iddepartamento;
        var request="/webresources/departamentos/delete/"+numero;
        var url=Global.urldepartamentosCRUD+request;
        axios.delete(url).then(res=>{
            this.setState({
                status:true
            })
        })
    }
    render() {
        if(this.state.status==true){
            return(<Redirect to="/departamentos"/>)
        }
        return (
            <div>
                <h1>¿Eliminar el departamento {this.props.nombre} en {this.props.localidad}?</h1>

                <form onSubmit={this.eliminarDepartamento}>
                    <button className="btn btn-success">Dale manin</button>
                </form>

                <br/>
                <NavLink to="/departamentos" className="btn btn-danger">NOOOO</NavLink>
            </div>
        )
    }
}
