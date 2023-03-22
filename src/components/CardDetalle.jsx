import React from 'react'
import MyContext from '../Context'
//imnport de componentes de bootstrap
import { Card, Container } from 'react-bootstrap'

//import de hooks
import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const CardDetalle = () => {
  //usamos el parametro de la URL para encontrar el id de la pizza y desplegar
  const { id } = useParams()
  //consumimos el contexto
  const { datosPizzas, datosCarrito, setdatosCarrito } = useContext(MyContext)

  //encontrar el id de la URL en el array de pizzas
  const pizzaDetalle = datosPizzas.find((pizza) => pizza.id === id)


//función para agregar la pizza seleccionada al estado global datosCarrito según la key del objeto
const agregarCarrito = (e) => {

  //buscamos el objeto segun el id comparandolo con el valor del boton
  const pizzaSeleccionada = datosPizzas.find((pizza) => pizza.id === e.target.value)
  //si la pizza ya está en el carrito con el mismo id, se le suma 1 al quantity
  if (datosCarrito.find((pizza) => pizza.id === pizzaSeleccionada.id)) {
      //creamos la variable newCarrito para guardar el nuevo array al que le incluiremos el quantity
      const newCarrito = datosCarrito.map((pizza) => {
          //si el id de la pizza es igual al id de la pizza seleccionada, se le suma 1 al quantity
          if (pizza.id === pizzaSeleccionada.id) {
              return { ...pizza, quantity: pizza.quantity + 1 }
          }
          return pizza
      })
      //se setea el estado con el nuevo array
      setdatosCarrito(newCarrito)

  }

  else {
      //se setea el estado con el nuevo array, se agrega "quantity" y se suma 1
      setdatosCarrito([...datosCarrito, { ...pizzaSeleccionada, quantity: 1 }])
      console.log(pizzaSeleccionada)

  }
}


  return (
    <div>
      <Container fluid className='px-4 py-3 d-flex flex-wrap justify-content-center'>
        <h1>Detalle de la pizza</h1>
      </Container>
      <Container style={{ width: 'auto' }} className='d-flex flex-wrap justify-content-center'>

        {/* card de bootstrap con los datos de la pizza encontrada */}
        <Card style={{ width: "auto" }} className='mb-3 h-100' key={pizzaDetalle.id}>
          <Card.Img variant="top" className='w-100 h-auto' src={pizzaDetalle.img} />
          <Card.Body>
            <Card.Title>
              {/* parse del nombre para añadir mayuscula */}
              {pizzaDetalle.name.charAt(0).toUpperCase() + pizzaDetalle.name.slice(1)}
            </Card.Title>
            <ul>
              {/* mostramos los datos segun su posición en el array */}
              <li>{pizzaDetalle.ingredients[0]}</li>
              <li>{pizzaDetalle.ingredients[1]}</li>
              <li>{pizzaDetalle.ingredients[2]}</li>
              <li>{pizzaDetalle.ingredients[3]}</li>
            </ul>
            <br />
            <Card.Text>

              {/*   formateo de figura.precio a moneda chilena con Intl.NumberFormat */}
              Precio:{" "}

              {new Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP"
              })
                .format(pizzaDetalle.price
                )}
                {/* boton para agregar la pizza seleccionada al estadoglobal datosCarrito según la key*/}
                <button className="btn btn-primary" value={pizzaDetalle.id} onClick={agregarCarrito}>Agregar al carrito</button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

    </div>
  )
}

export default CardDetalle