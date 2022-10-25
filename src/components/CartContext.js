import { createContext, useState, useContext} from "react";
const CartContext = createContext([]);

export const useCardContext = () => useContext(CartContext);



const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

const addProduct = (item,newQuantify) => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({ ...item, quantify: newQuantify});
    setCart(newCart);
}




const clearCart = () => setCart([]);
const isInCart = (id) =>  cart.find(product => product.id === parseInt(id)) ? true : false;
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{clearCart,isInCart,removeProduct,addProduct}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartProvider;


