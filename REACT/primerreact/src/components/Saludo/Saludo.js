function Saludo(props){
    var dato="mas bien buenos dias";
    //var nombre=props.nombre;
    //var edad=props.edad;
    const {nombre, edad}=props;
    return (
        <div className="App">
                <h1>Hola buenas tardes, {nombre} con edad {edad}</h1>
                <h2>{dato}</h2>
        </div>
        );

}

export default Saludo;