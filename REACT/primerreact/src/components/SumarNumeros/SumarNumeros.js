import duro from './assets/images/duro.jpg';

function SumarNumeros(props) {
  const{Numero1,Numero2}=props;

  const Sumar = (n1, n2) => {
    var num1=parseInt(props.Numero1);
    var num2=parseInt(props.Numero2);
    var resultado = num1 + num2;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "green" }}>
        Suma de dos numeros
      </h1>
      <button onClick={() => Sumar(7,3)}>Suma los numeros</button>
      <br/>
      {/* <img src={duro} className='App-logo'></img> */}
    </div>
  );
}

export default SumarNumeros;
