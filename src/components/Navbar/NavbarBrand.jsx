import React, { useContext, useEffect } from 'react';
import './NavbarBrand.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const NavbarBrand = () => {  
  const { pathname } = useLocation();
  const { logout, user, auth, getAuth } = useContext(UserContext);

  // Llamada a getAuth inmediatamente para actualizar el estado
  useEffect(() => {
    getAuth();
  }, []);

  const isLoginPage = pathname === '/login';

  return (
    <>
      <Navbar expand="xxl" sticky="top" className="bg-dark bg-gradient bg-opacity-85 pt-4 pb-4 ">
        <Container>
          <Link to="/" className='text-decoration-none'>
            <Navbar.Brand className='title-logo text-white fw-bolder'>
              VETROLLING
              <img
                alt=""
                src="/public/assets/images/logo-vetrolling-navbar.png"
                width="40"
                height="35"
                className="d-inline-block align-top align-bottom ms-1"
              />
            </Navbar.Brand>
          </Link>
          {isLoginPage ? (
            <Navbar.Collapse className="justify-content-end" id="navbarNav">
              <Nav className="ml-auto">
                <Link to="/register" className='text-white btn bg-info bg-opacity-75 fw-bold'>
                  <span className="px-2">Registro</span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <>
              <Navbar.Toggle aria-controls="navbarNav" className="text-white border-0 navbar-toggle">
                <span style={{ color: 'white'}}>&#9776;</span>
              </Navbar.Toggle>
              <Navbar.Collapse className="justify-content-end" id="navbarNav">
                <Nav className="ml-auto">
                  {user ? (
                    user.role === 'admin' ? (
                        <>
                          <Link to="/appointments" className='text-white nav-link'>Turnos</Link>
                          <Link to="/login" onClick={logout} className="nav-link fw-bold btn bg-danger text-white ms-3">
                            <span className="px-2">Cerrar sesión</span>
                          </Link>
                          <p>{user.role}</p>
                        </>
                    ) : (
                      <>
                        <Link to="/home" className='text-white nav-link'>Inicio</Link>
                        <Link to="/appointments" className='text-white nav-link'>Turnos</Link>
                        <Link to="/about-us" className='text-white nav-link'>Sobre nosotros</Link>
                        <Link to="/contact" className='text-white nav-link'>Contacto</Link>
                        <Link to="/login" onClick={logout} className="nav-link fw-bold btn bg-danger text-white ms-3">
                          <span className="px-2">Cerrar sesión</span>
                        </Link>
                        <p>{user.role}</p>
                      </>
                    )
                    ) : (
                    <>
                      <Link to="/contact" className='text-white nav-link'>Contacto</Link>
                      <Link to="/about-us" className='text-white nav-link ms-2'>Sobre nosotros</Link>
                      <Link to="/login" className="nav-link text-white fw-bold bg-info bg-opacity-75 btn ms-3">
                        <span className="px-2">Iniciar sesión</span>
                      </Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};







// import React, { useContext, useEffect } from 'react';
// import './NavbarBrand.css';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';

// export const NavbarBrand = () => {
//   const { pathname } = useLocation();
//   const { logout, user, auth } = useContext(UserContext);

//   useEffect(() => {
//     console.log(user, auth); // Verifica el estado del usuario y la autenticación
//   }, [user, auth]);

//   const isLoginPage = pathname === '/login';

//   return (
//     <>
//       <Navbar expand="lg" sticky="top" className="bg-dark bg-gradient bg-opacity-85 p-3">
//         <Container>
//           <Link to="/" className='text-decoration-none'>
//             <Navbar.Brand className='title-logo text-white fw-bolder'>
//               VETROLLING
//               <img
//                 alt=""
//                 src="/public/assets/images/logo-vetrolling-navbar.png"
//                 width="40"
//                 height="35"
//                 className="d-inline-block align-top align-bottom ms-1"
//               />{' '}
//             </Navbar.Brand>
//           </Link>
//           {isLoginPage ? (
//             <Navbar.Collapse className="justify-content-end" id="navbarNav">
//               <Nav className="ml-auto">
//                 <Link to="/register" className='text-white btn bg-info bg-opacity-75 fw-bold'>
//                   <span className="px-2">Crear usuario</span>
//                 </Link>
//               </Nav>
//             </Navbar.Collapse>
//           ) : (
//             <>
//               <Navbar.Toggle aria-controls="navbarNav" className="text-white border-0 navbar-toggle">
//                 <span style={{ color: 'white'}}>&#9776;</span>
//               </Navbar.Toggle>
//               <Navbar.Collapse className="justify-content-end" id="navbarNav">
//                 <Nav className="ml-auto">
//                   {user ? (
//                     <>
//                       <Link to="/home" className='text-white nav-link'>Inicio</Link>
//                       <Link to="/turns" className='text-white nav-link'>Turnos</Link>
//                       <Link to="/about-us" className='text-white nav-link'>Sobre nosotros</Link>
//                       <Link to="/contact" className='text-white nav-link'>Contacto</Link>
//                       <Link to="/login" onClick={logout} className="nav-link fw-bold btn bg-danger text-white ms-3">
//                         <span className="px-2">Cerrar sesión</span>
//                       </Link>
//                     </>
//                   ) : (
//                     <>
//                       <Link to="/contact" className='text-white nav-link'>Contacto</Link>
//                       <Link to="/about-us" className='text-white nav-link ms-2'>Sobre nosotros</Link>
//                       <Link to="/login" className="nav-link text-white fw-bold bg-info bg-opacity-75 btn ms-3">
//                         <span className="px-2">Iniciar sesión</span>
//                       </Link>
//                     </>
//                   )}
//                 </Nav>
//               </Navbar.Collapse>
//             </>
//           )}
//         </Container>
//       </Navbar>
//     </>
//   );
// };
