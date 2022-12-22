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


const getQuantity = () => {
  let totalQuantity = 0
    cart.forEach (product =>{
      totalQuantity += product.quantity
    })
    return totalQuantity
}

return (
    <CartContext.Provider value = {{ cart, addCart, removeCart, isInCart, getQuantity }}>
        {children}
    </CartContext.Provider>
)
}
