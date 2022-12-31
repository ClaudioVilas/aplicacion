import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
// import ItemList from './Components/ItemListContainer/ItemList/ItemList'
import ItemListFireBase from './Components/ItemListContainer/ItemList/ItemListFireBase'


import Home from './Components/Home/Home';
import Contactanos from './Components/Contactanos/Contactanos';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer'
import ItemDetailContainerFireBase from './Components/ItemDetailContainer/ItemDetailContainer/ItemDetailContainerFireBase'

import Favoritos from './Components/FavoritoDetail/FavoritoDetail';
import { FavoritoProvider } from './Components/ContextProvider/FavoritoProvider'
import CarritoDeCompra from './Components/CarritoDeCompra/CarritoDeCompra'
import { CarritoDeCompraProvider } from './Components/ContextProvider/CarritoDeCompraProvider'



function App() {


  return (
    <div className="App">
      <CarritoDeCompraProvider>
        <FavoritoProvider>
        <BrowserRouter>
          <NavBar />
          <Banner greeting = 'Bienvenidos a CV Finanzas' />
            <Routes>
              <Route path = '/' element = { <Home/> } />

              <Route path = '/productos' element = { < ItemListFireBase /> } />
              {/* <Route path = '/productos' element = { < ItemList /> } /> */}

              <Route path = '/listado/:id' element = { < ItemDetailContainerFireBase /> } />
              {/* <Route path = '/listado/:id' element = { < ItemDetailContainer /> } /> */}

              <Route path = '/categoria/:tipo' element = { < ItemListFireBase /> } />
              {/* <Route path = '/categoria/:tipo' element = { < ItemList /> } /> */}
              <Route path = '/contactanos' element = { < Contactanos /> } />
              <Route path = '/favoritos' element = { < Favoritos /> } />
              <Route path = '/CarritoDeCompra' element = { < CarritoDeCompra /> } />
            </Routes>
          </BrowserRouter>
          </FavoritoProvider>
        </CarritoDeCompraProvider>

    </div>
  );
}

export default App;
