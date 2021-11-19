import axios from 'axios';
import {Global} from './../components/Global';

export default class ChampionsService{

    cargarEquipos(){
        return new Promise(function(resolve){
            var request="/api/Equipos";
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var equipos=res.data;
                resolve(equipos);
            })
        })
    }

    cargarJugadores(idequipo){
        return new Promise(function(resolve){
            var request="/api/Jugadores/JugadoresEquipos/"+idequipo;
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var jugadores=res.data;
                resolve(jugadores);
            })
        })
    }

    cargarJugador(idjugador){
        return new Promise(function(resolve){
            var request="/api/Jugadores/"+idjugador;
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var jugador=res.data;
                resolve(jugador);
            })
        })
    }

    borrarApuesta(idapuesta){
        return new Promise(function(resolve){
            var request="/api/Apuestas/"+idapuesta;
            var url=Global.urlfutbol+request;
            axios.delete(url).then(res=>{
                resolve(res)
            })
        })
    }

    realizarApuestas(apuesta){
        return new Promise(function(resolve){
            var request="/api/Apuestas";
            var url=Global.urlfutbol+request;
            axios.post(url,apuesta).then(res=>{
                resolve(res)
            })
        })
    }

    cargarApuestas(){
        return new Promise(function(resolve){
            var request="/api/Apuestas";
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var apuestas=res.data;
                resolve(apuestas);
            })
        })
    }

    cargarDetallesEquipo(id){
        return new Promise(function(resolve){
            var request="/api/Equipos/"+id;
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var equipo=res.data;
                resolve(equipo);
            })
        })
    }

    buscarJugador(nombre){
        return new Promise(function(resolve){
            var request="/api/Jugadores/BuscarJugadores/"+nombre;
            var url=Global.urlfutbol+request;
            axios.get(url).then(res=>{
                var jugadores=res.data;
                resolve(jugadores);
            })
        })
    }

}