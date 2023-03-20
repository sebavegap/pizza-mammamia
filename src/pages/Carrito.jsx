import React from 'react'
// import de componentes
import ListaProductos from '../components/ListaProductos'
//import de context
import MyContext from '../Context'
//import de hooks
import { useContext } from 'react'

//imports de react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'


const Carrito = () => {

  const { datosCarrito, setdatosCarrito } = useContext(MyContext)
  /* un log para asegurarnos que estemos guardando las pizzas en el estado global de carrito */
  console.log(datosCarrito)
  return (
    <div>
      <Container fluid className='px-4 py-3'>
        {/* center row */}
      <Row>
      <h1>Carrito</h1>
      </Row>
      <Row>
        <ListaProductos />
        </Row>
      </Container>
        
    </div>
  )
}

export default Carrito