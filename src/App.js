import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemListContainer/ItemList/ItemList'
import ItemCount from './Components/ItemDetailContainer/ItemCount/ItemCount'
import Home from './Components/Home/Home';
import Contactanos from './Components/Contactanos/Contactanos';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner greeting = 'Bienvenidos a CV Finanzas' />
        <NavBar />
          <Routes>
            <Route path = '/' element = { <Home/> } />
            <Route path = '/ItemListContainer' element = { < ItemList /> } />
            <Route path = '/listado/:Id' element = { < ItemCount /> } />
            <Route path = '/contactanos' element = { <Contactanos /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
