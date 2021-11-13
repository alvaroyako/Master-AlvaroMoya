import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class NuevoPersonaje extends Component {
    cajaNombre=React.createRef();
    cajaImagen=React.createRef();
    cajaSerie=React.createRef();

    state={
        series:[],
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

    crearPersonaje=(e)=>{
        e.preventDefault();
        var nombre=this.cajaNombre.current.value;
        var img=this.cajaImagen.current.value;
        var serie=parseInt(this.cajaSerie.current.value);
        

        var personaje={
            idPersonaje:0,
            nombre: nombre,
            imagen:img,
            idSerie:serie
        }

        var request="/api/Personajes";
        var url=Global.urlseries+request;
        axios.post(url,personaje).then(res=>{
            this.setState({
                status:true,
                idSerie:serie
            })
        })
    }

    componentDidMount=()=>{
        this.cargarSeries();
    }

    render() {
        if(this.state.status==true){
            return(
                <Redirect to={"/personajes/"+this.state.idSerie}></Redirect>
            )
        }
        return (
            <div>
            <h1>Nuevo Personaje</h1>
            <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.crearPersonaje}>

                <label>Nombre:</label>
                <input className="form-control" type="text" ref={this.cajaNombre} required></input>

                <label>Imagen: </label>
                <input className="form-control"  type="text" ref={this.cajaImagen} required></input>

                <label>Serie: </label>
                <select className="form-control" ref={this.cajaSerie}>

                {this.state.series.map((s,index)=>{
                    return(
                        <option value={s.idSerie} key={index}>{s.nombre}</option>
                    )
                })}

                </select>

                <br/>

                <button className="btn btn-info">Crear personaje</button>
            </form>
        </div>
        )
    }
}
