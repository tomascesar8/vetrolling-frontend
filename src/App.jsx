import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { LandingPage } from "./pages/Landing/LandingPage";
import Login from "./pages/Login/Login";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home/Home";
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <UserProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              {/* <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} /> */}
        </Routes>
      </Router>
      </UserProvider>
      <Toaster richColors />
    </>
  )
}

export default App
