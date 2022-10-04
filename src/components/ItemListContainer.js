import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import ItemList from './ItemList';

const ProductosMostrar = [
    {id: "1",nombre: "camisa",descripcion: "string",categoria: "overside"}
    ,{id: "2",nombre: "pantalon",descripcion: "string",categoria: "botaCampana"}
    ,{id: "3",nombre: "zapatos",descripcion: "string",categoria: "deporte"}
] 
    

const ItemListContainer = ({ greeting }) => {
    const [name, setName] = useState('Cargando...');

    setTimeout(() =>{
        setName('Carga completa')
    }, 4000 )

    //console.log("rederizado");
    return (
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <p>{name}</p>
        <ItemList ProductosMostrar = {ProductosMostrar} />
        </Container>
    );
}
 
export default ItemListContainer;