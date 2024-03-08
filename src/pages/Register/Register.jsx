import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import RegisterForm from './components/RegisterForm';
import axiosClient from '../../config/axiosClient';
import './Register.css';

const Register = () => {
  const handleSubmit = async (values) => {
    console.log('VALUES SUBMIT',values);
    try {
      console.log('entra');
      console.log(values);
      const userResponse = await axiosClient.post('/users', values);
      console.log('Usuario registrado exitosamente:', userResponse.data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.response.data.message);
    }
  };

  return (
    <>
    <NavbarBrand/>
    <Container fluid>
      <RegisterForm onSubmit={handleSubmit} />
    </Container>
    </>
  );
};

export default Register;
