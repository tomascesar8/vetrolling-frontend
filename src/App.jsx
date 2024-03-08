import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { LandingPage } from "./pages/Landing/LandingPage";
import Login from "./pages/Login/Login";
import UserProvider from "./context/UserContext";
import PlansDetails from "./pages/PlanDetails/PlanDetails";
import Error404 from "./pages/Error404/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Toaster } from "sonner";
import Turnos from "./pages/Turnos/AdminTurnos";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import Register from "./pages/Register/Register";
import ContactForm from "./pages/Contact/Contact";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminRoute from "./routes/AdminRoute";
import UserTurnos from "./pages/Turnos/UserTurnos";

function App() {
  return (
    <>
    <UserProvider>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/info-plans" element={<PlansDetails />} />
          <Route path="/plansdetails" element={<PlansDetails />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/admin/appointments" element={<AdminRoute><Turnos /></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
          <Route path="/admin/home" element={<AdminRoute><AdminHome /></AdminRoute>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/appointments" element={<PrivateRoute><UserTurnos /></PrivateRoute>} />
      </Routes>
    </Router>
    </UserProvider>
    <Toaster richColors />
    </>
  )
}

export default App
