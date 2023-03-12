import React from 'react'
//import de componentes

import CardMini from '../components/CardMini'
import MyContext from '../Context'
//import de hooks
import { useContext } from 'react'

const Inicio = () => {
  const { datosPizzas } = useContext(MyContext)
  let inventarioPizzas = datosPizzas
  return (
    <div>
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
          
    </div>
  )
}

export default Inicio