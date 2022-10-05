import Item from "./Item";
import React,{useState} from "react";
import "./ItemCount.css"

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);

    const handliClick = () => {
        setCount(count - 1);
        if(count === 0){
            setCount(count - 0)
        }
    } 

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
        <Item products={product} />
            <button onClick={handliClick}>-</button>
            <h4>{count}</h4>
            <button onClick={handleClick}>+</button>
            <button>Agregar al Carrito</button>
        </>
    );
}
 
export default ItemDetail;