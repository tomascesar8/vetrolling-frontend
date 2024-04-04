import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({children}) => {
  const {user, auth, getAuth} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchData = async () => {
      await getAuth();
      setLoading(false);
    }
    fetchData();
  },[])
  
  return ( 
    loading ? <div className="mt-5 pt-5">Cargando...</div> 
    : 
    !auth ? children 
    : 
    user && user.role === 'admin' ? <Navigate to='/admin/home' /> 
    : 
    <Navigate to='/' />
  );
}
 
export default PublicRoute;
