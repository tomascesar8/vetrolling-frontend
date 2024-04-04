import { Container } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import RegisterForm from './components/RegisterForm';
import axiosClient from '../../config/axiosClient';
import './Register.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const userResponse = await axiosClient.post('/users', values);
      await Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Usuario registrado correctamente!',
      })
      navigate('/login');
    } catch (error) {
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