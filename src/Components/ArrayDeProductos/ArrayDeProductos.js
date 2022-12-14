const listado  = [
    {id: 1, nombre: "Microsoft", tipo: "SoftWare", valor: "1200", desc: "Empresa Dedicada al desarrollo de Software.",stock: "500", img: './ImgAcciones/Microsoft.jpg'},
    {id: 2, nombre: "Apple", tipo: "Tecnologica", valor: "500", desc: "Empresa que se dedica al desarrollo de la tecnologia", stock: "500", img: '/ImgAcciones/APPLE.jpg'},
    {id: 3, nombre: "Mercado Libre", tipo: "Vta On-Line", valor: "250", desc: "Empresa dedicada al comercio y la venta on-line", stock: "1000", img: '/ImgAcciones/ML.jpg'},
    {id: 4, nombre: "Audi", tipo: "Automotriz", valor: "222", desc: "Empresa dedicada a la produccion automotor", stock: "1000", img: '/ImgAcciones/AUDI.jpg'},
    {id: 5, nombre: "Chevrolete", tipo: "Automotriz", valor: "123", desc: "Empresa dedicada a la produccion automotor", stock: "1000", img: '/ImgAcciones/CHEVROLET.jpg'},
    {id: 6, nombre: "ElectroLux", tipo: "Electrodomesticos", valor: "320", desc: "Empresa dedicada a la fabricacion de electros", stock: "900", img: '/ImgAcciones/ELECTROLUX.jpg'},
    {id: 7, nombre: "Ford", tipo: "Automitriz", valor: "455", desc: "Empresa dedicada a la produccion  automotor", stock: "980", img: '/ImgAcciones/FORD.jpg'},
    {id: 8, nombre: "Google", tipo: "Tecnologia", valor: "3.000", desc: "Empresa dedicada al desarrollo de las tecnologias", stock: "400", img: '/ImgAcciones/GOOGLE.jpg'},
    {id: 9, nombre: "Instagram", tipo: "Red Social", valor: "650", desc: "Empresa dedicada a las comunicaciones y redes sociales.", stock: "300", img: '/ImgAcciones/IG.jpg'},
    {id: 10, nombre: "Meta", tipo: "Red Social", valor: "560", desc: "Empresa dedicada a las comunicaciones y redes sociales.", stock: "400", img: '/ImgAcciones/META.jpg'},
    {id: 11, nombre: "Repsol", tipo: "Petrolera", valor: "467", desc: "Empresa dedicada a la comercializacion eld petroleo", stock: "455", img: '/ImgAcciones/REPSOL.jpg'},
    {id: 12, nombre: "Shell", tipo: "Petrolera", valor: "654", desc: "Empresa dedicada a la comercializacion del petroleo", stock: "321", img: '/ImgAcciones/SHELL.jpg'},
    {id: 13, nombre: "Tesla", tipo: "Automitriz", valor: "450", desc: "Empresa dedicada al desarrollo e inovacion de las tecnologias.", stock: "700", img: '/ImgAcciones/TESLA.jpg'},
    {id: 14, nombre: "Tinder", tipo: "Red Social", valor: "465", desc: "Empresa dedicada a las comunicaciones y redes sociales.", stock: "400", img: '/ImgAcciones/TINDER.jpg'},
    {id: 15, nombre: "Twich", tipo: "Red Social", valor: "340", desc: "Empresa dedicada a las comunicaciones y redes sociales.", stock: "400", img: '/ImgAcciones/TWITCH.jpg'},
    {id: 16, nombre: "Twiter", tipo: "Red Social", valor: "560", desc: "Empresa dedicada a las comunicaciones y redes sociales.", stock: "400", img: 'ImgAcciones/TWITTER.jpg'},
    {id: 17, nombre: "YPF", tipo: "Petrolera", valor: "200", desc: "Empresa dedicada a la produccion del petroleo", stock: "500", img: '/ImgAcciones/YPF.jpg'},
]

 export const getListado = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
         resolve (listado)
        }, 1000)
    })
}

// al haber dos export la sintaxis es asi y se importa como esta en contenedor productos
// export const getListadobyId = () => {

// }

// al haber dos export la sintaxis es asi y se importa como esta en contenedor productos
export const getListadoById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (listado.find ( listados => listados.id === parseInt(id)))
                }, 1000)
           })
}


export const getListadoByTipo = (tipo) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (listado.filter ( listados => listados.tipo === (tipo)))
                }, 1000)
           })
}