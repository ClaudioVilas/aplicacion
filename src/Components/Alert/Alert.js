import Swal from 'sweetalert2';


const Alert = () =>  {

    Swal.fire({
        title: 'Sssweet!',
        text: 'Bienvenido al merjo sitio de finanzas',
        imageUrl: '../Imagenes/pulgararriba.jpg',
        imageWidth: 270,
        imageHeight: 200,
        input: 'email',
        inputPlaceholder: 'Enter your email address'
        })
        // if (email) {
        //     Swal.fire(`Entered email: ${email}`)
        //   }
    return (
<></>
)
}

export default Alert