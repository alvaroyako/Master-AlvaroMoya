import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import Global from '../../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuSeries extends Component {

    state={
        series:[]
    }

    cargarSeries=()=>{
        var request="/api/Series"
        var url=Global.urlseries+request;
        axios.get(url).then(res=>{
            this.setState({
                series:res.data
            })
        })
    }

        componentDidMount=()=>{
            this.cargarSeries();
        }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Tenth navbar example">
<div className="container-fluid">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarsExample08">
  <ul className="navbar-nav">
      
    <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/insertarpersonaje">Nuevo personaje</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/modificarpersonaje">Modificar personaje</NavLink>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
      <ul className="dropdown-menu" aria-labelledby="dropdown08">

      {this.state.series.map((s,index)=>{
                    return(
                        <li key={index}><NavLink to={"/infoseries/"+s.idSerie} className="dropdown-item bg-transparent text-body" >{s.nombre}</NavLink></li>
                    )
                })}

      </ul>
    </li>
  </ul>
</div>
</div>
</nav>

      </div>
        )
    }
}
