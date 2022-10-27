import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProductByCategory, getProducts} from '../../utils/products';
import { useParams } from 'react-router-dom';


    

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        }else{
            getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        }
    }, [categoryId])
    
    return (
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList ProductosMostrar = {products} />
        </Container>
    );
}
 
export default ItemListContainer;