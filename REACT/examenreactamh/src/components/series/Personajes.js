import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'

export default class Personajes extends Component {

    state={
        personajes:[],
        status:true
    }

    cargarPersonajes=()=>{
        var request="/api/Series/PersonajesSerie/"+this.props.id
        var url=Global.urlseries+request;
        axios.get(url).then(res=>{
            this.setState({
                personajes:res.data
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarPersonajes();
    }
    render() {
        return (
            <div>
                <NavLink className="btn btn-danger" to={"/infoseries/"+this.props.id+"/"+this.props.nombre}>
                Volver
                </NavLink>
                 <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personajes.map((p,index)=>{
                    return(
                        <tr key={index}>
                            <td>{p.nombre}</td>
                            <td><img src={p.imagen} style={{width:"200px", height:"150px"}}/></td>
                        </tr>
                    )
                })}
                    </tbody>
                </table>
            </div>
        )
    }
}
