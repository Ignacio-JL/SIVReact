import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import IndexWelcome from './component/IndexWelcome/IndexWelcome';
import { CartContextProvider } from './context/cartContext';
import Cart from './component/Cart/Cart';
import Contact from './component/Contact/Contact';

function App() {

  const nombreTienda='Creaciones SIV!';
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path='/' element={<IndexWelcome nombreTienda={nombreTienda}/>}/>
              <Route exact path='/products' element={<ItemListContainer/>} />
              <Route exact path='/contact' element={<Contact/>} />
              <Route exact path='/products/:category' element={<ItemListContainer/>} />
              <Route exact path='/detail/:idDetail' element={<ItemDetailContainer/>}/>
              <Route exact path='/cart' element={<Cart/>} />
              
              
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
