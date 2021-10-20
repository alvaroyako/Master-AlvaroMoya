import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodo from './components/Metodos/Metodos';
import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import Matematicas from './components/Matematicas/Matematicas';
import Padre from './components/Padre/Padre';
import MatematicasDibujo from './components/MatematicasDibujo/MatematicasDibujo';
import PadreDibujo from './components/PadreDibujo/PadreDibujo';
import Contador from './components/Contador/Contador';
import Car from './components/Car/Car';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className='App'>
    <Car Marca="Pontiac" Modelo="Firebird" Aceleracion="20" VelocidadMaxima="210"/>
    <Car Marca="Chevrolet" Modelo="PapaMovil" Aceleracion="10" VelocidadMaxima="60"/>
    <Car Marca="Toyota" Modelo="CHR" Aceleracion="30" VelocidadMaxima="200"/>
  </div>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
