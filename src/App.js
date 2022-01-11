import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemCount from './component/ItemCount';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import IndexWelcome from './component/IndexWelcome/IndexWelcome';

function App() {

  const nombreTienda='Creaciones SIV';
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<IndexWelcome nombreTienda={nombreTienda}/>}/>
            <Route exact path='/products' element={<ItemListContainer/>} />
            <Route exact path='/products/:category' element={<ItemListContainer/>} />
            <Route exact path='/detail/:idDetail' element={<ItemDetailContainer/>}/>
            <Route exact path='/count' element={<ItemCount/>}/>
            
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
