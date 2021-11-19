import axios from 'axios';
import {Global} from './../components/Global';

export default class PeliculasService{

    getGeneros(){
        return new Promise(function(resolve){
            var request="/api/Generos";
            var url=Global.urlpeliculas+request;
            axios.get(url).then(res=>{
                var generos=res.data;
                resolve(generos);
            })
        })
    }

    getNacionalidad(){
        return new Promise(function(resolve){
            var request="/api/Nacionalidades";
            var url=Global.urlpeliculas+request;
            axios.get(url).then(res=>{
                var nacionalidades=res.data;
                resolve(nacionalidades);
            })
        })
    }

    getPeliculaGenero(idgenero){
        return new Promise(function(resolve){
            var request="/api/Peliculas/PeliculasGenero/"+idgenero;
            var url=Global.urlpeliculas+request;
            axios.get(url).then(res=>{
                var generos=res.data;
                resolve(generos);
            })
        })
    }

    getPeliculaNacionalidad(idnacionalidad){
        return new Promise(function(resolve){
            var request="/api/Peliculas/PeliculasNacionalidad/"+idnacionalidad;
            var url=Global.urlpeliculas+request;
            axios.get(url).then(res=>{
                var nacionalidades=res.data;
                resolve(nacionalidades);
            })
        })
    }

    

}