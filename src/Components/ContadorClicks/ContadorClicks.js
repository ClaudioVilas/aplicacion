import './ContadorClicks.css'
import { useState } from "react"

const ContadorClick = ({initial}) => {
const [count, setCount] = useState(initial)
const [titulo, setTitulo] = useState ('Hace Click en un Boton')

const increment = () => {
    setCount (count +1)
    setTitulo ('Sumaste un click')
    }
    
const resta = () => {
    setCount (count -1)
    setTitulo ('Restaste un click')
    }

const reset = () => {
    setCount (initial)
    setTitulo ('Reseteaste todo')
    }

const incrementaldea5 = () => {
    for ( var i = 0; i <5; i++)
    setCount (valorPrevio => valorPrevio + 1)
    setTitulo ('Sumaste de a 5')
    }

const reduceedea5 = () => {
        for ( var i = 0; i <5; i++)
        setCount (valorPrevio => valorPrevio - 1)
        setTitulo ('Restaste de a 5')
            }


return (
    <div className='contador'>
        <h1>Contador De clicks</h1>
        <h2>{titulo}</h2>
        <h2>{count}</h2>
        <button onClick = {() => increment()}>Sumar clicks</button>
        <button onClick = {() => resta()}>Restar clicks</button>
        <button onClick = {() => reset()}>Reset</button>
        <button onClick = {() => incrementaldea5()}>Sumar De a 5</button>
        <button onClick = {() => reduceedea5()}>Resta De a 5</button>
    </div>
)
}

export default ContadorClick