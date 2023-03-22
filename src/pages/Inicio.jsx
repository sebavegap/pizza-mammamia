import React from 'react'
//import de componentes

import CardMini from '../components/CardMini'
import MyContext from '../Context'
//import de hooks
import { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'

const Inicio = () => {
  const { datosPizzas } = useContext(MyContext)
  let inventarioPizzas = datosPizzas
  return (
    <div>
      <Container fluid>
        <Row>
          {/* se mapea el array de pizzas.js desde el estado y se genera una card por cada elemento */}
          {inventarioPizzas.map((pizza) => (
            <CardMini
              key={pizza.id}
              id={pizza.id}
              nombre={pizza.name}
              ingredientes={pizza.ingredients}
              precio={pizza.price}
              imagen={pizza.img}
              descripcion={pizza.desc}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Inicio