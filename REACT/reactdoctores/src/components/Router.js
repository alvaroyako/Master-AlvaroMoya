import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditarDoctor from './Doctores/EditarDoctor';
import EliminarDoctor from './Doctores/EliminarDoctor';
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

                        <Route exact path="/editardoctor/:iddoctor/:idhospital/:apellido/:especialidad/:salario"
                        render={props=>{
                            var idd=props.match.params.iddoctor;
                            var idh=props.match.params.idhospital;
                            var ape=props.match.params.apellido;
                            var esp=props.match.params.especialidad;
                            var sal=props.match.params.salario;

                            return(
                                <EditarDoctor iddoctor={idd} idhospital={idh} apellido={ape} especialidad={esp} salario={sal}/>
                            )
                        }}/>

                        <Route exact path="/deletedoctor/:iddoctor/:apellido"
                        render={props=>{
                            var id=props.match.params.iddoctor;
                            var ape=props.match.params.apellido;
                            return(
                                <EliminarDoctor iddoctor={id} apellido={ape}/>
                            )
                        }}/>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
