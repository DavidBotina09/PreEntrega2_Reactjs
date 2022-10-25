import React,{useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import "./ItemCount.css"

const ItemCount = ({ initial, stock , onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handliClick = () => {
        setCount(count - 1);
        if(count === 0){
            setCount(count - 0)
        }
    } 

    const handleClick = () => {
        setCount(count + 1);
    }

    const continuarCarrito = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

return (
    <Container>
        <div className="medidor">
            <button disabled={count <= 1} onClick={handliClick}>-</button>
            <h4>{count}</h4>
            <button disabled={count >= stock} onClick={handleClick}>+</button>
            <button disabled={stock <= 0} onClick={continuarCarrito}>Agregar al Carrito</button>
        </div>

    </Container>
)

}
export default ItemCount;