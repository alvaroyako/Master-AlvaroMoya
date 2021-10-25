import { Component } from "react";

class Comic extends Component {

    render() {
        return (<div style={{
            backgroundColor : "#758090"
            , color : "#4ECDC4"
        }}>
            <h1>
                {this.props.Comic.titulo}                
            </h1>
            <h6>{this.props.Comic.descripcion}</h6>
            <img src={this.props.Comic.imagen} />
            <br/>
            <button onClick={ () => {
                this.props.SeleccionarFavorito(this.props.Comic)
            }}>
                Seleccionar favorito
            </button>
            <button onClick={ () => {
                this.props.EliminarComic(this.props.Index)
            }}> 
                Eliminar comic
            </button>
            <button onClick={() => {
                var index = this.props.Index;
                this.props.modificarComic(index);
            }} style={{backgroundColor:"blue", color:"white"}}>
                Modificar Comic
            </button>

        </div>)
    }
}

export default Comic;