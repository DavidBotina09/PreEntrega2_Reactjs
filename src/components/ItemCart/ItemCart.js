import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCardContext } from "../CartContext";
import "./ItemCart.css"


const ItemCart = ({ product }) => {
    const { removeProduct } = useCardContext();
    return ( 
        <div className='ItemCart'>
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Unidades Compradas: {product.quantify}</Card.Text>
                <Card.Text>Precio Individual: {product.price}</Card.Text>
                <Card.Text>Subtotal: ${product.quantify * product.price}</Card.Text>
                <Button onClick={() => removeProduct(product.id)}>Eliminar</Button>
            </Card.Body>
            </Card>
        </div>
        
     );
}
 
export default ItemCart;