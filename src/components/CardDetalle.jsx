import React from 'react'
import MyContext from '../Context'
//imnport de componentes de bootstrap
import { Card } from 'react-bootstrap'

//import de hooks
import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const CardDetalle = () => {
  const { id } = useParams()
//consumimos el contexto
  const { datosPizzas } = useContext(MyContext)

  //encontrar el id de la URL en el array de pizzas
  const pizzaDetalle = datosPizzas.find((pizza) => pizza.id === id)

  return (
    <div><h1>
      CardDetalle
    </h1>
    {/* card de bootstrap con los datos de la pizza encontrada */}
      <Card style={{ width: "auto" }} className='mb-3 h-100' key={pizzaDetalle.id}>
        <Card.Img variant="top" style={{ height: "300px" }} src={pizzaDetalle.img} />
        <Card.Body>
          <Card.Title>
            {/* parse del nombre para añadir mayuscula */}
            {pizzaDetalle.name.charAt(0).toUpperCase() + pizzaDetalle.name.slice(1)}
          </Card.Title>
          <ul>
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
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
  )
}

export default CardDetalle