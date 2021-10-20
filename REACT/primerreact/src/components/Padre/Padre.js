import Matematicas from './../Matematicas/Matematicas';

function Padre(){

    const Triple=(numero)=>{
        var resultado=numero*3;
        console.log("El triple es: "+resultado)
    }
    return(
        <div className='App'>
            <Matematicas numero="5" Triple={Triple}/>
            <Matematicas numero="6" Triple={Triple}/>
            <Matematicas numero="7" Triple={Triple}/>
        </div>
    );
}

export default Padre;