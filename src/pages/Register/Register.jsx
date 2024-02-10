import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import RegisterForm from './components/RegisterForm';
import axiosClient from '../../config/axiosClient';

const Register = () => {
  const handleSubmit = async (values) => {
    console.log('VALUES SUBMIT',values);
    try {
      // Realiza la petición POST para crear la mascota
      console.log('entra');
      console.log(values);
      // const petResponse = await axiosClient.post('/pets', values.pet);
      // console.log('PET RESPONSE',petResponse);
      // const petId = petResponse.data.pet._id;
      // console.log('1',petId);

      // // Agrega el ID de la mascota al objeto de usuario
      // values.pet = petId;
      // // Realiza la petición POST para crear el usuario
      const userResponse = await axiosClient.post('/users', values);

      console.log('Usuario registrado exitosamente:', userResponse.data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.response.data.message);
    }
  };

  return (
    <>
    <NavbarBrand/>
    <Container>
      <h2>Registro</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </Container>
    </>
  );
};

export default Register;
