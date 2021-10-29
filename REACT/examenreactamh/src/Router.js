import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from './components/series/Home'
import MenuSeries from './components/series/MenuSeries'
import ModificarPersonaje from './components/series/ModificarPersonaje'
import NuevoPersonaje from './components/series/NuevoPersonaje'
import Personajes from './components/series/Personajes'
import Serie from './components/series/Serie'

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuSeries/>
                    <Switch>
                        
                    <Route exact path="/" component={Home}></Route> 

                    <Route exact path="/infoseries/:id"
                        render={props=>{
                            var id=props.match.params.id;
                            return(
                                <Serie id={id}></Serie>
                            )
                        }}></Route>

                    <Route exact path="/personajes/:idserie"
                        render={props=>{
                            var id=props.match.params.idserie
                            return(
                                <Personajes id={id}></Personajes>
                            )
                        }}></Route>

                    <Route exact path="/insertarpersonaje" component={NuevoPersonaje}></Route>

                    <Route exact path="/modificarpersonaje" component={ModificarPersonaje}></Route>

                    

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
