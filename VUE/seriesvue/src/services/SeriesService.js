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
}