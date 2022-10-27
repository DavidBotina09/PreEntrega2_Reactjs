import { Link } from "react-router-dom";
import { useCardContext } from "./CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css"
import { Button, Container} from "react-bootstrap";
import { useState } from "react";
import { createOrders } from "../utils/oders";
import OrderModal from "./OrderModal";

const buyermock = {
    name: "David",
    email: "davidbotina@gmail.com",
    phone: "3203481591",
    address: "asdd"
}

const Cart = () => {
    const {cart , totalPrice} = useCardContext();
    const [user , setUser ] = useState(buyermock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();

    const handleOpen = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    const handleBuy = async () => {
        const newOrder = {
            buyer: buyermock,
            items: cart,
            total: totalPrice()
        }
        const newOrderId = await createOrders(newOrder)
        setOrderId(newOrderId)
        //clearCart();
    }

    if(cart.length === 0){
        return(
            <>
                <p>No hay elementos disponibles</p>
                <Link to='/'>Hacer Compras</Link>
                
            </>
        );
    }

    return ( 
        <Container>
            <>
            <h2>bienvenido al carrito del compras</h2> 
            <div className="cart">
                {cart.map(product => <ItemCart key={product.id} product={product} />)}  
            </div>
            <p> PrecioTotal: {totalPrice()}</p>  
            <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
            </>
            <OrderModal showModal={showModal} onClose={handleClose} onBuy={handleBuy} orderId={orderId} />   
        </Container>
        

     );
     
}
 
export default Cart; 