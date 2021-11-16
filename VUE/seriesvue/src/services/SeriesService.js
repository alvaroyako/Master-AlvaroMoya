import axios from 'axios';
import {Global} from './../components/Global';

export default class SeriesService{

    cargarSeries(){
        return new Promise(function(resolve){
            var request="/api/Series";
            var url=Global.urlseries+request;
            axios.get(url).then(res=>{
                var series=res.data;
                resolve(series);
            })
        })
    }

    cargarPersonajes(){
        return new Promise(function(resolve){
            var request="/api/Personajes";
            var url=Global.urlseries+request;
            axios.get(url).then(res=>{
                var personajes=res.data;
                resolve(personajes);
            })
        })
    }

    detallesSerie(id){
        return new Promise(function(resolve){
            var request="/api/Series/"+id;
            var url=Global.urlseries+request;
            axios.get(url).then(res=>{
                var series=res.data;
                resolve(series);
            })
        })
    }

    personajesSerie(id){
        return new Promise(function(resolve){
            var request="/api/Series/PersonajesSerie/"+id;
            var url=Global.urlseries+request;
            axios.get(url).then(res=>{
                var personajes=res.data;
                resolve(personajes);
            })
        })
    }

    insertarPersonaje(pj){
        return new Promise(function(resolve){
            var request="/api/Personajes";
            var url=Global.urlseries+request;
            axios.post(url,pj).then(res=>{
                console.log(resolve)
                console.log(res)
            })
        })
    }

    modificarPersonaje(idp,ids){
        return new Promise(function(resolve){
            var request="/api/Personajes/"+idp+"/"+ids;
            var url=Global.urlseries+request;
            axios.put(url).then(res=>{
                console.log(resolve)
                console.log(res)
            })
        })
    }
}