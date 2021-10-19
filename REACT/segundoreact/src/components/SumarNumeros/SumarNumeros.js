import duro from './assets/images/duro.jpg';

function SumarNumeros() {

  const Sumar = (n1, n2) => {
    var resultado = n1 + n2;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "green" }}>
        Suma de dos numeros
      </h1>
      <button onClick={() => Sumar(7,3)}>Suma los numeros</button>
      <br/>
      <img src={duro} className='App-logo'></img>
    </div>
  );
}

export default SumarNumeros;
