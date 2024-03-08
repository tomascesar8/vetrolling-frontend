import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import Turnos from '../Turnos/AdminTurnos';
import { Link } from 'react-router-dom';


const AdminHome = () => {

  return (
    <>
      <NavbarBrand/>

      <Container className="mt-5">
        <Row>
          <Col>
            <h2>Bienvenido, Administrador</h2>
            <p className='fs-5 my-5'>
              Esta es tu página principal de administración. Aquí puedes encontrar un resumen de los turnos asignados.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Turnos showButtons={false} showNavbar={false}/>
          <Link to='/admin/appointments' className='btn btn-primary mt-4 fs-4'>
              Administrar turnos            
          </Link>
          </Col>
        </Row>          
      </Container>
    </>
  );
};

export default AdminHome;
