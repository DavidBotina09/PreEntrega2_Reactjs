import { useState } from "react";
import { Button, Modal,Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCardContext } from "../CartContext";
import "./OrderModal.css"



const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {
    const {cart} = useCardContext();
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const {clearCart} = useCardContext();

    const Limpiar = () =>{
        clearCart();
    }
     
    console.log(email);
    console.log(nombre);
    console.log(tel);
    return ( 
        <>
        <Modal
        show={showModal}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header >
          <Modal.Title>Terminar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingresa tu Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingresa el email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="nombre" type="text" placeholder="Ingresa el nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control name="telefono" type="number" placeholder="Ingresa el telefono" value={tel} onChange={(e)=> setTel(e.target.value)} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                <Button variant="secondary" onClick={onClose}>
                Cancelar
                </Button>
                <Button variant="primary" onClick={onBuy}>
                Comprar
              </Button>
                </>
             
            )}
            {orderId && (
                <div className="footerOrderSuccess">
                <Alert key="success" variant="success">
                 {orderId}
                </Alert>
                <Link to="/">
                <Button variant="success" onClick={Limpiar}>
                seguir comprando
                </Button>
                </Link>
                <div>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id}>
                        <span>Producto: {product.title}</span>
                        <span>Cantidad: {product.quantify}</span>
                        <span>PrecioPrendas: ${product.price}</span>
                      <h5>Total: $ {product.quantify * product.price}</h5>
                    </li>
                  ))}
              </ul>
                
                </div>
            </div>

            )}
        </Modal.Footer>
      </Modal>
      
        </>  
     );
}
 
export default OrderModal;