import "../ItemCount/ItemCount.css"
import ItemCount from "../ItemCount/ItemCount";
import {useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useCardContext } from "../CartContext";

const ItemDetail = ({ product }) => {
  const {addProduct} = useCardContext();
    const [, setCount] = useState(0);
    const [cambiador, setCambiador] = useState(true);

    const onAdd = (value) => {
        setCount(value);
        setCambiador(false);
        addProduct(product, value);
      };
  
    return (
        <div>
        <div className='cartas'>
            <Card  style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.categoria}</Card.Text>
                    <Card.Text>{product.descripcion}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        {cambiador && (<ItemCount
          initial={1}
          stock = {10}
          onAdd={onAdd}
        />)}
      {!cambiador && (
          <Link to='/cart'>
            <Button variant="success">
                Ir al Carrito
            </Button>
          </Link>
      )}
        </div>
    );
}
 
export default ItemDetail;