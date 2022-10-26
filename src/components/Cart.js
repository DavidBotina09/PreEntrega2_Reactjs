import { Link } from "react-router-dom";
import { useCardContext } from "./CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css"
import { Button } from "react-bootstrap";

const Cart = () => {
    const {cart , totalPrice } = useCardContext();



    if(cart.length === 0){
        return(
            <>
                <p>No hay elementos disponibles</p>
                <Link to='/'>Hacer Compras</Link>
                
            </>
        );
    }

    

    return ( 
        <>
        <h2>bienvenido al carrito del compras</h2> 
        <div className="cart">
        {cart.map(product => <ItemCart key={product.id} product={product} />)}  
        </div>
        
        <p> PrecioTotal: {totalPrice()}</p>  
        <Button variant="success">Finalizar compra</Button>   
        </>

     );
}
 
export default Cart; 