
import './App.css';
import Saludo from './../Saludo/Saludo';


function App() {
  const metodoPadre=(descripcion)=>{
    console.log("Soy "+descripcion);
  }

 
  return (
    <div className="App">
     <Saludo metodoPadre={metodoPadre}></Saludo>
     <Saludo nombre="Lucia" edad="18" metodoPadre={metodoPadre}></Saludo>
     <Saludo nombre="Adrian" edad="21" metodoPadre={metodoPadre}></Saludo>
    </div>
  );
}

export default App;
