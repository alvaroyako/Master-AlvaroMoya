import React, {useState} from 'react';

function Contador(props){
    const {Inicio}=props;
    const [Numero, setNumero]=useState(parseInt(Inicio));

    const sumarContador=()=>{
        setNumero(Numero +1)
        
    }

    const restarContador=()=>{
        setNumero(Numero -1);
    }
    return(
        <div className='App'>
            <h1>Ejemplo State React</h1>
            <h2 style={{color:"blue"}}>Valor del contador: {Numero}</h2>
            <button onClick={()=>sumarContador()}>Sumar contador</button>
            <button onClick={()=>restarContador()}>Restar contador</button>
        </div>

    );
}

export default Contador