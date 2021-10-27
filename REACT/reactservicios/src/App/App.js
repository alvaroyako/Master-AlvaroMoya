import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import MenuDepartamentos from '../Components/Departamentos/MenuDepartamentos';
import TablaDepartamentos from '../Components/Departamentos/TablaDepartamentos';
import Router from '../Components/Router';
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router></Router>
      </div>
    )
  }
}

