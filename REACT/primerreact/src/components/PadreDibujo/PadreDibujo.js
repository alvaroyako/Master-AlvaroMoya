import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";
import React, {useState} from 'react';

function PadreDibujo(){
    const [solucion, setNumero]=useState(0);

    const Multiplicar=(numero1,numero2)=>{
        var solucion=numero1*numero2;
        setNumero(solucion);
    }

return(
    <div>
        <MatematicasDibujo numero1="10" numero2="3"  multiplicar={Multiplicar}></MatematicasDibujo>
        <MatematicasDibujo numero1="5" numero2="3"  multiplicar={Multiplicar}></MatematicasDibujo>
        <MatematicasDibujo numero1="2" numero2="10"  multiplicar={Multiplicar}></MatematicasDibujo>
        <h2>La multiplicacion es: {solucion}</h2>
    </div>
);

}

export default PadreDibujo;