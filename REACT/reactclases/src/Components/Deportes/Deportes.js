import {Component} from 'react';
import Deporte from './Deporte'

class Deportes extends Component{
    //Hay que crear u deporte favorito en state para poder cambiarlo
    state={
        fav: "",
        deportes:["furbo","baloncesto","polo","tenis","golf","petanca"]
    };

    mostrarFav=(favorito)=>{
        this.setState({
            fav:favorito
        })
    
    };

    insertarDeporte=()=>{
        this.state.deportes.push("LoL");
        this.setState({
            deportes:this.state.deportes
        });
    };

    render(){
        return(<div>
            <h2>Su deporte favorito es: <span style={{color:"red"}}>{this.state.fav}</span></h2>
            <button onClick={()=>this.insertarDeporte()}>
                Insertar deporte
            </button>
            <ul>
            {this.state.deportes.map((depor,index)=>{
                return (<Deporte nombre={depor} key={index} mostrarFav={this.mostrarFav}/>);
            })}
            </ul>

        </div>)
    }
}

export default Deportes;