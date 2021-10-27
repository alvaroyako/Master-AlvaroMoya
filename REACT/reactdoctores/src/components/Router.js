import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditarDoctor from './Doctores/EditarDoctor';
import InsertarDoctor from './Doctores/InsertarDoctor';
import MenuDoctores from './Doctores/MenuDoctores';
import TablaDoctores from './Doctores/TablaDoctores';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuDoctores/>
                    <Switch>

                        <Route exact path="/doctores" component={TablaDoctores}></Route>

                        <Route exact path="/insertardoctor" component={InsertarDoctor}/>

                        <Route exact path="/editardoctor/:idhospital/:apellido/:especialidad/:salario"
                        render={props=>{
                            var id=props.match.params.idhospital;
                            var ape=props.match.params.apellido;
                            var esp=props.match.params.especialidad;
                            var sal=props.match.params.salario;

                            return(
                                <EditarDoctor id={id} apellido={ape} especialidad={esp} salario={sal}/>
                            )
                        }}/>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
