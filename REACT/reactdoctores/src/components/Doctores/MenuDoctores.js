import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import '../../App/App.css'
import { NavLink } from 'react-router-dom';

export default class MenuDoctores extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <span className="navbar-brand" href="#">Menu</span>
      
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/doctores">Doctores</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/insertardoctor">Insertar doctores</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
