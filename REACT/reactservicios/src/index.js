import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './Components/ServicioCustomers/ServicioCustomers';
import BuscadorCustomer from './Components/BuscadorCustomer/BuscadorCustomer';
import BuscadorCoches from './Components/BuscadorCoches/BuscadorCoches';
import MaestroDetalleDept from './Components/MaestroDetalleDepartamento/MaestroDetalleDept';
import MaestroDetalleEmp from './Components/MaestroDetalleDepartamento/MaestroDetalleEmp';
import DetalleEmpleadoRouter from './Components/RutasEmpleadosParametros/DetalleEmpleadoRouter';
import EmpleadosRouter from './Components/RutasEmpleadosParametros/EmpleadosRouter';
import Router from './Components/Router'


ReactDOM.render(
  <div className='App'>
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
