import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'
import Swal from 'sweetalert2'

export default class TablaDoctores extends Component {

    state={
        doctores:[],
        status:false
    }

    cargarDoctores=()=>{
        var request="/api/Doctores";
        var url=Global.urldoctores+request;
        axios.get(url).then(res=>{
            this.setState({
                doctores:res.data,
                status:true
            })
        })
    }


    componentDidMount=()=>{
        this.cargarDoctores();
    }

    render() {
        if(this.state.status==true){
        return (
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Id Hospital</th>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doc,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{doc.idDoctor}</td>
                                    <td>{doc.idHospital}</td>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.especialidad}</td>
                                    <td>{doc.salario}</td>
                                    <td>

                                        <NavLink to={"/editardoctor/"+doc.idDoctor+"/"+doc.idHospital+"/"+doc.apellido+"/"+doc.especialidad+"/"+doc.salario} className="btn btn-info">Editar</NavLink>
                                        <NavLink to={"/deletedoctor/"+doc.idDoctor+"/"+doc.apellido} className="btn btn-danger">Eliminar</NavLink>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }else if(this.state.status==false){
        return(<h1>Cargando registros...</h1>);
    }
}
}
