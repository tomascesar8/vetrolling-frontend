import { useContext, useEffect, useState } from "react"
import { ButtonType } from "../../components/Button/ButtonType"
import { CallToAction } from "../../components/CTA/CallToAction"
import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavbarBrand } from "../../components/Navbar/NavbarBrand"
import { Title } from "../../components/Title/Title"
import SectionPlanes from "./components/SectionPlanes"
import SectionProducts from "./components/SectionProducts"
import SectionServices from "./components/SectionServices"
import SectionTestimonials from "./components/SectionTestimonials"
import "./LandingPage.css"
import { UserContext } from "../../context/UserContext"
import AdminHome from "../AdminHome/AdminHome"

export const LandingPage = () => {
  const { user, auth, getAuth } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await getAuth();
      setLoading(false);
    }
    fetchData();
  }, [])

  if (loading) {
    return (
        <div className="mt-5">Cargando...</div>
      )
  }
  // if (!auth || user.role === "user") {
    return (
      <>
        <NavbarBrand />
        <Hero />
        <SectionPlanes ButtonType={ButtonType} Title={Title}/>
        <SectionServices />
        <SectionTestimonials />
        <CallToAction />
        <SectionProducts />
        <Footer />
      </>
    )
  // }
  // if (user && user.role === "admin") {
  //   return (
  //     <>
  //       <AdminHome />
  //       <Footer />
  //     </>
  //   )
  // }
  // return <Navigate to="/" />
}

