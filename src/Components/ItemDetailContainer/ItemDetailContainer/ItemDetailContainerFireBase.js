import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';

import { db } from '../../../Service/firebaseConfig'

import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainerFireBase = () => {
    const [listado, setListado] = useState ({})
    const [isLoading, setIsLoading] = useState (true)



    const {id} = useParams ()
       useEffect (() => {
//         const docRef = doc (db, 'arrayfirebase', listadosId)
//             getDoc(docRef).then (doc => {
//                 const data = doc.data()
//                     const arrayfirebaseAdapted = { id : doc.id , ...data}
//                      setarrayfirebaseAdapted  (arrayfirebaseAdapted)
//             }).finally(() => { 
//                 setIsLoading(false)
//             })
}
,[id]); 


if(isLoading){
    return <h1> Cargando Acciones ...</h1>
}


return(
    <div >
        < ItemDetail producto = {listado} />    
    </div>
    )
}


export default ItemDetailContainerFireBase
