import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tienda de Ropa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/category/camisas'>Camisas</Nav.Link>
            <Nav.Link as={Link} to='/category/pantalones'>Pantalones</Nav.Link>
            <Nav.Link as={Link} to='/category/zapatos'>Zapatos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
    );
}
 
export default NavBar;



    
