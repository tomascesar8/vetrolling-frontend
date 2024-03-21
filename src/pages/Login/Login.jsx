import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import LoginForm from "./components/LoginForm";
import './Login.css'

const Login = () => {
  return ( 
    <div style={{height: '100vh', overflowY: 'hidden'}}>
      <NavbarBrand/>
      <LoginForm/>
    </div>
   );
}
 
export default Login;