import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
const Item  = ({ products }) => {
    return ( 
        <div className='cartas'>
            <Card  style={{ width: '15rem' }}>
                <Card.Img variant="top" src={products.pictureUrl} />
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.categoria}</Card.Text>
                    <Card.Text>{products.descripcion}</Card.Text>
                <Button variant="primary">Ver Detalles</Button>
                </Card.Body>
            </Card>
        </div>

     );
}
 
export default Item;