import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getProducts} from '../utils/products';


    

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }, [])
    
    return (
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList ProductosMostrar = {products} />
        </Container>
    );
}
 
export default ItemListContainer;