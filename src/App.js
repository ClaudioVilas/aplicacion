import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ContenedorProductos from './Components/ContenedorProductos/ContenedorProductos';
import ProductoCategoria from './Components/ProductoCategoria/ProductoCategoria';
import Home from './Components/Home/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner greeting = 'Bienvenidos a CV Finanzas' />
        <NavBar />
          <Routes>
            <Route path = '/' element = { <Home/> } />
            <Route path = '/contenedorproductos' element = { <ContenedorProductos /> } />
            <Route path = '/productoscategoria' element = { <ProductoCategoria /> } />
          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
