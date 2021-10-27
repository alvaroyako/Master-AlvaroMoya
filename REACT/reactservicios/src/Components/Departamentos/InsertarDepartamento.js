import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';


export default class InsertarDepartamento extends Component {

    cajaNumeroRef=React.createRef();
    cajaNombreRef=React.createRef();
    cajaLocalidadRef=React.createRef();

    state={
        mensaje: "",
        status: false
    }

    insertarDepartamento=(e)=>{
        e.preventDefault();
        var num=parseInt(this.cajaNumeroRef.current.value);
        var nom=this.cajaNombreRef.current.value;
        var loc=this.cajaLocalidadRef.current.value;

        var departamento={
            numero: num,
            nombre: nom,
            localidad:loc
        }

        var request="/webresources/departamentos/post";
        var url=Global.urldepartamentosCRUD+request;
        axios.post(url, departamento).then(res=>{
            this.setState({
                mensaje:"Departamento insertado con exito",
                status:true
            })
        });
    }

    render() {
        if(this.state.status==true){
                return(
                    <Redirect to="/departamentos"></Redirect>
                );
        }
        return (
            
            <div>
                <h1>Nuevo Departamento</h1>
                <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.insertarDepartamento}>
                    <div className="form-group row">
                        <label>Numero</label>
                        <input type="number" className="form-control" ref={this.cajaNumeroRef} required></input >
                    </div>
                    <div className="form-group row">
                    <label>Nombre</label>
                        <input type="text" className="form-control" ref={this.cajaNombreRef} required></input>
                    </div>
                    <div className="form-group row">
                    <label>Localidad</label>
                        <input type="text" className="form-control" ref={this.cajaLocalidadRef} required></input>
                    </div>
                    <br/>
                    <button className="btn btn-info">Insertar Departamento</button>
                </form>
                <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
