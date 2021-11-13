import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class ModificarPersonaje extends Component {
    cajaPersonaje=React.createRef();
    cajaSerie=React.createRef();

    state={
        series:[],
        personajes:[],
        status:false,
        idSerie:0
    }

    cargarSeries=()=>{
        var request="/api/Series"
        var url=Global.urlseries+request;
        axios.get(url).then(res=>{
            this.setState({
                series:res.data,
            })
        })
    }

    cargarPersonajes=()=>{
        var request="/api/Personajes"
        var url=Global.urlseries+request;
        axios.get(url).then(res=>{
            this.setState({
                personajes:res.data,
            })
        })
    }

    modificarPersonaje=(e)=>{
        e.preventDefault();
        var idPersonaje=this.cajaPersonaje.current.value;
        var idSerie=this.cajaSerie.current.value;
        console.log(idSerie)
        var request="/api/Personajes/"+idPersonaje+"/"+idSerie;
        var url=Global.urlseries+request;
        axios.put(url).then(res=>{
            this.setState({
                status:true,
                idSerie:idSerie
            })
        })
    }

    componentDidMount=()=>{
        this.cargarSeries();
        this.cargarPersonajes();
    }
    render() {
        if(this.state.status==true){
            return(
                <Redirect to={"/infoseries/"+this.state.idSerie}></Redirect>
            )
        }
        return (
            <div>
                <h1 className="text-primary">Personajes y series</h1>

                <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.modificarPersonaje}>

                <label>Seleccione una serie: </label>
                <select className="form-control" ref={this.cajaSerie}>

                 {this.state.series.map((s,index)=>{
                    return(
                        <option value={s.idSerie} key={index}>{s.nombre}</option>
                    )
                })} 

                </select>

                <label>Seleccione un personaje: </label>
                <select className="form-control" ref={this.cajaPersonaje}>

                 {this.state.personajes.map((p,index)=>{
                    return(
                        <option value={p.idPersonaje} key={index}>{p.nombre}</option>
                    )
                })} 

                </select>

                <br/>

                <button className="btn btn-info">Modificar personaje</button>
            </form>
            </div>
        )
    }
}
