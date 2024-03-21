import React from 'react';
import { Form, Button, FloatingLabel, Container } from 'react-bootstrap';
import useForm from '../../../hooks/useForm';

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

  const validation = (values) => {
    const errors = {};

    if (!values.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio';
    } else if (values.nombre.trim().length < 3 || values.nombre.trim().length > 50) {
      errors.nombre = 'El nombre debe tener entre 3 y 50 caracteres';
    }

    if (!values.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      errors.email = 'Ingresa un email válido';
    }

    if (!values.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (values.password.length < 6 || values.password.length > 30) {
      errors.password = 'La contraseña debe tener entre 6 y 30 caracteres';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!values.pet || !values.pet.nombre) {
      errors['pet.nombre'] = 'El nombre de la mascota es obligatorio';
    } else if (values.pet.nombre.length < 3 || values.pet.nombre.length > 50) {
      errors['pet.nombre'] = 'El nombre de la mascota debe tener entre 3 y 50 caracteres';
    }

    if (!values.pet || !values.pet.especie) {
      errors['pet.especie'] = 'La especie de la mascota es obligatoria';
    } else if (values.pet.especie.length < 3 || values.pet.especie.length > 20) {
      errors['pet.especie'] = 'La especie de la mascota debe tener entre 3 y 20 caracteres';
    }

    if (!values.pet || !values.pet.raza) {
      errors['pet.raza'] = 'La raza de la mascota es obligatoria';
    } else if (values.pet.raza.length < 3 || values.pet.raza.length > 20) {
      errors['pet.raza'] = 'La raza de la mascota debe tener entre 3 y 20 caracteres';
    }

    console.log('Validation errors:', errors);

    return errors;
  };

  const {
    handleKeyUp,
    handleSubmit,
    values,
    errors
  } = useForm(initialValues, onSubmit, validation);

  return (
    <>
    <Form onSubmit={handleSubmit} className='form-register col-10 col-md-8 col-lg-6 mt-4 mt-sm-5'>
    <h2 className='mt-2 mb-3'>Creá tu cuenta</h2>
    {/* <h5 className='text-center my-3 fst-italic'>Creá tu cuenta en VetRolling</h5> */}
      <Container className="container-form d-flex flex-wrap">
        <FloatingLabel controlId="nombre" label="Nombre" className="register-input col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleKeyUp}
            isInvalid={!!errors.nombre}
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
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="password" label="Contraseña" className="register-input  col-10 col-sm-5  m-sm-2">
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={values.password}
            onChange={handleKeyUp}
            isInvalid={!!errors.password}
          />
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
          />
          <Form.Control.Feedback type="invalid">
            {errors['pet.raza']}
          </Form.Control.Feedback>
          {/* {console.log('Pet Raza:', values.pet.raza)} */}
        </FloatingLabel>
        <Button className='button-register px-3 fw-bold' variant="success" type="submit">
          Registrarse
        </Button>
      </Container>
    </Form>
    </>
  );
};

export default RegisterForm