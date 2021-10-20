function Matematicas(props){
    const{numero,Triple}=props;

    const Doble=(n)=>{
        var resultado=n*2;
        console.log("El doble es: "+resultado)
    };

    return(
        <div>
            <h1>Soy el numero {numero}</h1>
            <button onClick={() => Doble(numero)}>Calcular doble</button>
             <button onClick={()=>Triple(numero)}>
                        Calcular triple con padre
                </button> 
        </div>
    );
        
    }

    export default Matematicas;