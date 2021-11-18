import axios from 'axios';
import {Global} from './../components/Global';

export default class ChampionsService{

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