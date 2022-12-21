import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemListContainer/ItemList/ItemList'
import Home from './Components/Home/Home';
import Contactanos from './Components/Contactanos/Contactanos';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer'
import Favoritos from './Components/FavoritoDetail/FavoritoDetail';
import { FavoritosProvaider } from './Components/ContextProvider/ContextProvider';



function App() {


  return (
    <div className="App">
      <FavoritosProvaider>
      <BrowserRouter>
        <NavBar />
        <Banner greeting = 'Bienvenidos a CV Finanzas' />
          <Routes>
            <Route path = '/' element = { <Home/> } />
            <Route path = '/productos' element = { < ItemList /> } />
            <Route path = '/listado/:id' element = { < ItemDetailContainer /> } />
            <Route path = '/categoria/:tipo' element = { < ItemList /> } />
            <Route path = '/contactanos' element = { < Contactanos /> } />
            <Route path = '/favoritos' element = { < Favoritos /> } />
          </Routes>
        </BrowserRouter>
        </FavoritosProvaider>

    </div>
  );
}

export default App;
