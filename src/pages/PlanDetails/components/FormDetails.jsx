import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./../PlansDetails.css";
import { handleInputForPhone, handleKeyDown, handleKeyDownForEmail } from "../../../helpers/validations";

const FormPlans = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Gracias por tu consulta. Te enviamos un email con toda la información y pronto nos pondremos en contacto contigo.",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error.text);
        Swal.fire({
          icon: "error",
          title: "Error al enviar el mensaje",
          text: "Hubo un problema al enviar tu consulta. Por favor, inténtalo nuevamente.",
        });
      });
  };

  return (
    <>
      <h2 className="mt-1 mb-2 mt-sm-2 mb-sm-3">Información de planes</h2>
      <p className="subtitle-plans mt-3 mt-sm-4  mb-3 mb-sm-5 fs-6">
        Te enviaremos toda la información sobre nuestros planes de salud para
        tus mascotas
      </p>
      <Form
        ref={form}
        onSubmit={sendEmail}
        className="form-plans d-flex flex-column text-start"
      >
        <FloatingLabel className="mb-3" controlId="from_name" label="Nombre">
          <Form.Control 
            type="text" 
            name="from_name" 
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            
            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required 
            />
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="destinatario" label="Email">
          <Form.Control 
            type="email" 
            name="destinatario"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="El email debe tener el formato 'nombre@dominio.tld'"
            minLength={10}
            maxLength={30}
            onKeyDown={handleKeyDownForEmail}
            required  
            />
        </FloatingLabel>

        <FloatingLabel
          className="mb-3"
          controlId="phone"
          label="Teléfono de contacto"
        >
          <Form.Control 
            type="tel" 
            name="phone" 
            onInput={handleInputForPhone}
            minLength={10}
            maxLength={20}
            pattern="[0-9][0-9 ]*"
            title="Solo se aceptan digitos (min 10, max 20 caracteres)"
            required 
            />
        </FloatingLabel>

        <Button className="btn btn-primary mt-3 mx-auto mt-3" type="submit">
          Recibir información
        </Button>
      </Form>
    </>
  );
};

export default FormPlans;
