import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AdminRoute = ({children}) => {
  const {user, auth, getAuth} = useContext(UserContext);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      await getAuth();
      setloading(false);
    }
    fetchData();
  },[])
  
  return ( 
    loading ? <div className="mt-5 pt-5">Cargando...</div> : user && user.role === 'admin' ? children : <Navigate to='/'/>
  );  
}
 
export default AdminRoute;
