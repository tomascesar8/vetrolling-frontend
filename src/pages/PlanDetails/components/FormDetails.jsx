import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { BiUserPin } from 'react-icons/bi';

const FormPlans = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61gwtub', 'template_8hhdrwb', form.current, 'Z7hiBlvulC2bzTysE')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto.',
        });
        // Redirigir al usuario a la página de landing
        navigate('/');
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar el mensaje',
          text: 'Hubo un problema al enviar tu consulta. Por favor, inténtalo nuevamente.',
        });
      });
  };

  return (
    <>
      <h2>Información de planes</h2>
      <Form ref={form} onSubmit={sendEmail} className='form-plans d-flex flex-column text-start'>
        <FloatingLabel controlId="from_name" label="Nombre">
          <Form.Control type="text" name="from_name" required />
        </FloatingLabel>

        <FloatingLabel controlId="destinatario" label="Email">
          <Form.Control type="email" name="destinatario" required />
        </FloatingLabel>

        <FloatingLabel controlId="phone" label="Teléfono de contacto">
          <Form.Control type="tel" name="phone" required />
        </FloatingLabel>

        <Button className='mt-3' type="submit">Enviar consulta</Button>
      </Form>
    </>
  );
}

export default FormPlans;
