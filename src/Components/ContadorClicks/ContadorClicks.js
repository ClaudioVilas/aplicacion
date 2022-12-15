import './ContadorClicks.css'
import { useState } from "react"

const ContadorClick = () => {
const [count, setCount] = useState(1)
// const [titulo, setTitulo] = useState ('Hace Click en un Boton')

const increment = () => {
    setCount (count +1)
    // setTitulo ('Sumaste un click')
    }
    
const resta = () => {
    setCount (count -1)
    // setTitulo ('Restaste un click')
    }

const reset = () => {
    setCount (1)
    // setTitulo ('Reseteaste todo')
    }

// const incrementaldea5 = () => {
//     for ( var i = 0; i <5; i++)
//     setCount (valorPrevio => valorPrevio + 1)
//     setTitulo ('Sumaste de a 5')
//     }

// const reduceedea5 = () => {
//         for ( var i = 0; i <5; i++)
//         setCount (valorPrevio => valorPrevio - 1)
//         setTitulo ('Restaste de a 5')
//             }


return (
    <div className='contador'>
        {/* <h6>Contador De clicks</h6> */}
        {/* <h6>{titulo}</h6> */}
        <h6>{count}</h6>
        <button onClick = {() => increment()}> + </button>
        <button onClick = {() => resta()}> - </button>
        <button className = 'botonreset' onClick = {() => reset()}>Reset</button>
        {/* <button onClick = {() => incrementaldea5()}>Sumar De a 5</button> */}
        {/* <button onClick = {() => reduceedea5()}>Resta De a 5</button> */}
    </div>
)
}

export default ContadorClick