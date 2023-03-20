import React from 'react'
// import de componentes
import ListaProductos from '../components/ListaProductos'
//import de context
import MyContext from '../Context'
//import de hooks
import { useContext } from 'react'


const Carrito = () => {

  const { datosCarrito, setdatosCarrito } = useContext(MyContext)
  /* un log para asegurarnos que estemos guardando las pizzas en el estado global de carrito */
  console.log(datosCarrito)
  return (
    <div>
      <h1>Carrito</h1>
        <ListaProductos />
        
    </div>
  )
}

export default Carrito