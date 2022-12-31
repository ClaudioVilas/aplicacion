import './ItemList.css'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../Service/firebaseConfig'

// import Navbar from '../Navbar/Navbar'






const ItemListFireBase = () => {
    const [listado, setListado] = useState ([])
    const [loading, setLoading] = useState (true)
    // const [titel, setTitle] = useState ('')

    const {tipo} = useParams ()
    

    useEffect (() => {
       setLoading(true)
            const collectionRef = collection (db, 'arrayfirebase')
                getDocs(collectionRef).then (response => {
                    console.log (response.docs)
                        const arrayfirebaseAdapted = response.docs.map (doc => { 
                            const data = doc.data()

                            return { id: doc.id, ...data}
                        })
                        setListado (arrayfirebaseAdapted)
                }).finally (() => {
                    setLoading (false)
                })

},[tipo]); 

if(loading){
   return <h1> Cargando ...</h1>
}

return(
    <div className = "lista">
       {/* <h3 className = "lista2" onClick={() => setshow (!show)}>Menu De Opciones</h3>
      { show ? <Navbar /> : null } */}
        <h1>Listado De Prodcutos</h1>
        <Item listados = {listado} />  
    </div>
    )
}


export default ItemListFireBase