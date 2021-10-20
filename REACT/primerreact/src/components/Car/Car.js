import React, {useState} from 'react'

function Car(props){
    var coche={
        marca:props.Marca,
        modelo:props.Modelo,
        aceleracion:parseInt(props.Aceleracion),
        velocidadMaxima:parseInt(props.VelocidadMaxima)
    };

    

    const comprobarEstado=()=>{
        if(estado==true){
            return <span style={{color:"green"}}>Arrancado</span>
        }else{
            return (<span style={{color:"red"}}>Parado</span>);
        }
    };

    const acelerarCoche=()=>{
        if (estado==false){
            alert("El coche esta parado");
            setVelocidad(0);
        }else{
            if(velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);
            }else{
                setVelocidad(velocidad+coche.aceleracion)
            }
        }
    }

    const[estado,setEstado]=useState(false);

    const[velocidad,setVelocidad]=useState(0);

    return(
        
        <div>
            
            <h1 style={{color:"fuchsia"}}>
                Marca: {coche.marca}, Modelo: {coche.modelo}
            </h1>

            <h2>El coche esta {comprobarEstado()}</h2>

            <h2 style={{color:"blue"}}>Velocidad actual: {velocidad} km/hora</h2>

            <button onClick={()=>setEstado(!estado)}>
                Arrancar/Detener
            </button>

            <button onClick={()=>acelerarCoche()}>
                Acelerar
            </button>
        </div>
    );
}

export default Car;