import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { LandingPage } from "./pages/Landing/LandingPage";
import Login from "./pages/Login/Login";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home/Home";
import PlansDetails from "./pages/PlanDetails/PlanDetails";
import Error404 from "./pages/Error404/Error404";
import Turnos from "./pages/Turnos/Turnos";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {

  return (
    <UserProvider>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/plansdetails" element={<PlansDetails />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/appointments" element={<PrivateRoute><Turnos /></PrivateRoute>} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} /> */}
      </Routes>
    </Router>
    </UserProvider>
  )
}

export default App
