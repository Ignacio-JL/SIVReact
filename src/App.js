// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';

function App() {

  const nombreTienda='Creaciones SIV';
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer tienda={nombreTienda}/>
    </div>
  );
}

export default App;
