import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class CrearApuesta extends Component {

    cajaUser=React.createRef();
    cajaMadrid=React.createRef();
    cajaAtleti=React.createRef();
    cajaFecha=React.createRef();

    state={
        status:false
    }

    crearApuesta=(e)=>{
        e.preventDefault();
        var user=this.cajaUser.current.value;
        var madrid=this.cajaMadrid.current.value;
        var atleti=this.cajaAtleti.current.value;
        var fecha=this.cajaFecha.current.value;

        var resul=madrid+"-"+atleti;

        var apuesta={
            usuario: user,
            resultado:resul,
            fecha:fecha
        }

        var request="/api/Apuestas";
        var url=Global.urlapuestas+request;
        axios.post(url,apuesta).then(res=>{
            this.setState({
                status:true
            })
        })
    }
    render() {
        if(this.state.status==true){
            return(
                <Redirect to="/apuestas"></Redirect>
            )
        }
        return (
            <div>
                <h1>Nueva apuesta</h1>
                <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.crearApuesta}>

                    <label>Usuario:</label>
                    <input className="form-control" type="text" ref={this.cajaUser}></input>

                    <label>Real Madrid</label>
                    <input className="form-control"  type="number" ref={this.cajaMadrid}></input>

                    <label>Atletico de Madrid</label>
                    <input className="form-control"  type="number" ref={this.cajaAtleti}></input>

                    <label>Fecha</label>
                    <input className="form-control"  type="text" ref={this.cajaFecha}></input>

                    <br/>

                    <button className="btn btn-info">Crear apuesta</button>
                </form>
            </div>
        )
    }
}
