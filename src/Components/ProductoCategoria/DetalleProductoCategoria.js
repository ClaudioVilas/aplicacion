const DetalleProductoCategoria = ({producto}) => {
    return (
        <div>
          <h1>{producto.title}</h1>
          <img src= {producto.img} alt = 'logo acciones' />
          <button>Comprar</button>
        </div>
           )

    }

 
export default DetalleProductoCategoria