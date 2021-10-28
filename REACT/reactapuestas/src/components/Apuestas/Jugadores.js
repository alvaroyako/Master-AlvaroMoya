import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'


export default class JugadoresDetalle extends Component {

    state={
        jugadores:[],
        status:true
    }

    cargarJugadores=()=>{
        var request="/api/Jugadores/JugadoresEquipo/"+this.props.id
        var url=Global.urlapuestas+request;
        axios.get(url).then(res=>{
            this.setState({
                jugadores:res.data
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarJugadores();
    }

    render() {


        return (
            <div>
                <NavLink to={"/detallesequipo/"+this.props.id} className="btn btn-success mt-5">Volver</NavLink>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.jugadores.map((j,index)=>{
                    return(
                        <tr key={index}>
                            <td>{j.nombre}</td>
                            <td><img src={j.imagen}/></td>
                            <td><NavLink className="btn btn-danger" to={"/detallesjugadores/"+j.idJugador}>Detalles</NavLink></td>
                        </tr>
                    )
                })}
                    </tbody>
                </table>
            </div>
        )
    }
}
