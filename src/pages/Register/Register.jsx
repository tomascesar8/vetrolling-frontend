import React from 'react';
import { Container } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import RegisterForm from './components/RegisterForm';
import axiosClient from '../../config/axiosClient';
import './Register.css';
import Swal from 'sweetalert2';

const Register = ({ history }) => {
  const handleSubmit = async (values) => {
    try {
      const userResponse = await axiosClient.post('/users', values);
      console.log('Usuario registrado exitosamente:', userResponse.data);
      // Mostrar alerta de éxito con Sweetalert2
      await Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Usuario registrado correctamente!',
      });
      // Redirigir a la página de inicio de sesión
      history.push('/login');
    } catch (error) {
      console.error('Error al registrar el usuario:', error.response.data.message);
      // Mostrar alerta de error con Sweetalert2
      await Swal.fire({
        icon: 'error',
        title: 'Error al registrar el usuario',
        text: error.response.data.message,
      });
    }
  };

  return (
    <>
    <NavbarBrand/>
    <Container className='row' fluid>
      <RegisterForm onSubmit={handleSubmit} />
    </Container>
    </>
  );
};

export default Register;


// const Register = () => {
//   const handleSubmit = async (values) => {
//     console.log('VALUES SUBMIT',values);
//     try {
//       console.log('entra');
//       console.log(values);
//       const userResponse = await axiosClient.post('/users', values);
//       console.log('Usuario registrado exitosamente:', userResponse.data);
//     } catch (error) {
//       console.error('Error al registrar el usuario:', error.response.data.message);
//     }
//   };

// const Register = () => {
//   const handleSubmit = async (values) => {
//     try {
//       const userResponse = await axiosClient.post('/users', values);
//       console.log('Usuario registrado exitosamente:', userResponse.data);
//       // Mostrar alerta de éxito con Sweetalert2
//       Swal.fire({
//         icon: 'success',
//         title: 'Registro exitoso',
//         text: '¡Usuario registrado correctamente!',
//       });
//     } catch (error) {
//       console.error('Error al registrar el usuario:', error.response.data.message);
//       // Mostrar alerta de error con react-toastify
//       toast.error('Error al registrar el usuario: ' + error.response.data.message);
//     }
//   };