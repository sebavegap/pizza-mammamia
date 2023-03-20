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
  //Creamos otro estado global que usaremos para guardar el nuevo arreglo con las pizzas para el carrito
  const [datosCarrito, setdatosCarrito] = useState([]);
  //creamos un contexto para guardar el estado del precio total de productos en el carrito
  const [precioTotal, setprecioTotal] = useState(0);


  return (
    /* Estamos usando provider para enviar los estados globales y sus setters a los diversos componentes */
    <MyContext.Provider value={{ datosPizzas, setdatosPizzas, datosCarrito, setdatosCarrito, precioTotal, setprecioTotal }}>
      <BrowserRouter>
    <div className="App">
     
      <Navigation />
      <div className='contenedor-principal'>
    {/* rutas de navegación con las pasginas y sus componentes en "pages" */}
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
