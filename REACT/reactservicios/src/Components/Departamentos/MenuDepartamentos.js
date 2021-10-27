import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class MenuDepartamentos extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <span className="navbar-brand" href="#">Menu</span>
      
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/departamentos">Departamentos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createdepartamento">Nuevo Departamento</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
