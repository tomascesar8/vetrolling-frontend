import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import Turnos from '../Turnos/AdminTurnos';
import { Link } from 'react-router-dom';
import './AdminHome.css';


const AdminHome = () => {

  return (
    <>
      <NavbarBrand/>

      <Container className="container-admin-home mt-4 pt-2 pt-sm-2 mt-sm-5 ">
        <Row>
          <Col className='title-admin-home'>
            <h2 className='mb-md-4'>Bienvenido, Administrador</h2>
            <p className='fs-5 mt-mb-4 mb-md-5'>
              Aquí puedes encontrar un resumen de los turnos asignados.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Turnos showButtons={false} showNavbar={false} />
          <Link to='/admin/appointments' className='btn-admin-home-turnos btn btn-primary '>
              Administrar turnos            
          </Link>
          </Col>
        </Row>          
      </Container>
    </>
  );
};

export default AdminHome;
