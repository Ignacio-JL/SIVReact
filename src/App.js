// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemCount from './component/ItemCount';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';

function App() {

  const nombreTienda='Creaciones SIV';
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer tienda={nombreTienda}/>
        <ItemDetailContainer/>
        <ItemCount/>
    </div>
  );
}

export default App;
