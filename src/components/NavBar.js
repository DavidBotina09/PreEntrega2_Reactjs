import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tienda de Ropa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Camisas</Nav.Link>
            <Nav.Link href="#pricing">Buzos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
    );
}
 
export default NavBar;



    
