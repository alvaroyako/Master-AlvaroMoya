import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodo from './components/Metodos/Metodos';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Metodo/>
    <Saludo nombre="Alumno" edad="23"/>
    <Saludo nombre="Lucia" edad="18"/>
  </div>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
