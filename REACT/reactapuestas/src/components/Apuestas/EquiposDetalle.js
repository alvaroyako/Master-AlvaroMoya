import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { NavLink } from 'react-router-dom';



export default class EquiposDetalle extends Component {
    state={
        equipo:{},
        status:false
    }

    cargarEquipos=()=>{
        var request="/api/Equipos/"+this.props.id
        var url=Global.urlapuestas+request;
        axios.get(url).then(res=>{
        
            this.setState({
                equipo:res.data
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarEquipos();
    }

    componentDidUpdate=(oldProps)=>{
        if(this.props!==oldProps){
            this.cargarEquipos();
        }
        
    }

    render() {
        return (

                <div className="container">
                <div className="card text-center mt-5">
                <div className="card-header">{this.state.equipo.nombre}
                </div>
                <div className="card-body">
                    <img src={this.state.equipo.imagen} style={{width:"70px", height:"100px"}}></img>

                    <h2>Champions: {this.state.equipo.champions}</h2>

                    <p className="card-text">{this.state.equipo.descripcion}</p>

                    <NavLink to={"/jugadores/"+this.state.equipo.idEquipo} className="btn btn-success">Jugadores</NavLink>
                    <NavLink to="/" className="btn btn-primary">Volver</NavLink>
                </div>
                
                </div>
            </div>
            
        )
    }
}
