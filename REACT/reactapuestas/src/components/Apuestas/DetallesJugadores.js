import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { NavLink } from 'react-router-dom';

export default class DetallesJugadores extends Component {
    state={
        jugador:{},
        status:false
    }

    cargarJugador=()=>{
        var request="/api/Jugadores/"+this.props.id
        var url=Global.urlapuestas+request;
        axios.get(url).then(res=>{
        
            this.setState({
                jugador:res.data
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarJugador();
    }

    render() {
        return (
            <div className="container">
                <div className="card text-center mt-5">
                <div className="card-header">{this.state.jugador.nombre}
                </div>
                <div className="card-body">
                    <img src={this.state.jugador.imagen}></img>
                    <h1 className="card-text">{this.state.jugador.posicion}</h1>
                    <p className="card-text">Fecha Nacimiento: {this.state.jugador.fechaNacimiento}</p>
                    <p className="card-text">Pais: {this.state.jugador.pais}</p>
                    <NavLink to={"/jugadores/"+this.state.jugador.idEquipo} className="btn btn-success">Jugadores</NavLink>
                </div>
                
                </div>
            </div>
        )
    }
}
