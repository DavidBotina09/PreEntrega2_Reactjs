import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi Tienda"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a mi Tienda"/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        
      </Routes>
    </BrowserRouter >
  );
}

export default App;
