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
        {/* sumamos los precios de los productos en el carrito */}
        {/* .reduce es como map, llama a cada elemento del array, pasando el valor de la operación del elemento anterior */}
        {/* En este caso a acc se le suma la operación de precios y cantidades. El valor inicial es 0. */}
        Total de la compra: {
            /* seteamos el precioTotal */
            setprecioTotal(datosCarrito.reduce((acc, producto) => {
              return acc + (producto.price * producto.quantity)
            }
              , 0))
              /* mostramos el precioTotal */
        }
        {precioTotal}

      </li>
    </ul>
</div>
  )
}
}

export default ListaProductos