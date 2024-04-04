import { Form, Button, FloatingLabel, Container } from 'react-bootstrap';
import useForm from '../../../hooks/useForm';
import { handleKeyDown, handleKeyDownForEmail, noSpacesKeyDown, validationRegister } from '../../../helpers/validations';

const RegisterForm = ({ onSubmit }) => {
  const initialValues = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    pet: {
      nombre: '',
      especie: '',
      raza: ''
    }
  };

  const {
    handleKeyUp,
    handleSubmit,
    values,
    errors
  } = useForm(initialValues, onSubmit, validationRegister);

  return (
    <>
    <Form onSubmit={handleSubmit} className='form-register col-10 col-md-8 col-lg-6 mt-4 mt-sm-5'>
    <h2 className='mt-2 mb-3'>Creá tu cuenta</h2>
      <Container className="container-form d-flex flex-wrap">
        <FloatingLabel controlId="nombre" label="Nombre" className="register-input col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleKeyUp}
            isInvalid={!!errors.nombre}
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="email" label="Correo Electrónico" className="register-input  col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={values.email}
            onChange={handleKeyUp}
            isInvalid={!!errors.email}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="El email debe tener el formato 'nombre@dominio.tld'"
            minLength={10}
            maxLength={30}
            onKeyDown={handleKeyDownForEmail}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="password" label="Contraseña" id='register-input-pass' className="register-input col-10 col-sm-5 m-sm-2">
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={values.password}
            onChange={handleKeyUp}
            isInvalid={!!errors.password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
            title="La contraseña debe tener al menos 6 caracteres y contener letras mayúsculas, minúsculas, números y caracteres especiales"
            onKeyDown={noSpacesKeyDown}
            required
            maxLength={30}
            className="mb-0"
          />
          <p variant="success" className="text-success text-start my-0 alert-input-password">
            *Al menos 6 caracteres (mayúsculas, minúsculas, números y caracteres especiales)
          </p>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="confirmPassword" label="Repetir Contraseña" className="register-input  col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="password"
            placeholder="Repite tu contraseña"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleKeyUp}
            isInvalid={!!errors.confirmPassword}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
            title="La contraseña debe tener al menos 6 caracteres y contener letras mayúsculas, minúsculas, números y caracteres especiales"
            onKeyDown={noSpacesKeyDown}
            required
            maxLength={30}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="pet_nombre" label="Nombre de la Mascota" className="register-input  col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre de la mascota"
            name="pet.nombre"
            value={values.pet.nombre}
            onChange={handleKeyUp}
            isInvalid={!!errors['pet.nombre']}
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors['pet.nombre']}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="pet_especie" label="Especie de la Mascota" className="register-input  col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="text"
            placeholder="Ingresa la especie de la mascota"
            name="pet.especie"
            value={values.pet.especie}
            onChange={handleKeyUp}
            isInvalid={!!errors['pet.especie']}
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors['pet.especie']}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="pet_raza" label="Raza de la Mascota" className="register-input col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="text"
            placeholder="Ingresa la raza de la mascota"
            name="pet.raza"
            value={values.pet.raza}
            onChange={handleKeyUp}
            isInvalid={!!errors['pet.raza']}
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors['pet.raza']}
          </Form.Control.Feedback>
        </FloatingLabel>
        <Button className='button-register ms-4 px-3 fw-bold' variant="success" type="submit">
          Registrarse
        </Button>
      </Container>
    </Form>
    </>
  );
};

export default RegisterForm