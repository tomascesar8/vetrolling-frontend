import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({children}) => {
  const {auth, getAuth} = useContext(UserContext);
  
  useEffect(()=>{
    getAuth();
  },[])
  return ( 
    !auth? children : <Navigate to='/'/>
   );
}
 
export default PublicRoute;