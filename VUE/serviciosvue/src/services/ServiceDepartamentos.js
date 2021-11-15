import axios from 'axios';
import {Global} from './../components/Global';

export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise(function(resolve){
            var request="/api/departamentos";
            var url=Global.urldepartamentos+request;
            axios.get(url).then(res=>{
                var departamentos=res.data;
                resolve(departamentos);
            })
        })
    }

    postDepartamento(dep){
        return new Promise(function(resolve){
            var request="/api/departamentos";
            var url=Global.urldepartamentos+request;
            axios.post(url,dep).then(res=>{
                console.log(res)
                resolve();
            })
        })
    }

    buscarDepartamento(id){
        return new Promise(function(resolve){
            var request="/api/departamentos/"+id;
            var url=Global.urldepartamentos+request;
            axios.get(url).then(res=>{
                var departamento=res.data;
                resolve(departamento);
            })
        });
    }

    updateDepartamento(departamento){
        return new Promise (function(resolve){
            var request="/api/departamentos"
            var url=Global.urldepartamentos+request;
            axios.put(url,departamento).then(res=>{
                resolve(res);
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            var request="/api/departamentos/"+id;
            var url=Global.urldepartamentos+request;
            axios.delete(url).then(res=>{
                resolve(res)
            })
        })
    }
}