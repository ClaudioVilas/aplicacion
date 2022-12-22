import {createContext, useState} from 'react'

export const CartContext = createContext ()

export const CarritoDeCompraProvider = ({children}) => {

const [cart, setCart] = useState ([])

const addCart = (productoToAdd) =>{
  if (!isInCart(productoToAdd.id)){
    setCart([...cart, productoToAdd])
  }
}

const isInCart = (id) => {
  return cart.some( producto => producto.id === id)
}

const removeCart = (id) => {
  const upDateCart = cart.filter (producto => producto.id !== id)
  setCart( upDateCart )
}


return (
    <CartContext.Provider value = {{ cart, addCart, removeCart, isInCart }}>
        {children}
    </CartContext.Provider>
)
}
