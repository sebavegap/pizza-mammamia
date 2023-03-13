import React from 'react'
//import de context
import MyContext from '../Context'
//import de hooks
import { useContext } from 'react'

const ListaProductos = () => {

  const { datosCarrito, setdatosCarrito } = useContext(MyContext)
  console.log(datosCarrito)

  return (
    <div>ListaProductos</div>
  )
}

export default ListaProductos