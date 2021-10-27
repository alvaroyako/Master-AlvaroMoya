import axios from 'axios';
import react from 'react';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import { Redirect } from 'react-router';




export default class UpdateDepartamento extends Component {

    cajaNumero=React.createRef();
    cajaNombre=React.createRef();
    cajaLocalidad=React.createRef();
    state={
        departamento:null,
        status:false,
    }

    buscarDepartamento=()=>{
        var id=this.props.iddepartamento;
        var request="/webresources/departamentos/"+id;
        var url=Global.urldepartamentosCRUD+request;
        axios.get(url).then(res=>{
            this.setState({
                departamento: res.data
            });
        });
    }

    modificarDepartamento=(e)=>{
        e.preventDefault();
        var num=parseInt(this.cajaNumero.current.value);
        var nom=this.cajaNombre.current.value;
        var loc=this.cajaLocalidad.current.value;
        var departamento={
            nombre:nom,
            numero:num,
            localidad:loc
        };

        var request="/webresources/departamentos/put";
        var url=Global.urldepartamentosCRUD+request;
        axios.put(url,departamento).then(res=>{
            this.setState({
                status:true
            })
        });
    }

    componentDidMount=()=>{
        this.buscarDepartamento();
    }

    render() {
        if(this.state.status==true){
            return (<Redirect to={"/departamentos"}/>);
        }
        if(this.state.departamento!=null){
            return (
                <div>
                    <h1>Modificar departamento</h1>
                    <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.modificarDepartamento}>
                        <div className="form-group row">
                            <label>Numero</label>
                            <input type="number" className="form-control" ref={this.cajaNumero}
                            defaultValue={this.state.departamento.numero} 
                            
                            disabled/>
                        </div>

                        <div className="form-group row">
                            <label>Nombre</label>
                            <input type="text" className="form-control" ref={this.cajaNombre}
                            defaultValue={this.state.departamento.nombre}/> 
                            
                        </div>

                        <div className="form-group row">
                            <label>Localidad</label>
                            <input type="localidad" className="form-control" ref={this.cajaLocalidad}
                            defaultValue={this.state.departamento.localidad}/> 
                            
                        </div>
                        <br/>
                        <button className="btn btn-info">Modificar</button>


                        <NavLink to={"/departamentos"} className="btn btn-success">Volver al listado</NavLink>

                    </form>
                </div>
            )
        }else{
            return (<h1>Cargando...</h1>)
        }
        
    }
}
