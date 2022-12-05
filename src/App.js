import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ContenedorProductos from './Components/ContenedorProductos/ContenedorProductos';
import ProductoCategoria from './Components/ProductoCategoria/ProductoCategoria';


function App() {
  return (
    <div className="App">

        <NavBar />
        <Banner greeting = 'Bienvenidos a CV Finanzas' />
        <ContenedorProductos />
        <ProductoCategoria />

    </div>
  );
}

export default App;
