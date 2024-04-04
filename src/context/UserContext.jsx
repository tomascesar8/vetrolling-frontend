import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";
import authToken from "../helpers/authToken";
import { toast } from 'sonner'

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
      toast.success('¡Bienvenido/a de nuevo ' + data.user.nombre + '!');
    } catch (error) {
      toast.error('Error: ' + error.response.data.message);
      setAuth(false);
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
    }
  }

  const getAuth = async () => {
    const token = localStorage.getItem('token');
    if (token){
      authToken(token)
      try {
        const response = await axiosClient.get('/users/auth');
        setAuth(true);
        setUser(response.data.user);
      } catch (error) {
        setAuth(false);
        setUser(null);
        setToken(null);
        if(localStorage.getItem('token')){
          localStorage.removeItem('token');
        }
      }
    } else {
      setAuth(false);
      setUser(null);
      setToken(null);
    }
  
  };
  
  const logout = ()=>{
    setAuth(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    toast.success('Sesion Finalizada Correctamente. ¡Hasta pronto!');
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