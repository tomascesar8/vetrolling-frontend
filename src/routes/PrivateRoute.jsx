import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({children}) => {
  const {auth, getAuth} = useContext(UserContext);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      await getAuth();
      setloading(false);
    }
    fetchData();
  },[])
  
  return ( 
    loading ? <div>Cargando...</div> : auth? children : <Navigate to='/login'/>
  );  
}
 
export default PrivateRoute;

// import { useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// const PrivateRoute = ({children}) => {
//   const {auth, getAuth} = useContext(UserContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     const fetchData = async () => {
//       await getAuth();
//       setLoading(false);
//     }
//     fetchData();
//   },[])
  
//   return ( 
//     loading ? <div>Cargando...</div> : auth ? children : <Navigate to='/login'/>
//   );  
// }

 
// export default PrivateRoute;