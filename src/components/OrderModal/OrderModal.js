import { useState } from "react";
import { Button, Modal,Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCardContext } from "../CartContext";
import "./OrderModal.css"



const OrderModal = ({ showModal, onClose, onBuy, orderId, }) => {

    const Limpiar = () =>{
        clearCart();
    }

    const {cart} = useCardContext();
    const [gmail, setGmail] = useState("")
    const [VerificadorGmail, setVerificadorGmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const {clearCart} = useCardContext();
  

    const handleNombre = (e) => {
        setNombre(e.target.value);
        setSubmitted(false)
    }
    const handleGmail = (e) => {
        setGmail(e.target.value);
        setSubmitted(false)
    }
    const handleVerificadorGmail = (e) => {
        setVerificadorGmail(e.target.value);
        setSubmitted(false)
    }
    const handleTel = (e) => {
        setTel(e.target.value);
        setSubmitted(false)
    }

    function letrasEspacios(str){
        return /^[A-Za-z\s]*$/.test(str);
    }
    function arrobaContador(str){
        const tieneArroba = /@/;
        return tieneArroba.test(str);
    }
    function ingresarNumeros(str){
        return /^[0-9]+$/.test(str);
    }
    const [submitted, setSubmitted] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    
 

    const MensajeValidador = () => {
        return (
            <div
                style={{
                    display: submitted ? "" : "none",
                }}>
                <h4>bien fueron guardados tus datos</h4>
            </div>
        )
    }
    const MensajeError = () => {
        return (
            <div
                style={{
                    display: errorMsg ? "" : "none",
                }}>
                <h4>ingresaste mal los datos</h4>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!letrasEspacios(nombre) || nombre === "" || !arrobaContador(gmail) || gmail === "" || !ingresarNumeros(tel) || tel === "" || VerificadorGmail !== gmail){
            setErrorMsg(true);
        }else{
            setSubmitted(true);
            setErrorMsg(false);
            onBuy();
        }
    }
    

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
            {MensajeError()}
            {MensajeValidador()}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingresa tu Email</Form.Label>
                <Form.Control name="gmail" type="email" placeholder="Ingresa el email" value={gmail} onChange={handleGmail}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>verifica tu Email</Form.Label>
                <Form.Control name="VerificadorGmail" type="email" placeholder="verifica tu email" value={VerificadorGmail} onChange={handleVerificadorGmail}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="nombre" type="text" placeholder="Ingresa el nombre" value={nombre} onChange={handleNombre} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control name="tel" type="number" placeholder="Ingresa el telefono" value={tel} onChange={handleTel} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                <Button variant="secondary" onClick={onClose}>
                Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
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