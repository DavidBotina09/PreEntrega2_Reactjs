import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
const Item  = ({ products }) => {
    return ( 
        <div className='cartas'>
            <Card  style={{ width: '16rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{products.nombre}</Card.Title>
                    <Card.Text>{products.categoria}</Card.Text>
                    <Card.Text>{products.descripcion}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

     );
}
 
export default Item;