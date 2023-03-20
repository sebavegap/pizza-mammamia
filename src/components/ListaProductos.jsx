import React from 'react'
//import del contexto
import MyContext from '../Context'

//import de los hooks
import { useContext } from 'react'


const ListaProductos = () => {

  //consumimos el contexto
  const { datosCarrito, setdatosCarrito, precioTotal, setprecioTotal } = useContext(MyContext)

  //función para sumar los precios de los productos en el carrito



// si no hay productos en el carrito, mostrar mensaje
if (datosCarrito.length === 0) {
  return (
    <div>
      <h3>No hay productos en el carrito</h3>
    </div>
  )
}

else {
  return (
    <div>
    <div>ListaProductos</div>
    {/* retornamos una lista con los productos en datosCarrito  */}
    <ul>
      {datosCarrito.map((producto) => (

        <li key={producto.id}>
          Pizza {producto.name} - Precio Unitario: {producto.price} - Cantidad: {producto.quantity} - Subtotal: {producto.price * producto.quantity}
        </li>
      ))}
      <li>
        Total de la compra: 
        {precioTotal}

      </li>
    </ul>
</div>
  )
}
}

export default ListaProductos