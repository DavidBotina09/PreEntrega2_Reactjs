
import Item from "./Item";
import "./ItemCount.css"
import ItemCount from "./ItemCount";
import {useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCardContext } from "./CartContext";

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
        <Item products={product} />
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