import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemListContainer/ItemList/ItemList'
import Home from './Components/Home/Home';
import Contactanos from './Components/Contactanos/Contactanos';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer'
import {createContext, useState} from 'react'
import Favoritos from './Components/FavoritoDetail/FavoritoDetail';


export const FavoritoContext = createContext ()

function App() {

const [favoritos, setFavoritos] = useState ([])

const addFavorito = (listadoToAdd) =>{
  
  if (!isInFavoritos(listadoToAdd.id)){
    setFavoritos([...favoritos, listadoToAdd])
  }
}

const isInFavoritos = (id) => {
  return favoritos.some( favoritos => favoritos.id === id)
}

// const removeFavoritos = (id) => {
//   const upDateFavoritos = favoritos.filter (favoritos => favoritos.id !== id)
//   setFavoritos(upDateFavoritos )
// }

  return (
    <div className="App">
      <FavoritoContext.Provider value = {{ favoritos, addFavorito }}>
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
        </FavoritoContext.Provider>

    </div>
  );
}

export default App;
