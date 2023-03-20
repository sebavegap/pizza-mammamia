import React from 'react'

//imports de react-bootstrap
import { Card, Col, Container } from 'react-bootstrap'

//import de hooks
import { useContext } from 'react'
import MyContext from '../Context'
import { useNavigate } from 'react-router-dom'

const CardMini = (pizza) => {

    const navigate = useNavigate()
    //consumimos el contexto
    const { datosCarrito, setdatosCarrito, datosPizzas } = useContext(MyContext)

    //función para navegar al detalle de la pizza
    const irAPizza = (e) => {
        navigate(`/pizza/${e.target.value}`)
    }

    //función para agregar la pizza seleccionada al estadoglobal datosCarrito según la key
    const agregarCarrito = (e) => {
        
        const pizzaSeleccionada = datosPizzas.find((pizza) => pizza.id === e.target.value)
//si la pizza ya está en el carrito con el mismo id, se le suma 1 al quantity
        if (datosCarrito.find((pizza) => pizza.id === pizzaSeleccionada.id)) {
            const newCarrito = datosCarrito.map((pizza) => {
                if (pizza.id === pizzaSeleccionada.id) {
                    return { ...pizza, quantity: pizza.quantity + 1 }
                }
                return pizza
            })
            setdatosCarrito(newCarrito)
            return
        }


        //se setea el estado con el nuevo array, se agrega "quantity" y se suma 1
        setdatosCarrito([...datosCarrito, { ...pizzaSeleccionada, quantity: 1 }])
        console.log(pizzaSeleccionada)
    }

    return (
        <div>
            {/* se mapea el array de pizzas.js desde el estado y se genera una card por cada elemento */}
            <Col xl={3} md={4} s={6} xs={6} className="p-1">
                <Container className="py-2 h-100">
                    {/* se mapea el array de inventario.js desde el estado y se genera una card por cada elemento */}

                    <Card style={{ width: "auto" }} className='mb-3 h-100' key={pizza.id}>
                        <Card.Img variant="top" style={{ height: "300px" }} src={pizza.imagen} />
                        <Card.Body>
                            <Card.Title>
                                {/* parse del nombre para añadir mayuscula */}
                                {pizza.nombre.charAt(0).toUpperCase() + pizza.nombre.slice(1)}
                            </Card.Title>
                            <ul>
                                    <li>{pizza.ingredientes[0]}</li>
                                    <li>{pizza.ingredientes[1]}</li>
                                    <li>{pizza.ingredientes[2]}</li>
                                    <li>{pizza.ingredientes[3]}</li>
                                </ul>
                            <Card.Text>
                             

                                {/* boton ver mas */}
                                <button className="btn btn-primary" value={pizza.id} onClick={irAPizza}>Ver más</button>
                                {/* boton para agregar la pizza seleccionada al estadoglobal datosCarrito según la key*/}
                                <button className="btn btn-primary" value={pizza.id} onClick={agregarCarrito}>Agregar al carrito</button>

                                <br />
                                {/*   formateo de figura.precio a moneda chilena con Intl.NumberFormat */}
                                Precio:{" "}
                                {new Intl.NumberFormat("es-CL", {
                                    style: "currency",
                                    currency: "CLP"
                                })
                                    .format(pizza.precio
                                    )}

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
            </Col>

        </div>
    )
}

export default CardMini