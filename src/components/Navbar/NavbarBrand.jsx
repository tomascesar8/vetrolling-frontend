// import { useContext } from 'react';
// import './NavbarBrand.css';
// // import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';

// // import Login from '../../pages/Login/Login';
// // import { ButtonType } from '../Button';
// // import { Logout } from '../Logout';

// export const NavbarBrand = () => {
//   // const [showComponent, setShowComponent] = useState(false);
//   // const [user, setUser] = useState(null);
//   // const { isLogin } = useReduceLogin();
//   const { pathname } = useLocation();
//   const { logout, user } = useContext( UserContext )

//   // const handleClick = () => {
//   //   setShowComponent(!showComponent);
//   // };

//   // useEffect(() => {
//   //   const userFromStorage = localStorage.getItem('user');
//   //   if (userFromStorage) {
//   //     setUser(JSON.parse(userFromStorage));
//   //   }
//   // }, [isLogin]);

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
//                 <Link to="/register" className='text-white btn bg-info bg-opacity-75 fw-bold'>Crear usuario</Link>
//               </Nav>
//             </Navbar.Collapse>
//           ) : (
//             <>
//               <Navbar.Toggle aria-controls="navbarNav" className="text-white border-0 navbar-toggle">
//                 <span style={{ color: 'white'}}>&#9776;</span>
//               </Navbar.Toggle>
//               <Navbar.Collapse className="justify-content-end" id="navbarNav">
//                 <Nav className="ml-auto">
//                   <Link to="/home" className='text-white nav-link'>Inicio</Link>
//                   <Link to="/turns" className='text-white nav-link'>Turnos</Link>
//                   <Link to="/products" className='text-white nav-link'>Productos</Link>
//                   <Link to="/contact" className='text-white nav-link'>Contacto</Link>
//                   <Navbar.Brand className='text-white ml-auto'>
//                     {/* {isLogin ? 'Bienvenido, ' + user?.name : ''} */}
//                   </Navbar.Brand>
//                   {user ? 
//                     <Link to="/login" onClick={logout} className="nav-link btn bg-danger text-white">Cerrar sesión</Link>
//                   : 
//                     <Link to="/login" className="nav-link text-white fw-bold bg-info bg-opacity-75 btn d-flex align-items-center"><span className="px-2">Ingresar</span> </Link>
//                   }
//                   {/* {isLogin ? <Logout /> : <ButtonType types='primary' handleClick={handleClick} className="btn-login fw-bold bg-info bg-opacity-75">Iniciar sesión</ButtonType>} */}
//                 </Nav>
//               </Navbar.Collapse>
//             </>
//           )}
//         </Container>
//       </Navbar>
//       {/* {showComponent && <Login />} */}
//     </>
//   );
// };






import React, { useContext } from 'react';
import './NavbarBrand.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const NavbarBrand = () => {
  const { pathname } = useLocation();
  const { logout, user } = useContext(UserContext);

  const isLoginPage = pathname === '/login';

  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-dark bg-gradient bg-opacity-85 p-3">
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
              />{' '}
            </Navbar.Brand>
          </Link>
          {isLoginPage ? (
            <Navbar.Collapse className="justify-content-end" id="navbarNav">
              <Nav className="ml-auto">
                <Link to="/register" className='text-white btn bg-info bg-opacity-75 fw-bold'>
                  <span className="px-2">Crear usuario</span>
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
                    <>
                      <Link to="/home" className='text-white nav-link'>Inicio</Link>
                      <Link to="/turns" className='text-white nav-link'>Turnos</Link>
                      <Link to="/about-us" className='text-white nav-link'>Sobre nosotros</Link>
                      <Link to="/contact" className='text-white nav-link'>Contacto</Link>
                      <Link to="/login" onClick={logout} className="nav-link fw-bold btn bg-danger text-white ms-3">
                        <span className="px-2">Cerrar sesión</span>
                      </Link>
                    </>
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
