import React from 'react'
//import del contexto
import MyContext from '../Context'

//imports de react-bootstrap
import { ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap'

//import de los hooks
import { useContext } from 'react'


const ListaProductos = () => {

  //consumimos el contexto
  const { datosCarrito, setdatosCarrito, precioTotal, setprecioTotal } = useContext(MyContext)

//función que reduce en 1 la cantidad de la pizza segun el id, y la elimina si la cantidad es 0
const reducirPizza = (id) => {
  //se hace un mapeo de los productos en el carrito
  const nuevoCarrito = datosCarrito.map((producto) => {
    //si el id del producto es igual al id del producto que se quiere eliminar, se reduce en 1 la cantidad
    if (producto.id === id) {
      return {
        ...producto,
        //se reduce en 1 la cantidad de la pizza
        quantity: producto.quantity - 1
      }
    }
    //si el id no es el mismo, se retorna el producto sin cambios, asi evitamos que se cambien las otras pizzas
    else {
      return producto
    }
  })
  //se filtran las pizzas que tengan una cantidad mayor a 0
  const filteredCart = nuevoCarrito.filter((producto) => producto.quantity > 0)
  //se actualiza el estado de datosCarrito, esto va a lograr actualizar el carrito y por ende el precio total de Navigation
  setdatosCarrito(filteredCart)
}

//Ahora creamos una función que pueda sumar 1 pizza desde la ventana del carrito, la logica es la misma que para reducir
const aumentarPizza = (id) => {
  //se hace un mapeo de los productos en el carrito
  const nuevoCarrito = datosCarrito.map((producto) => {
    //si el id del producto es igual al id del producto que se quiere eliminar, se reduce en 1 la cantidad
    if (producto.id === id) {
      return {
        ...producto,
        //se reduce en 1 la cantidad de la pizza
        quantity: producto.quantity + 1
      }
    }
    //si el id no es el mismo, se retorna el producto sin cambios, asi evitamos que se cambien las otras pizzas
    else {
      return producto
    }
  })
  //se actualiza el estado de datosCarrito, esto va a lograr actualizar el carrito y por ende el precio total de Navigation
  setdatosCarrito(nuevoCarrito)
}



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
      <Container className=''>
    <h2>Detalles del Pedido</h2>
    {/* retornamos una lista con los productos en datosCarrito  */}
    <ListGroup>
      {/* Se hace un mapeo de las pizzas que han sido agregadas al carrito */}
      {datosCarrito.map((producto) => (

        <ListGroupItem key={producto.id}>
          Pizza {producto.name} - Precio Unitario: {producto.price} - Cantidad:
          <button onClick={() => reducirPizza(producto.id)}>-</button>
           {producto.quantity}
           <button onClick={() => aumentarPizza(producto.id)}>+</button> - Subtotal: {producto.price * producto.quantity}
        </ListGroupItem>
      ))}
      <ListGroupItem>
        {/* Aqui usamos precioTotal, que es calculado en la barra Navigation */}
        <h3>Total de la compra: ${precioTotal}</h3>

      </ListGroupItem>
    </ListGroup>
    </Container>
</div>
  )
}
}

export default ListaProductos