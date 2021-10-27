import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCoches extends Component {
    urlcoches=Global.urlcoches;
    busquedaRef=React.createRef();
    state={
        coches:[],
        buscado:[],
        status:false,
        status2:false
    }

    cargarCoches=()=>{
        var request="webresources/coches";
        axios.get(this.urlcoches+request).then(res=>{
            this.setState({
                coches:res.data,
                status:true
            });
        });
    }

    buscarCoche=(e)=>{
        e.preventDefault();
        this.setState({
            buscado:[]
            
        })
        var request="webresources/coches";
        var busqueda=this.busquedaRef.current.value;
        axios.get(this.urlcoches+request).then(res=>{
             for(var i=0;i<res.data.length;i++){
                var cocheBuscado=res.data[i].marca;
                if(cocheBuscado===busqueda){
                    this.state.buscado.push(res.data[i]);
                    
                    
                }
             }
             this.setState({
                buscado:this.state.buscado,
                status2:true
            })
            console.log(this.state.buscado)
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador coches</h1>
                <h2>Cargar coches</h2>
                <button onClick={this.cargarCoches}>Cargar coches</button>
                {this.state.status && (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.coches.map((coche,index)=>{
                    return(
                        
                        <tr key={index}>
                            <td>{coche.marca}</td>
                            <td>{coche.modelo}</td>
                            <td>{coche.conductor}</td>
                            <td><img src={coche.imagen} style={{height:"100px", width:"100px"}}/></td>
                        </tr>
                    );
                })}
                    </tbody>
                </table>
                )}


                <hr></hr>


                <h2>Buscar coches</h2>
                <form onSubmit={this.buscarCoche}>
                    <input type="text" ref={this.busquedaRef}></input>
                    <button>Buscar coche</button>
                </form>
                {this.state.status2 && (
                    <table border="1" cellPadding="10" >
                         <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    
                   
                   <tbody>
                   {this.state.buscado.map((coche,index)=>{
                       return  (
                      <tr key={index}>
                            <td>{coche.marca}</td>
                            <td>{coche.modelo}</td>
                            <td>{coche.conductor}</td>
                            <td><img src={coche.imagen} style={{height:"100px", width:"100px"}}/></td>
                        </tr>)
                         })}
                    </tbody>
                   
                    </table>
                )}
            </div>
        )
    }
}
