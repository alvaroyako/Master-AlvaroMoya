function Metodos() {
  var ejemplo = "Soy una variable de ejemplo";
  var estilofeo = {
    color: "white",
    backgroundColor: "fuchsia",
  };

  const mostrarMensaje = () => {
    console.log("Has pulsado un boton");
    ejemplo = "He cambiado con el click";
    console.log(ejemplo);
  };

  const doblenumero = (numero) => {
    var doble = numero * 2;
    console.log(doble);
  };
  return (
    <div>
      <h1 style={estilofeo}>Ejemplo de metodos React</h1>
      <h2 style={{ color: "red" }}>{ejemplo}</h2>
      <button onClick={() => mostrarMensaje()}>Mensaje</button>
      <button onClick={() => doblenumero(7)}>Numero doble</button>
    </div>
  );
}

export default Metodos;
