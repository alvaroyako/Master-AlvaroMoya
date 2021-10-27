import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { Redirect } from 'react-router';

export default class InsertarDoctor extends Component {

    cajaIdH=React.createRef();
    cajaApellido=React.createRef();
    cajaEspecialidad=React.createRef();
    cajaSalario=React.createRef();

    state={
        state:true
    }

    insertarDoctor=(e)=>{
        e.preventDefault();
        var idH=parseInt(this.cajaIdH.current.value);
        var ape=this.cajaApellido.current.value;
        var esp=this.cajaEspecialidad.current.value;
        var sal=parseInt(this.cajaSalario.current.value);

       var doctores={
           idHospital:idH,
           apellido :ape,
           especialidad:esp,
           salario:sal
        }

        var request="/api/Doctores";
        var url=Global.urldoctores+request;
        axios.post(url,doctores).then(res=>{
            this.setState({
                status:true,
            })
        })
    }

    render() {
        if (this.state.status==true){
                return(
                    <Redirect to="/doctores"></Redirect>
                )
        }
        return (
           
            <div>
                <h1>Insertar nuevo doctor</h1>

                <form style={{width:"500px", display:"table", margin:"0 auto"}} onSubmit={this.insertarDoctor}>

                    <label>Id del hospital</label>
                    <input type="number" className="form-control" ref={this.cajaIdH}/>

                    <label>Apellido</label>
                    <input type="text" className="form-control" ref={this.cajaApellido}/>

                    <label>Especialidad</label>
                    <input type="text" className="form-control" ref={this.cajaEspecialidad}/>

                    <label>Salario</label>
                    <input type="number" className="form-control" ref={this.cajaSalario}/>
                    <br></br>

                    <button className="btn btn-success">Insertar doctor</button>
                </form>
            </div>
        )
    }
}
