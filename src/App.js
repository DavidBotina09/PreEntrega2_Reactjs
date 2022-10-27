import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartContext';

function App() {
  return (
    <BrowserRouter basename='/Proyecto_Reactjs'>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi Tienda"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a mi Tienda"/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart />} /> 
      </Routes>
      </CartProvider>
    </BrowserRouter >


  );
}

export default App;
