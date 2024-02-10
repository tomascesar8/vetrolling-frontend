import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
// import { BiUserPin } from 'react-icons/bi';

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
          text: 'Gracias por tu consulta. Te enviamos un email con toda la información y pronto nos pondremos en contacto contigo.',
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
      <h2 className='mt-5'>Información de planes</h2>
      <p className='mt-3 mb-5'>Ingresá tu email y te enviaremos toda la información sobre nuestros planes de salud para tus mascotas</p>
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

        <Button className='mt-3' type="submit">Recibir información</Button>
      </Form>
    </>
  );
}

export default FormPlans;
