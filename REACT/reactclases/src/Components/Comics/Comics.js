import { Component } from "react";
import Comic from "./Comic";
import './Comics.css';

class Comics extends Component {

    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Murcielago"
            }
        ]
        , favorito : null
    }

    selecionarFavorito = (comic) => {
        this.setState({
            favorito : comic
        })
    }

    eliminarComic = (index) =>{
        //splice() recibe dos parametros - 1) indice a eliminar  2) numero de elementos a eliminar
        this.state.comics.splice(index,1);
        this.setState({
            comics : this.state.comics
        })
    }
    
    insertarComic=()=>{
      var titulo=document.getElementById("cajaTitulo").value;
      var imagen=document.getElementById("cajaImagen").value;
      var descripcion=document.getElementById("cajaDescripcion").value;
      var comic={
        titulo:titulo,
        imagen:imagen,
        descripcion:descripcion
      };
      this.state.comics.push(comic);
      this.setState({
        comics:this.state.comics
      })
    };

    modificarComic=(index)=>{
      var titulo=document.getElementById("cajaTitulo").value;
      var imagen=document.getElementById("cajaImagen").value;
      var descripcion=document.getElementById("cajaDescripcion").value;
      var comic=this.state.comics[index];
      comic.titulo=titulo;
      comic.imagen=imagen;
      comic.descripcion=descripcion;
      this.setState({
                comics: this.state.comics
              });
    }

    render () {
        return(<div style={{
            backgroundColor : "#556270"
            , color : "#FFFFFF"
            , height : "auto"
        }}>            
            <h1>Ejemplos colecciones comics</h1>
            <label>Titulo</label>
            <input type="text" id="cajaTitulo"/><br/>
            <label>Imagen</label>
            <input type="text" id="cajaImagen"/><br/>
            <label>Descripcion</label>
            <input type="text" id="cajaDescripcion"/><br/>
            <button onClick={this.insertarComic}>
              Nuevo Comic
            </button>
            <hr />
                {this.state.favorito && 
                    (<div style={{backgroundColor : "#FFFFFF" , color : "#333333"}}>
                        <h1>{this.state.favorito.titulo}</h1>
                        <img src={this.state.favorito.imagen}/>
                    </div>)}
            <hr />
            
            {this.state.comics.map((comic, index) => {
                return(<Comic Comic={comic} key={index}
                SeleccionarFavorito={this.selecionarFavorito}
                Index={index}
                EliminarComic={this.eliminarComic}
                modificarComic={this.modificarComic}/>);
            })}
            
        </div>)
    }
}

export default Comics;