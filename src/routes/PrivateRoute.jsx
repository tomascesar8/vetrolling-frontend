import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({children}) => {
  const {auth, getAuth} = useContext(UserContext);

  useEffect(()=>{
    getAuth();
    console.log('PRIVATE ROUTE');
  },[])
  return ( 
    auth? children : <Navigate to='/login'/>
   );
}
 
export default PrivateRoute;