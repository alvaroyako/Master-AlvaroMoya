import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import Contador from './Components/Contador/Contador';
import DibujosComplejos from './Components/DibujosComplejos/DibujosComplejos';
import Deportes from './Components/Deportes/Deportes';
import Numeros from './Components/Numeros/Numeros';
import Comics from './Components/Comics/Comics';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Rutas/Home';
import Cine from './Components/Rutas/Cine';
import Musica from './Components/Rutas/Musica';
import Television from './Components/Rutas/Television';
import Router from './Components/Router';
import MenuRutas from './Components/Rutas/MenuRutas';
import EjemploSimple from './Components/Formulario/EjemploSimple';
import Collatz from './Components/Formulario/Collatz';
import Multiplicar from './Components/Formulario/Multiplicar';
import Multiplicar2 from './Components/Formulario/Multiplicar2';
import SeleccionMultiple from './Components/Formulario/SeleccionMultiple';

ReactDOM.render(
  <div className='App'>
    <Route></Route>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
