import Item from "./Item";
import "./ItemList.css";
const ItemList = ({ProductosMostrar}) => {
    
    return (
        <div className="itemlist">
        {ProductosMostrar.map((products) => (
            <Item key={products.id} products = {products} /> 
        ))}
               
        </div>
    )
}

export default ItemList;