import React from 'react'

//imports de react-bootstrap
import { Card, Col, Container } from 'react-bootstrap'

//import de hooks
import { useContext } from 'react'
import MyContext from '../Context'

const CardMini = (pizza) => {

 

  return (
    <div>
        {/* se mapea el array de pizzas.js desde el estado y se genera una card por cada elemento */}
        <Col xl={3} md={4} s={6} xs={6} className="p-1">
        <Container className="py-2 h-100">
            {/* se mapea el array de inventario.js desde el estado y se genera una card por cada elemento */}
            
                <Card style={{ width: "auto" }} className='mb-3 h-100' key={pizza.id}>
                    <Card.Img variant="top" style={{height: "300px"}} src={pizza.imagen} />
                    <Card.Body>
                        <Card.Title>{pizza.nombre}</Card.Title>
                        <Card.Text>
                            {pizza.ingredientes}
                            
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