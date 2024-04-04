import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutUs = () => {
  const openPdf = () => {
    const pdfPath = "/assets/files/requisitos-proyecto-final.pdf";
    window.open(pdfPath, "_blank");
  };

  const openGithubRepo = (repoType) => {
    const frontendRepo = "https://github.com/tomascesar8/vetrolling-frontend";
    const backendRepo = "https://github.com/tomascesar8/vetrolling-backend";

    const repoUrl = repoType === "frontend" ? frontendRepo : backendRepo;
    window.open(repoUrl, "_blank");
  };

  const openTrelloBoard = () => {
    window.open("https://trello.com/b/p44SyR6V/vetrolling", "_blank");
  };

  return (
    <>
      <NavbarBrand />
      <Container className="mt-4 mt-md-5">
        <Row>
          <Col>
            <div className="container-description">
              <h2 className="title-about-us mt-2">
                <span className="title-about-proyect d-sm-inline fw-bold text-secondary">
                  PROYECTO FINAL{" "}
                </span>
                <span className="title-about-proyect d-sm-inline fw-bold text-secondary">
                  FULL STACK (MERN)
                </span>
                <span className="title-about-academy d-block pt-2 fs-3 fw-bolder">{`- ACADEMIA ROLLINGCODE SCHOOL -`}</span>
              </h2>
              <p className="parraf-about-us pt-5 pb-2 fs-4">
                <span className="fw-bolder">VetRolling</span> es una aplicación
                web para una veterinaria que{" "}
                <span className=" text-decoration-underline">
                  ofrece las siguientes funciones y características:
                </span>
              </p>
              <ul
                className="parraf-about-list"
                style={{
                  textAlign: "left",
                  fontSize: "1.1rem",
                  padding: 0,
                  margin: "10px auto",
                  width: "80%",
                }}
              >
                <li>
                  Conexión con backend y <span className="fw-bold">base de datos NoSQL</span><span className="fw-bold text-secondary fst-italic"> (MongoDB)</span>. 
                </li>
                <li>
                  Ruteo intuitivo <span className="fw-bold text-secondary fst-italic">(react-router-dom)</span> y manejo de estados para una navegación fluida. <span className="fw-bold text-secondary fst-italic">(useState & useEffect)</span>
                </li>
                <li>
                  <span>
                    Administración de usuarios y turnos (CRUD). <span className="fw-bold"><em><span className="fw-bold text-decoration-underline text-success text-uppercase">Se puede ingresar con usuario: <span className="fw-bold text-danger" style={{ textTransform: 'none' }}>admin@example.com (contraseña: Admin123#)</span> para probar estas funciones.</span></em></span>
                  </span> <span className="fw-bold text-secondary fst-italic">(axios)</span>
                </li>
                <li>
                  Registro de usuarios y login para <span className="fw-bold text-secondary fst-italic">usuarios y administradores</span>.
                </li>
                <li>
                  Gestión de tokens para una autenticación segura. <span className="fw-bold text-secondary fst-italic">(jsonwebtoken)</span>
                </li>
                <li>
                  Encryptación de contraseñas para la seguridad de información sensible. <span className="fw-bold text-secondary fst-italic">(bcrypt)</span>
                </li>
                <li>
                  Generación de contexto para optimizar la interacción entre componentes. <span className="fw-bold text-secondary fst-italic">(useContext)</span>
                </li>
                <li>Integración de API externa para el clima. <span className="fw-bold text-secondary fst-italic">(OpenWeather API)</span></li>
                <li>Envío automático de emails para notificaciones. <span className="fw-bold text-secondary fst-italic">(EmailJS API)</span></li>
                <li className="mb-5"><span className="fw-bold">App resposive</span> adaptada tanto a dispositivos móviles, tablets y pc de escritorio.</li>
                <hr className="text-secondary"/>
                
                <div className="mt-3 mt-sm-5">
                  <p>
                    <p className="mb-2 subtitle-about-us text-decoration-underline"><strong>Proyecto Frontend (deployado en Netlify):</strong></p>
                    <li>Tecnologías utilizadas: React con Vite </li>
                    <li>
                      Librerías npm: axios, react-router-dom, react-bootstrap,
                      bootstrap, react-icons, sonner, sweetalert2, emailjs
                    </li>
                  </p>
                  <p>
                    <p className="mb-2 subtitle-about-us text-decoration-underline"><strong>Proyecto Backend (deployado en Render):</strong></p>
                    <li>
                      Tecnologías utilizadas: Node.js con Express y MongoDB{" "}
                    </li>
                    <li>
                      Librerías npm: mongoose, express, bcrypt, cors, dotenv,
                      jsonwebtoken, morgan
                    </li>
                  </p>
                </div>

                <div className="links-proyect mt-5 mb-4">
                  <div className="requisitos mb-md-2">
                    <Button
                      className="me-2 mb-2 py-2 px-3 mb-md-0"
                      variant="success"
                      onClick={openPdf}
                    >
                      Requisitos del Proyecto (PDF)
                    </Button>
                    <Button
                      variant="primary mb-2 py-2 px-3 mb-md-0"
                      onClick={openTrelloBoard}
                    >
                      Ver Tablero de Trello
                    </Button>
                  </div>

                  <div className="repositorios-github">
                    <Button
                      variant="secondary"
                      className="mr-2 me-2 mb-2 py-2 px-3 mb-md-0"
                      onClick={() => openGithubRepo("frontend")}
                    >
                      Repositorio Frontend en GitHub
                    </Button>
                    <Button
                      className="mb-2 py-2 px-3 mb-md-0"
                      variant="secondary"
                      onClick={() => openGithubRepo("backend")}
                    >
                      Repositorio Backend en GitHub
                    </Button>
                  </div>
                </div>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="my-5 py-5 perfil d-flex justify-content-center align-items-center sticky-bottom">
        <div className="img-avatar-perfil me-md-4"></div>
        <div className="info-perfil ms-5 ms-sm-0">
          <p className="mb-0">
            Hola mi nombre es Tomás César.{" "}
            <span className="d-block d-sm-inline">
              Tengo 30 años y vivo en Córdoba, Argentina.
            </span>{" "}
            <br />
          </p>
          <div className="buttons-redes-perfil mt-1 mt-sm-4">
            <Button
              variant="success"
              className="mr-2 ms-3 me-2"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tomascesar-dev/",
                  "_blank"
                )
              }
            >
              <FaLinkedin /> LinkedIn
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                window.open("https://github.com/tomascesar8", "_blank")
              }
            >
              <FaGithub /> GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
