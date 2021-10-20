import React, {useState} from 'react';

function MatematicasDibujo(props){
    const {numero1,numero2,multiplicar,solucion}=props;
    const [resultado, setNumero]=useState(0);

    const Suma=(numero1,numero2)=>{
        var resultado=parseInt(numero1)+parseInt(numero2);
        setNumero(resultado);
    }

    return(
        <div className='App'>
            <h1>Soy el numero {numero1}, y yo soy {numero2}</h1>
            <button onClick={()=>Suma(numero1,numero2)}> Sumar numeros </button>
            <button onClick={()=>multiplicar(numero1,numero2)}>Multiplicar numeros</button>
            <h2>El resultado de la suma es: {resultado}</h2>
            

        </div>
    );
}

export default MatematicasDibujo;