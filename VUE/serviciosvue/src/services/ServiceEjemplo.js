import axios from "axios";
import { Global } from "./../components/Global";




export default class ServiceEjemplo{
    getSaludo(nombre){
        return "welcome to my service, "+nombre;
    }

    getPromesa=new Promise(function(resolve,reject){
        var num=0;
        if(num==0){
            resolve("Ok");
        }else{
            reject("Error");
        }
    });

    getPromesaSimple=new Promise(function(resolve){
        resolve("Hola");
    });

    getEmpleado(idempleado){
    return new Promise(function(resolve){
        var request="/api/Empleados/"+idempleado;
        var url=Global.urlempleados+request;
        var empleado={
            apellido:"No soy nadie"
        };
        axios.get(url).then((res)=>{
            empleado=res.data;
            resolve(empleado);
        });
        
    })
    }
        
    }
