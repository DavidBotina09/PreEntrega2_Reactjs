import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useCardContext } from '../CartContext';

const CartWidget = () => {
    const {totalProducts} = useCardContext();
    //agregar icono
    return (
        <>
        <Link to="/cart">
        <FaShoppingCart />
        </Link>
        <span className='numero'>{totalProducts() || " "}</span>
        </>

        
    );
}
 
export default CartWidget;