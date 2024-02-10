// import { Alert } from 'react-bootstrap';
// import { useContext, useEffect } from 'react';
// import { FloatingLabel, Form, Button } from 'react-bootstrap';
// import {BiUserPin} from 'react-icons/bi'
// import './LoginForm.css'
// import { useNavigate } from 'react-router-dom';
// import { LOGIN_VALUES } from '../../../constanst';
// import { validationLogin } from '../../../helpers/validations';
// import useForm from '../../../hooks/useForm';
// import { UserContext } from '../../../context/UserContext';

// const LoginForm = () => {
//   const {login, auth, user} = useContext(UserContext);
//   const navigate = useNavigate();
//   useEffect(()=>{
//     // console.log(user);
//     if(auth){
//       navigate('/home')
//     }
//   },[auth, user])
//   const { handleKeyUp, handleSubmit,errors} = useForm(LOGIN_VALUES, login, validationLogin); 
  
//   return ( 
//     <>
//     <div className="login-portada">
//       <div className="login-portada-text">
//         <BiUserPin className="login-icon" />
//         <form onSubmit={handleSubmit}>
//           <FloatingLabel
//             controlId="floatingInput"
//             label="Dirección de correo electrónico"
//             className="mb-3 w-100"
//           >
//             <Form.Control
//               type="email"
//               placeholder="nombre@ejemplo.com"
//               className="login-input w-100"
//               onKeyUp={handleKeyUp}
//               name="email"
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Contraseña">
//             <Form.Control
//               type="password"
//               placeholder="Contraseña"
//               className="login-input"
//               onKeyUp={handleKeyUp}
//               name="password"
//             />
//           </FloatingLabel>
//           <Button className="primary-button" type="submit"> Ingresar</Button>
//           {Object.keys(errors).length===0?null:
//           Object.values(errors).map((error,index)=><Alert key={index} variant='danger'>{error}</Alert>)}
//         </form>
//       </div>
//     </div>
//   </>
//   );
// }
 
// export default LoginForm;


import { useContext, useEffect } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { BiUserPin } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { LOGIN_VALUES } from '../../../constanst';
import { validationLogin } from '../../../helpers/validations';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';

// const LoginForm = () => {
//   const { login, auth, user } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (auth) {
//       navigate('/home');
//     }
//   }, [auth, user]);

//   const { handleKeyUp, handleSubmit, values, errors } = useForm(LOGIN_VALUES, login, validationLogin);

//   return (
//     <>
//       <div className="login-body">
//         <div className="login-form">
//           <BiUserPin className="login-icon" />
//           <form onSubmit={handleSubmit}>
//             <FloatingLabel
//               controlId="floatingInput"
//               label="Dirección de correo electrónico"
//               className="mb-3 w-100"
//             >
//               <Form.Control
//                 type="email"
//                 placeholder="nombre@ejemplo.com"
//                 className={`login-input w-100 ${errors.email ? 'is-invalid' : ''}`}
//                 onKeyUp={handleKeyUp}
//                 name="email"
//                 maxLength={40}
//                 pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
//                 required
//               />
//               <Form.Control.Feedback type="invalid" className='text-white fw-bold'>
//                 {errors.email}
//               </Form.Control.Feedback>
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-5'>
//               <Form.Control
//                 type="password"
//                 placeholder="Contraseña"
//                 className={`login-input ${errors.password ? 'is-invalid' : ''}`}
//                 onKeyUp={handleKeyUp}
//                 name="password"
//                 maxLength={30}
//                 pattern="^\S{3,30}$"
//                 required
//               />
//               <Form.Control.Feedback type="invalid" className='text-white fw-bold'>
//                 {errors.password}
//               </Form.Control.Feedback>
//             </FloatingLabel>
//             <Button className="primary-button" type="submit">
//               Ingresar
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginForm;


const LoginForm = () => {
  const { login, auth, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [auth, user]);

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
                className={`login-input w-100 ${errors.email ? 'is-invalid' : ''}`}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                name="email"
                maxLength={40}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-white fw-bold">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-5">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className={`login-input ${errors.password ? 'is-invalid' : ''}`}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                name="password"
                maxLength={30}
                pattern="^\S{1,30}$"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-white fw-bold">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button className="primary-button" type="submit">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;