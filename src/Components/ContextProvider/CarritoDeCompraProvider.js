import {createContext, useState} from 'react'

export const CartContext = createContext ()

export const CarritoDeCompraProvider = ({children}) => {

const [cart, setCart] = useState ([])

const addCart = (listadoToAdd) =>{
  
  if (!isInCart(listadoToAdd.id)){
    setCart([...cart, listadoToAdd])
  }
}

const isInCart = (id) => {
  return cart.some( cart => cart.id === id)
}

const removeCart = (id) => {
  const upDateCart = cart.filter (cart => cart.id !== id)
  setCart( upDateCart )
}


return (
    <CartContext.Provider value = {{ cart, addCart, removeCart, isInCart }}>
        {children}
    </CartContext.Provider>
)
}
