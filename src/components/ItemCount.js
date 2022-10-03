import React,{useState} from "react";
import { Container } from "react-bootstrap";
import "./ItemCount.css"

const ItemCount = () => {
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
    <Container>
        <div className="medidor">
            <button onClick={handliClick}>-</button>
            <h4>{count}</h4>
            <button onClick={handleClick}>+</button>
            <button>Agregar al Carrito</button>
        </div>

    </Container>
)

}
export default ItemCount;