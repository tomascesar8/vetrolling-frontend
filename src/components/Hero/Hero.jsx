import { Container, Row, Col, Image } from 'react-bootstrap';
import { ButtonType } from '../Button/ButtonType';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [imageSize, setImageSize] = useState({ width: 600, height: 600 });
  console.log(imageSize);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 776) {
      console.log(window.innerWidth);
      const newWidth = window.innerWidth * 0.8; // Example: 50% of screen width
      console.log('ajuste pantalla', newWidth);
      setImageSize({ width: newWidth, height: newWidth }); // Keep the aspect ratio square
    } else {
      setImageSize({ width: 550, height: 550 }); // Default size for larger screens
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Set initial size
  
  // Cleanup listener on component unmount
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <Container className='container container-hero d-flex justify-content-center pt-4 p-0'>
    <Row className='col-12'>
      <Col>
        <Image
          src="/public/assets/images/logo-vetrolling-removebg-preview.png"
          width={imageSize.width}
          height={imageSize.height}
          alt="VetRolling Logo"
          rounded
          className='p-0'
        />
      </Col>
      <Col>
        <Container>
          <Row className='col-12'>
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