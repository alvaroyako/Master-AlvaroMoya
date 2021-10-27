import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class EditarDoctor extends Component {
    cajaIdD=React.createRef();
    cajaIdH=React.createRef();
    cajaApellido=React.createRef();
    cajaEspecialidad=React.createRef();
    cajaSalario=React.createRef();

    state={
        status:false
    }

    editarDoctor=(e)=>{
        e.preventDefault();
        var idD=parseInt(this.cajaIdD.current.value);
        var idH=parseInt(this.cajaIdH.current.value);
        var ape=this.cajaApellido.current.value;
        var esp=this.cajaEspecialidad.current.value;
        var sal=parseInt(this.cajaSalario.current.value);

        var doctores={
            idDoctor:idD,
            idHospital:idH,
            apellido :ape,
            especialidad:esp,
            salario:sal
         }

        var request="/api/Doctores";
        var url=Global.urldoctores+request;
        axios.put(url,doctores).then(res=>{
            this.setState({
                status:true,
            })
        })
    }

    render() {
        if(this.state.status==true){
            return (<Redirect to={"/doctores"}/>);
        }
        return (
            <div>
                <h1>Editar datos del doctor {this.props.apellido}</h1>

                <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.editarDoctor}>

                    <label>Id del doctor</label>
                    <input type="number" className="form-control" ref={this.cajaIdD} defaultValue={this.props.iddoctor} disabled/>

                    <label>Id del hospital</label>
                    <input type="number" className="form-control" ref={this.cajaIdH} defaultValue={this.props.idhospital}/>

                    <label>Apellido</label>
                    <input type="text" className="form-control" ref={this.cajaApellido} defaultValue={this.props.apellido}/>

                    <label>Especialidad</label>
                    <input type="text" className="form-control" ref={this.cajaEspecialidad} defaultValue={this.props.especialidad}/>

                    <label>Salario</label>
                    <input type="number" className="form-control" ref={this.cajaSalario} defaultValue={this.props.salario}/>
                    <br></br>

                    <button className="btn btn-success">Editar doctor</button>
                </form>
            </div>
        )
    }
}
