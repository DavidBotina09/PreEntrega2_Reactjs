import { createContext, useState, useContext} from "react";

const CartContext = createContext([]);

export const useCardContext = () => useContext(CartContext);



const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

console.log("cart:", cart);

const addProduct = (item,quantify) => {
    if(isInCart(item.id)){
        setCart(cart.map(product => {
            return product.id === item.id ? { ...product, quantify:product.quantify + quantify } : product
        }));
    }else{
        setCart([ ...cart, { ...item, quantify}]);
    }
}

const totalPrice = () => {
    return cart.reduce((prev,act) => prev + act.quantify *act.price, 0);
}
const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantify, 0);


//const clearCart = () => setCart([]);

const isInCart = (id) =>  cart.find(product => product.id === parseInt(id)) ? true : false;
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{isInCart,removeProduct,addProduct,totalPrice,totalProducts,cart}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartProvider;


