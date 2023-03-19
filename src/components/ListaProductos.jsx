import React from 'react'
//import del contexto
import MyContext from '../Context'

//import de los hooks
import { useContext } from 'react'


const ListaProductos = () => {

  //consumimos el contexto
  const { datosCarrito, setdatosCarrito } = useContext(MyContext)

// si no hay productos en el carrito, mostrar mensaje
if (datosCarrito.length === 0) {
  return (
    <div>
      <h3>No hay productos en el carrito</h3>
    </div>
  )
}


  return (
    <div>ListaProductos</div>
    /* retornamos una lista con los productos en datosCarrito */


  )
}

export default ListaProductos