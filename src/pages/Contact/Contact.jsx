import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function ContactForm() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61gwtub', 'template_oy01xx8', form.current, 'Z7hiBlvulC2bzTysE')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success', 
            title: 'Mensaje Enviado',
            text: 'Gracias por contactarnos. Le responderemos a la brevedad.',
            timer: 5000, 
            timerProgressBar: true, 
          }).then(() => {
            navigate('/'); 
          });
      }, (error) => {
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
      <Form className='contact-form mx-4 mx-sm-auto' ref={form} onSubmit={sendEmail}>
        <h2 className='text-center pt-2'>Dejanos tu consulta</h2>
        <h5 className='text-center mt-4 mb-5 fst-italic'>Nos pondremos en contacto a la brevedad</h5>
        <FloatingLabel 
          controlId="floatingName" 
          label="Nombre" 
          className="mb-3 mx-4"
        >
          <Form.Control name="from_name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label="Email" 
          className="mb-3 mx-4"  
          >
          <Form.Control name="reply_to" type="email" />
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
          />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>

      </Form>
    </>
  );
}