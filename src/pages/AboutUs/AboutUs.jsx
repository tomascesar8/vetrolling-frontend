// import { NavbarBrand } from '../../components/Navbar/NavbarBrand';

// import React from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';

// const AboutUs = () => {

//   const openPdf = () => {
//     // 1. Crear un elemento <a> en JS para abrir/descargar el archivo PDF
//     const link = document.createElement('a');<z>  </z>
//     // console.log(process.env.PUBLIC_URL);
//     // 2. Asignar la ruta del archivo PDF al atributo href del elemento <a>
//     link.href = './../../../public/assets/files/requisitos-proyecto-final.pdf';

//     // 3. Asignar el método download al atributo download del elemento <a>
//     // esto indica que el archivo debe ser descargado en lugar de abrirse en la ventana actual
//     link.target = '_blank';

//     // 4. Hacer clic en el elemento <a> para abrir/descargar el archivo PDF
//     link.click();

//     // 5. Eliminar el elemento <a> una vez que se ha hecho clic sobre él
//     // esto es necesario para que el archivo se descargue correctamente sin mostrar un error en la consola de Chrome
//     document.body.removeChild(link);
//   };

//   const openGithubRepo = (repoType) => {
//     // Lógica para abrir la pestaña con el repositorio de GitHub
//     const frontendRepo = 'https://github.com/tomascesar8/vetrolling-frontend';
//     const backendRepo = 'https://github.com/tomascesar8/vetrolling-backend';
    
//     const repoUrl = repoType === 'frontend' ? frontendRepo : backendRepo;
//     window.open(repoUrl, '_blank');
//   };

//   const openTrelloBoard = () => {
//     // Lógica para abrir el enlace del tablero de Trello
//     window.open('https://trello.com/b/p44SyR6V/vetrolling', '_blank');
//   };

//   return (
//     <>
//     <NavbarBrand />
//     <Container className="mt-5">
//       <Row>
//         <Col>
//           <h2>Proyecto Final: RollingVet</h2>
//           <p>
//             El objetivo del sistema RollingVet es administrar la carga y gestión de pacientes y reserva de turnos
//             de una veterinaria. Además, se muestra información de la veterinaria, servicios y productos que ofrece.
//           </p>
//           <p>
//             <strong>Requisitos Técnicos:</strong>
//             <br />
//             <ul>
//               <li>Panel de Trello (incluye mockup), repositorio de GitHub o GitLab.</li>
//               <li>FrontEnd: React y react-bootstrap.</li>
//               <li>Backend: Node.js, Express y MongoDB.</li>
//             </ul>
//           </p>
//           {/* Agregar botón para abrir/descargar el archivo PDF */}
//           <Button variant="primary" onClick={openPdf}>
//             Ver/Descargar Requisitos del Proyecto (PDF)
//           </Button>
//           <br />
//           <br />
//           {/* Agregar botones/enlaces para repositorios de GitHub */}
//           <Button variant="secondary" className="mr-2" onClick={() => openGithubRepo('frontend')}>
//             Repositorio Frontend en GitHub
//           </Button>
//           <Button variant="secondary" onClick={() => openGithubRepo('backend')}>
//             Repositorio Backend en GitHub
//           </Button>
//           <br />
//           <br />
//           {/* Agregar enlace para visualizar el tablero de Trello */}
//           <Button variant="info" onClick={openTrelloBoard}>
//             Ver Tablero de Trello
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   );
// };

// export default AboutUs;



import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {

  const openPdf = () => {
    const pdfPath = '/assets/files/requisitos-proyecto-final.pdf';
    window.open(pdfPath, '_blank');
  };

  const openGithubRepo = (repoType) => {
    const frontendRepo = 'https://github.com/tomascesar8/vetrolling-frontend';
    const backendRepo = 'https://github.com/tomascesar8/vetrolling-backend';
    
    const repoUrl = repoType === 'frontend' ? frontendRepo : backendRepo;
    window.open(repoUrl, '_blank');
  };

  const openTrelloBoard = () => {
    window.open('https://trello.com/b/p44SyR6V/vetrolling', '_blank');
  };

  return (
    <>
      <NavbarBrand />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>Proyecto Final: VetRolling</h2>
            <p>
              VetRolling es el proyecto final del curso Full Stack MERN de la Academia RollingCode School. <br />
              Se trata de una aplicación web para una veterinaria que ofrece las siguientes funciones y características:
              <ul style={{ textAlign: 'left', padding: 0, margin: 'auto', width: '50%' }}>
                <li>Conexión con backend y base de datos NoSQL (MongoDB) para un rendimiento sólido.</li>
                <li>Ruteo intuitivo y manejo de estados para una navegación fluida.</li>
                <li>Administración de usuarios y turnos (CRUD).</li>
                <li>Registro de usuarios y login para una gestión segura (perfiles de usuario y administrador).</li>
                <li>Autenticación segura y gestión de tokens para la protección de datos.</li>
                <li>Encryptación de contraseñas para garantizar la seguridad de la información sensible.</li>
                <li>Generación de contexto para optimizar la interacción entre componentes.</li>
                <li>Integración de API externa para el clima.</li>
                <li>Envío automático de emails para notificaciones.</li>
              </ul>
              {/* Se trata de una aplicación web para una veterinaria con funcionalidades como registro de usuarios, login, 
              administración de usuarios y turnos, integración de API externa para el clima, y envío automático de emails. ruteo, manejo de estados, generacion de contexto, conexion con backend y base de datos NoSQL (MongoDB), autenticación y gestión de token, encryptación de contraseñas. */}
            </p>
            <p>
              <strong>Proyecto Frontend (deployado en Netlify):</strong>
              <br />
              Tecnologías utilizadas: React con Vite
              <ul>
                <li>Librerías npm: axios, react-router-dom, react-bootstrap, bootstrap, react-icons, sonner, sweetalert2, emailjs</li>
              </ul>
            </p>
            <p>
              <strong>Proyecto Backend (deployado en Render):</strong>
              <br />
              Tecnologías utilizadas: Node.js con Express y MongoDB
              <ul>
                <li>Librerías npm: mongoose, express, bcrypt, cors, dotenv, jsonwebtoken, morgan</li>
              </ul>
            </p>
            <p>
              <strong>Información Personal:</strong>
              <br />
              Nombre: Tomás Cesar
              <br />
              Edad: 30 años
              <br />
              Ubicación: Córdoba, Argentina
            </p>
            <p>
              <strong>Contacto:</strong>
              <br />
              <Button variant="success" className="mr-2" onClick={() => window.open('https://www.linkedin.com/in/tomascesar-dev/', '_blank')}>
                <FaLinkedin /> LinkedIn
              </Button>
              <Button variant="dark" onClick={() => window.open('https://github.com/tomascesar8', '_blank')}>
                <FaGithub /> GitHub
              </Button>
            </p>
            <Button variant="primary" onClick={openPdf}>
              Ver/Descargar Requisitos del Proyecto (PDF)
            </Button>
            <br />
            <br />
            <Button variant="secondary" className="mr-2" onClick={() => openGithubRepo('frontend')}>
              Repositorio Frontend en GitHub
            </Button>
            <Button variant="secondary" onClick={() => openGithubRepo('backend')}>
              Repositorio Backend en GitHub
            </Button>
            <br />
            <br />
            <Button variant="info" onClick={openTrelloBoard}>
              Ver Tablero de Trello
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
