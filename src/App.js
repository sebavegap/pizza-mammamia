//import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import de react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import de componentes de bootstrap
import { Container } from "react-bootstrap";

//import de componentes
import Navigation from "./components/Navigation";

//import de componentes de las pages
import Inicio from "./pages/Inicio";
import Detalle from "./pages/Detalle";
import Carrito from "./pages/Carrito";


//import del context
import MyContext from "./Context";

//import de hooks
import { useState, useEffect } from "react";

//import del archivo con las pizzas (previamente en JSON)
import { pizzas } from "./pizzas.js";


function App() {

//proveemos el contexto con un estado inicial que consume los datos de pizzas
  const [datosPizzas, setdatosPizzas] = useState(pizzas);
  console.log(datosPizzas);
  //Creamos otro estado global que usaremos para guardar el nuevo arreglo con las pizzas para el carrito
  const [datoscarrito, setdatosCarrito] = useState([]);


  return (
    <MyContext.Provider value={{ datosPizzas, setdatosPizzas, datoscarrito, setdatosCarrito }}>
      <BrowserRouter>
    <div className="App">
      
      <Navigation />
      <div className='contenedor-principal'>
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pizza/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>

      </div>
    </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
