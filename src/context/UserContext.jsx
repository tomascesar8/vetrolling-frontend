import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";
import authToken from "../helpers/authToken";

export const UserContext = createContext();

const UserProvider = ({children})=>{
  const [user,setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  
  const login = async(values)=>{
    try {
      const {data} = await axiosClient.post('/users/login', values);
      setToken(data.token);
      setAuth(true);
      localStorage.setItem('token',data.token);
    } catch (error) {
      console.log(error);
      setAuth(false);
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
    }
  }

  const getAuth = async () => {
    const token = localStorage.getItem('token');
    // console.log(token);
    // console.log('WEEEEEEEEEEEEEEEEEEE');
    
    if(token){
      authToken(token);
    try {
      const response = await axiosClient.get('/users/auth');
      setAuth(true);
      setUser(response.data.user);
    } catch (error) {
      if (error.response) {
        // Aquí, error.response contiene la respuesta HTTP con los códigos de estado
        const statusCode = error.response.status;
        console.log('Código de estado:', statusCode);
  
        switch (statusCode) {
          case 450:
            console.log('Token inválido o acceso denegado');
            break;
          case 451:
            console.log('Token inválido');
            break;
          case 452:
            console.log('Token expirado');
            break;
          default:
            console.log('Error desconocido');
            break;
        }
  
        setAuth(false);
        setUser(null);
        setToken(null);
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
      } else {
        // Manejar otros tipos de errores
        console.log('Error sin respuesta HTTP:', error.message);
      }
    }
  }
  };
  
  
  
  const logout = ()=>{
    setAuth(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  }
  return(
    <UserContext.Provider value={{
      user,
      setUser,
      login,
      auth,
      getAuth,
      logout
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider