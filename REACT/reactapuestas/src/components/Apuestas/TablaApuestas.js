import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global';

export default class TablaApuestas extends Component {
    state={
        apuestas:[],
        status:true
    }

    cargarApuestas=()=>{
        var request="/api/Apuestas";
        var url=Global.urlapuestas+request;
        axios.get(url).then(res=>{
            this.setState({
                apuestas:res.data
            })
        });
    }

    componentDidMount=()=>{
        this.cargarApuestas();
    }

    render() {
        return (
            <div>
                <NavLink className="btn btn-danger mt-5" to="/crearapuesta">Realizar apuesta</NavLink>

                <h1 className="text-danger">Local: Real Madrid, Visitante: Atletico de madrid</h1>

                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Resultado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.apuestas.map((a,index)=>{
                    return(
                        <tr key={index}>
                            <td>{a.usuario}</td>
                            <td>{a.resultado}</td>
                            <td>{a.fecha}</td>
                        </tr>
                    )
                })}
                    </tbody>
                </table>
            </div>
        )
    }
}
