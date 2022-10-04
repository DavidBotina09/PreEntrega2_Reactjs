import Item from "./Item";
const ItemList = ({ProductosMostrar}) => {
    
    return (
        <>
        <h1> ItemList </h1> 

        {ProductosMostrar.map((products) => (
            <Item key={products.id} products = {products} /> 
        ))}
               
        </>
    )
}

export default ItemList;