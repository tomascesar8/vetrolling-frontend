import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaSun, FaCloud, FaCloudSun, FaCloudMoon, FaCloudShowersHeavy, FaSnowflake, FaBolt, FaSmog, FaMoon } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { Row, Col, Container } from 'react-bootstrap';
import './Footer.css';
import logoNav from '../../../public/assets/images/logo-vetrolling-navbar.png'

export const Footer = () => {
  const api = {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    base: import.meta.env.VITE_WEATHER_API_BASE
  };

  const [weatherData, setWeatherData] = useState({
    location: '',
    temperature: '',
    condition: '',
    icon: ''
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&lang=es`);
        const data = await response.json();
        // console.log(data);
        // console.log(data.weather[0].icon);
        setWeatherData({
          location: capitalizeFirstLetter(data.name),
          temperature: `${Math.round(data.main.temp - 273.15)}°C`,
          condition: capitalizeFirstLetter(data.weather[0].description),
          icon: data.weather[0].icon
        });
        // console.log(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          error => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    
    getLocation();
    // console.log(weatherData);
  }, []);

  const mapConditionToIcon = (icon) => {
    switch (icon) {
      case '01d':
        return <FaSun />;
      case '01n':
        return <FaMoon />;
      case '02d':
        return <FaCloudSun />;
      case '02n':
        return <FaCloudMoon />;
      case '03d':
      case '03n':
        return <FaCloud />;
      case '04d':
      case '04n':
        return <FaCloudShowersHeavy />;
      case '09d':
      case '09n':
        return <FaCloudShowersHeavy />;
      case '10d':
        return <FaCloudSun />;
      case '10n':
        return <FaCloudMoon />;
      case '11d':
      case '11n':
        return <FaBolt />;
      case '13d':
      case '13n':
        return <FaSnowflake />;
      case '50d':
      case '50n':
        return <FaSmog />;
      default:
        return 'Sin información de clima disponible' // Cambia por el ícono por defecto que prefieras
    }
  };

  return (
    <Container fluid className="mt-5 pt-5 border-top">
      <Row className='contaier d-flex align-items-center justify-content-center'>
        <Col sm={12} md={4} lg={4} className="pb-0 pb-lg-5 ps-md-0 ps-lg-5 pe-lg-5 d-flex justify-content-center align-items-center mb-0 mb-sm-2 order-2 col-12">
          <div className='text-start text-sm-center pe-lg-5'>
            <p className="fs-5 my-2 py-4 py-sm-2 pt-5 pt-sm-4 d-flex flex-column text-start ps-lg-5">
              <span className='pe-2'>{weatherData.location} {mapConditionToIcon(weatherData.icon)}</span> 
               <span className='pe-2'>{weatherData.condition} {weatherData.temperature}</span>
            </p>
          </div>
        </Col>
        <Col sm={7} md={5} lg={4} className="d-flex flex-column justify-content-center align-items-center my-3 order-0 col-12">
          <a className="fw-bold fs-1 ms-xl-5 container-logo text-center">
            VETROLLING
            <img
              alt=""
              src={logoNav}
              width="50"
              height="47"
              className="mb-1 d-inline-block align-top align-bottom ms-1"
            />
          </a>
          <div className='d-flex flex-column align-items-center me-5 justify-content-center d-inline ps-3'>
            <a className="footer-info text-decoration-none fs-6 my-1 px-3 px-sm-0 py-1 my-0" href="https://maps.app.goo.gl/z88ZhBkdkcsoXQk7A" target="_blank">
              <IoLocationOutline className='mb-1 me-1' />Juan Crisóstomo Lafinur 4028
            </a>
            <a className="footer-info fs-6 my-1 py-1 my-0 text-decoration-none" href="tel:3511111111">
              <FaWhatsapp className='ms-sm-3 ms-lg-0 mb-1 me-1' />
              351-111-1111
            </a>
          </div>
        </Col>
        <Col sm={4} md={3} lg={3} className="pb-sm-5 ps-lg-5 icons-footer col-12 col-md-4 d-flex justify-content-evenly align-items-center order-1">
          <div className="container-icons-redes d-flex justify-content-between my-4 my-sm-0 ps-md-5">
            <div className="icons-redes footer-icon-insta text-light">
              <a className="icons-links-redes" href="/error404.html">
                <FaInstagram />
              </a>
            </div>
            <div className="icons-redes footer-icon-fb text-light">
              <a className="icons-links-redes" href="/error404.html">
                <FaFacebook />
              </a>
            </div>
            <div className="icons-redes footer-icon-whatsapp text-light">
              <a className="icons-links-redes" href="/error404.html">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </Col>
        <Col className="container-footer-bottom order-4 text-light text-center col-12 d-flex justify-content-center py-2 mt-2 bg-dark">
        <small>
          © 2024 <b>VetRolling</b> - Todos los Derechos Reservados.
        </small>
        </Col>
      </Row>
    </Container>
  );
};