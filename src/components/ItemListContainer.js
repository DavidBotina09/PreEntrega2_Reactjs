import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
const ItemListContainer = ({ greeting }) => {
    const [name, setName] = useState('Cargando...');

    setTimeout(() =>{
        setName('Carga completa')
    }, 2000 )

    //console.log("rederizado");
    return (
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <p>{name}</p>

        </Container>
    );
}
 
export default ItemListContainer;