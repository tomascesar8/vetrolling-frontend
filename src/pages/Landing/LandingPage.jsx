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

export const LandingPage = () => {
  
  return (
    <>
      <NavbarBrand />
      <Hero />
      <SectionPlanes ButtonType={ButtonType} Title={Title} />
      <SectionServices />
      <SectionTestimonials />
      <CallToAction />
      <SectionProducts />
      <Footer />
    </>
  )
}