//import de componentes del Navbar de bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import de NavLink de react-router-dom
import { NavLink } from 'react-router-dom';

//import de hooks
import { useContext } from 'react';

//importamos el contexto
import MyContext from '../Context';

import React from 'react'

const Navigation = () => {

  //consumimos el contexto
  const { precioTotal, datosCarrito, setprecioTotal } = useContext(MyContext)

    //función que recibe un objeto con la propiedad isActive del componente NavLink
    //y retorna la clase que se le asignará al componente si isActive es true
    //al ser true, el componente NavLink tiene la clase active, esto seleccionará la clase del css
  const setActiveClass = ({ isActive }) =>  (isActive) ? 'active' : 'inactive' ;
  
    return (
      <div>
          <Navbar className='navigation p-3 fixed-top'>
        {/* con el componente NavLink y isActive, podemos cambiar atributos dependiendo de si
        nos encontramos dentro de esa página o no */}
          <NavLink className={ setActiveClass } to='/'>
              Pizza Mamma-Mia!
              </NavLink>
          <NavLink className={ setActiveClass } to='/carrito'>
              Carrito: ${
            /* seteamos el precioTotal */
            /* el calculo lo hacemos aquí ya que el navigation debe estar siempre presente. en Carrito, se ejecutaba solo al abrir Carrito */
            /* sumamos los precios de los productos en el carrito */
        /* .reduce es como map, llama a cada elemento del array, pasando el valor de la operación del elemento anterior */
        /* En este caso a acc se le suma la operación de precios y cantidades. El valor inicial es 0. */
            setprecioTotal(datosCarrito.reduce((acc, producto) => {
              return acc + (producto.price * producto.quantity)
            }
              , 0)) 
        }
        {/* mostramos el precio total de las pizzas en el carrito */}
        {precioTotal}
              </NavLink>
         


              </Navbar>
      </div>
    )
  }

export default Navigation