import React, {Component} from 'react';

class Deporte extends Component{

    seleccionarFavorito=()=>{
        var deporte=this.props.nombre;
        this.props.mostrarFav(deporte);
    };

render(){
    return(<React.Fragment>
            <li style={{color:"blue"}}>
                {this.props.nombre}
                <button onClick={()=>this.seleccionarFavorito()}>
                    Seleccionar favorito
                </button>
            </li>

    </React.Fragment>
    )
    }
}

export default Deporte;