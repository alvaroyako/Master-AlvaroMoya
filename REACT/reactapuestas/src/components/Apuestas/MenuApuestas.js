import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import champions from '../../assets/img/champions.png'
import Global from '../../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuApuestas extends Component {

    state={
        equipos:[]
    }

    cargarEquipos=()=>{
        var request="/api/Equipos"
        var url=Global.urlapuestas+request;
        axios.get(url).then(res=>{
            this.setState({
                equipos:res.data
            })
        })
    }

        componentDidMount=()=>{
            this.cargarEquipos();
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
                <img  src={champions} style={{width:"60px",height:"60px"}} href="#"></img>
          </li>
          <li className="nav-item">
            <span className="nav-link" aria-current="page" href="#">Champions</span>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown08">

                {this.state.equipos.map((e,index)=>{
                    return(
                        <li key={index}><NavLink className="dropdown-item bg-transparent text-body" to={"/detallesequipo/"+e.idEquipo+"/"+e.nombre}>{e.nombre}</NavLink></li>
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
