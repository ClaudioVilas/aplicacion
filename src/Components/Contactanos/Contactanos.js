import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Contactanos.css'

function Contactanos() {
  return (
    <div className = 'formulariogeneral'>
    <h1 className = 'formulario'> Formulario De Contacto</h1>
    
    <FloatingLabel controlId = "floatingInput" label = "Nombre y Apellido" className = "mb-3">
        <Form.Control type = "text" placeholder = "Claudio Vilas" />
      </FloatingLabel>

      <FloatingLabel controlId = "floatingInput" label = "Email address" className = "mb-3">
        <Form.Control type = "email" placeholder = "name@example.com" />
      </FloatingLabel>

  
    </div>
  );
}

export default Contactanos;