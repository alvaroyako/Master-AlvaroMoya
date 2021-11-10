import axios from "axios";
import { Global } from "./../components/Global";

export default class ServicioEmpleados{
    
    cargarOficios() {
        return new Promise (function(resolve){
            var request = "api/Empleados/oficios";
        var url = Global.urlempleados + request;
        var oficio={};
        axios.get(url).then((res) => {
          oficio = res.data;
          console.log(oficio)
          resolve(oficio)
        });
        })
        
      }

      cargarEmpleados(oficio) {
          return new Promise(function(resolve){
        var request = "api/Empleados/EmpleadosOficio/" + oficio;
        var url = Global.urlempleados + request;
        var empleados=[];
        axios.get(url).then((res) => {
          empleados = res.data;
          console.log(res.data)
          console.log(empleados)
          resolve(empleados)
        });
          })
        
      }
    
        
    }
