import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import MenuApuestas from './Apuestas/MenuApuestas'
import Home from './Apuestas/Home'
import EquiposDetalle from './Apuestas/EquiposDetalle'
import Jugadores from './Apuestas/Jugadores'
import DetallesJugadores from './Apuestas/DetallesJugadores'
import TablaApuestas from './Apuestas/TablaApuestas'
import CrearApuesta from './Apuestas/CrearApuesta'

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuApuestas/>
                    <Switch>

                        <Route exact path="/" component={Home}></Route> 

                        <Route exact path="/detallesequipo/:id/:nombre"
                        render={props=>{
                            var id=props.match.params.id;
                            var nom=props.match.params.nombre;
                            return(
                                <EquiposDetalle id={id} nombre={nom}></EquiposDetalle>
                            )
                        }}></Route>

                        <Route exact path="/jugadores/:idequipo"
                        render={props=>{
                            var id=props.match.params.idequipo
                            return(
                                <Jugadores id={id}></Jugadores>
                            )
                        }}></Route>

                        <Route exact path="/detallesjugadores/:idjugador"
                        render={props=>{
                            var id=props.match.params.idjugador
                            return(
                                <DetallesJugadores id={id}></DetallesJugadores>
                            )
                        }}></Route>

                        <Route exact path="/apuestas" component={TablaApuestas}></Route>

                        <Route exact path="/crearapuesta" component={CrearApuesta}></Route>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
