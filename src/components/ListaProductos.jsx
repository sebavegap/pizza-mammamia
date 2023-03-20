import React from 'react'
//import del contexto
import MyContext from '../Context'

//import de los hooks
import { useContext } from 'react'


const ListaProductos = () => {

  //consumimos el contexto
  const { datosCarrito, setdatosCarrito, precioTotal, setprecioTotal } = useContext(MyContext)




// si no hay productos en el carrito, mostrar mensaje
if (datosCarrito.length === 0) {
  return (
    <div>
      <h3>No hay productos en el carrito</h3>
    </div>
  )
}

//Si hay productos en el carrito, mostrar la lista
else {
  return (
    <div>
    <div>ListaProductos</div>
    {/* retornamos una lista con los productos en datosCarrito  */}
    <ul>
      {/* Se hace un mapeo de las pizzas que han sido agregadas al carrito */}
      {datosCarrito.map((producto) => (

        <li key={producto.id}>
          Pizza {producto.name} - Precio Unitario: {producto.price} - Cantidad: {producto.quantity} - Subtotal: {producto.price * producto.quantity}
        </li>
      ))}
      <li>
        {/* Aqui usamos precioTotal, que es calculado en la barra Navigation */}
        Total de la compra: ${precioTotal}

      </li>
    </ul>
</div>
  )
}
}

export default ListaProductos