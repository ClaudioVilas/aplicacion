import {createContext, useState} from 'react'

export const FavoritoContext = createContext ()

export const FavoritosProvaider = ({children}) => {

const [favoritos, setFavoritos] = useState ([])

const addFavorito = (listadoToAdd) =>{
  
  if (!isInFavoritos(listadoToAdd.id)){
    setFavoritos([...favoritos, listadoToAdd])
  }
}

const isInFavoritos = (id) => {
  return favoritos.some( favoritos => favoritos.id === id)
}

const removeFavoritos = (id) => {
  const upDateFavoritos = favoritos.filter (favoritos => favoritos.id !== id)
  setFavoritos(upDateFavoritos )
}


return (
    <FavoritoContext.Provider value = {{ favoritos, addFavorito, removeFavoritos, isInFavoritos }}>
        {children}
    </FavoritoContext.Provider>
)
}

