import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'
import { Redirect } from 'react-router';

export default class EliminarDoctor extends Component {
    state={
        status:false
    }

    eliminarDoctor=(e)=>{
        e.preventDefault()
        var id=this.props.iddoctor;
        var request="/api/Doctores/"+id;
        var url=Global.urldoctores+request;
        axios.delete(url).then(res=>{
            this.setState({
                status:true
            })
        })
    }
    render() {
        if(this.state.status==true){
            return(<Redirect to="/doctores"/>)
        }
        return (
            <div>
                <h1>¿Eliminar al doctor {this.props.apellido}?</h1>

                <form onSubmit={this.eliminarDoctor}>
                    <button className="btn btn-success">Dale manin</button>
                </form>

                <br/>
                <NavLink to="/departamentos" className="btn btn-danger">NOOOO</NavLink>
            </div>
        )
    }
}
