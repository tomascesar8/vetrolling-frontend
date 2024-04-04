import { useContext, useEffect } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { BiUserPin } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { LOGIN_VALUES } from '../../../constanst';
import { handleKeyDownForEmail, noSpacesKeyDown, validationLogin } from '../../../helpers/validations';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';

const LoginForm = () => {
  const { login, auth, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const { handleKeyUp, handleSubmit, values, errors } = useForm(LOGIN_VALUES, login, validationLogin);

  return (
    <>
      <div className="login-body">
        <div className="login-form">
          <BiUserPin className="login-icon" />
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Dirección de correo electrónico"
              className="mb-3 w-100"
            >
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                className={`login-input ${errors.email ? 'is-invalid' : ''}`}
                onKeyUp={handleKeyUp}
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="El email debe tener el formato nombre@dominio.tld"
                minLength={10}
                maxLength={30}
                onKeyDown={handleKeyDownForEmail}
                required
              />
              <Form.Control.Feedback type="invalid" className="invalid-login text-white fw-bold">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-4">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className={`login-input ${errors.password ? 'is-invalid' : ''}`}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                name="password"
                maxLength={30}
                title="Debe contener mínimo 6 caracteres (letras mayúsculas, minúsculas, números y caracteres especiales)"
                onKeyDown={noSpacesKeyDown}
                required
              />
              <Form.Control.Feedback type="invalid" className="invalid-login text-breack text-white fw-bold">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button className="btn-success fs-5" type="submit">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;