function Saludo(props){
    var dato="mas bien buenos dias";
    //var nombre=props.nombre;
    //var edad=props.edad;
    //Inventamos nombre de variable que es un metodo para llmar a alguna accion que tengamos en el padre
    const {nombre, edad, metodoPadre}=props;
    return (
        <div className="App">
                {/* <h1>Hola buenas tardes, {nombre} con edad {edad}</h1>
                <h2>{dato}</h2> */}
                <button onClick={()=>metodoPadre(nombre+" "+edad)}>
                        Llamar al metodo padre
                </button>
        </div>
        );

}

export default Saludo;