import { useContext, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { handleKeyDown, handleKeyDownForEmail } from '../../helpers/validations';
import { UserContext } from '../../context/UserContext';

export default function ContactForm() {
  const navigate = useNavigate(); 
  const form = useRef();
  const {user} = useContext(UserContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_USER_ID
    ).then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Mensaje Enviado',
        text: 'Gracias por contactarnos. Le responderemos a la brevedad.',
        timer: 5000,
        timerProgressBar: true,
      }).then(() => {
        navigate('/');
      });
    }).catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
        timer: 5000,
        timerProgressBar: true,
      });
    });
  };

  return (
    <>
      <NavbarBrand />
      <Form className='contact-form mt-5 pb-4 mx-4 mx-sm-auto' ref={form} onSubmit={sendEmail}>
        <h2 className='text-center pt-2'>Dejanos tu consulta</h2>
        <h5 className='text-center mt-4 mb-5 fs-6'>Nos pondremos en contacto a la brevedad</h5>
        <FloatingLabel
          controlId="floatingName"
          label="Nombre"
          className="mb-3 mx-4"
          minLength={3}
          maxLength={40}
          pattern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*$"
          title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
          onKeyDown={handleKeyDown}
          required
        >
          <Form.Control name="from_name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label="Email"
          className="mb-3 mx-4"
        >
          <Form.Control
            name="reply_to"
            type="email"
            defaultValue={user ? user.email : ''}
            readOnly={user ? true : false}
            className={user ? "form-control text-secondary fst-italic" : ""}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="El email debe tener el formato 'nombre@dominio.tld'"
            minLength={10}
            maxLength={30}
            onKeyDown={handleKeyDownForEmail}
            required
          />

        </FloatingLabel>

        <FloatingLabel
          controlId="floatingMessage"
          label="Mensaje"
          className="mb-3 mx-4"
        >
          <Form.Control
            as="textarea"
            name="message"
            style={{ height: '100px' }}
            minLength={3}
            maxLength={600}
            title='Ingresa tu consulta (min 3, max 600 caracteres)'
            required
          />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>

      </Form>
    </>
  );
}