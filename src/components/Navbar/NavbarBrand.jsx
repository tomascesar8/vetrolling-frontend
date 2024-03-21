import React, { useContext, useEffect } from 'react';
import './NavbarBrand.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Cambio a NavLink para usar activeClassName
import { UserContext } from '../../context/UserContext';
import {logo} from '../../../public/assets/images/logo-vetrolling-navbar.png'

export const NavbarBrand = () => {
  const { pathname } = useLocation();
  const { logout, user, auth, getAuth } = useContext(UserContext);
  // console.log(user);

  // Llamada a getAuth inmediatamente para actualizar el estado
  useEffect(() => {
    getAuth();
  }, []);

  const isLoginPage = pathname === '/login';

  return (
    <>
      <Navbar expand={isLoginPage ? true : "xl"} sticky="top" className="bg-dark bg-gradient py-3  py-sm-4 py-md-4 py-xl-3">
        <Container>
          <Link to="/" className='text-decoration-none'>
            <Navbar.Brand className='title-logo text-white fw-bolder ps-3 ps-sm-0'>
              VETROLLING
              <img
                alt=""
                src={logo}
                width="38"
                height="31"
                className="d-inline-block align-top align-bottom ms-1"
              />
            </Navbar.Brand>
          </Link>
          {isLoginPage ? (
            <Navbar.Collapse className="justify-content-end me-3" id="navbarNav">
              <Nav className="ml-auto p-0">
                <Link to="/register" className='register-button'>
                  <span className="px-2 btn text-white bg-info bg-opacity-75">Registro</span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <>
              <Navbar.Toggle aria-controls="navbarNav" className=" border-0 navbar-toggle pe-4">
                <span style={{ color: 'white' }}>&#9776;</span>
              </Navbar.Toggle>
              <Navbar.Collapse className="justify-content-end" id="navbarNav">
                <Nav className="ml-auto">
                  {user ? (
                    user.role === 'admin' ? (
                      <>
                        <NavLink to="/admin/home" className=' nav-link' activeClassName="active">Admin Home</NavLink>
                        <NavLink to="/admin/users" className=' nav-link' activeClassName="active">Gestionar Usuarios</NavLink>
                        <NavLink to="/admin/appointments" className=' nav-link' activeClassName="active">Gestionar Turnos</NavLink>
                        <Link to="/login" onClick={logout} className="nav-link text-white btn bg-danger  ms-3">
                          <span className="px-2">Cerrar sesión</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <NavLink to="/appointments" className=' nav-link' activeClassName="active">Mis Turnos</NavLink>
                        <NavLink to="/info-plans" className=' nav-link' activeClassName="active">Planes Disponibles</NavLink>
                        <NavLink to="/contact" className=' nav-link' activeClassName="active">Contacto</NavLink>
                        <NavLink to="/about-us" className=' nav-link' activeClassName="active">Sobre nosotros</NavLink>
                        <Link to="/login" onClick={logout} className="nav-link text-white btn bg-danger  ms-3">
                          <span className="px-2">Cerrar sesión</span>
                        </Link>
                      </>
                    )
                  ) : (
                    <>
                      <NavLink to="/info-plans" className=' nav-link' activeClassName="active">Planes Disponibles</NavLink>
                      <NavLink to="/contact" className=' nav-link' activeClassName="active">Contacto</NavLink>
                      <NavLink to="/about-us" className=' nav-link ms-2' activeClassName="active">Sobre nosotros</NavLink>
                      <Link to="/login" className="nav-link text-white bg-info bg-opacity-75 btn ms-3">
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
