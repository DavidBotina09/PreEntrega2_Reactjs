import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    //agregar icono
    return (
        <Link to="/cart">
        <FaShoppingCart />
        </Link>
        
    );
}
 
export default CartWidget;