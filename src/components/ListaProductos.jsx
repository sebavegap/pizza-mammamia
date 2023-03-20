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
          Pizza {producto.name} - Precio Unitario: {producto.price} - Cantidad: {producto.quantity} - Subtotal: {producto.price * producto.quantity}
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