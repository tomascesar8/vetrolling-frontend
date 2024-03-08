import { Container, Row, Col, Image } from 'react-bootstrap';
import { ButtonType } from '../Button/ButtonType';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [imageSize, setImageSize] = useState({ width: 600, height: 600 });
  // console.log(imageSize);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 776) {
      // console.log(window.innerWidth);
      const newWidth = window.innerWidth * 0.8; // Example: 50% of screen width
      // console.log('ajuste pantalla', newWidth);
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
              <h2 className='hero-title text-left mt-1 mb-3 mb-sm-4 mt-xl-5 pt-1  pt-sm-5'>Comprometidos con la Salud y Felicidad de tus Mascotas</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-left mt-2 mb-2 mb-sm-3'>En VetRolling, nos comprometemos a ofrecer un lugar donde la salud y el bienestar de tus mascotas son lo primero. </p>
              <p>Nuestro equipo de expertos en salud de mascotas se asegurará de brindar un cuidado excepcional a tus mascotas, asegurándonos de que tus compañeros peludos vivan una vida plena y feliz.</p>
            </Col>
          </Row>
          <Row className='hero-buttons mt-5'>
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