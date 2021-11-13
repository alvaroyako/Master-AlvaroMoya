import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global'
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {
    state={
        serie:{},
        status:false
    }

    cargarSerie=()=>{
        var request="/api/Series/"+this.props.id
        var url=Global.urlseries+request;
        axios.get(url).then(res=>{
        
            this.setState({
                serie:res.data
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarSerie();
    }

    componentDidUpdate=(oldProps)=>{
        if(this.props!==oldProps){
            this.cargarSerie();
        }
        
    }
    render() {
      
        return (
            <div className="container">
            <div className="card text-center mt-5">
            <div className="card-header">
                <img src={this.state.serie.imagen} style={{width:"400px", height:"300px"}}/>
                
            </div>
            <div className="card-body">

                <h1 className="card-text">{this.state.serie.nombre}</h1>

                <p className="card-text">IMDB: {this.state.serie.puntuacion} </p>

            </div>

            <div className="card-footer">
            <NavLink to={"/personajes/"+this.state.serie.idSerie} className="btn btn-success">Personajes</NavLink>
            </div>
            
            </div>
             
        </div>
        )
    }
}
