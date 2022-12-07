import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemListContainer/ItemList/ItemList'
import Home from './Components/Home/Home';
import Contactanos from './Components/Contactanos/Contactanos';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemDetailContainer/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner greeting = 'Bienvenidos a CV Finanzas' />
        <NavBar />
          <Routes>
            <Route path = '/' element = { <Home/> } />
            <Route path = '/productos' element = { < ItemList /> } />
            <Route path = '/listado/:id' element = { < ItemCount /> } />
            <Route path = '/contactanos' element = { < Contactanos /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
