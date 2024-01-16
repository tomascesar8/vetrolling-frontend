import { Container, Row, Col, Image } from 'react-bootstrap';
import { ButtonType } from '../Button/ButtonType';

export const Hero = () => {
  return (
    <Container className='container-hero pt-4'>
    <Row className='mt-5'>
      <Col>
        <Image 
          src="/public/assets/images/logo-vetrolling-removebg-preview.png" 
          width={600}
          height={600}
          alt="171x180" 
          rounded />
      </Col>
      <Col>
        <Container>
          <Row>
            <Col>
              <h1 className='text-left mt-5 pt-5'>Comprometidos con la Salud y Felicidad de tus Mascotas</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-left mt-2'>En VetRolling, nos comprometemos a ofrecer un lugar donde la salud y el bienestar de tus mascotas son lo primero. </p>
              <p>Nuestro equipo de expertos en salud de mascotas se asegurará de brindar un cuidado excepcional a tus mascotas, asegurándonos de que tus compañeros peludos vivan una vida plena y feliz.</p>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col className='ms-2'>
              <ButtonType 
                types='button' 
                className='me-3'
              >
                ACCION1
              </ButtonType>
              <ButtonType 
                types='button' 
                className='bg-secondary me-3'
              >
                ACCION2
              </ButtonType>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  )
}