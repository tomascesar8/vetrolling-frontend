import './PlansDetails.css'
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import FormPlans from "./components/FormDetails";


const PlansDetails = () => {
  return (
    <>
      <NavbarBrand />
      <main className="main-form-plans"> 
        <FormPlans />
      </main>
    </>
  )
};

export default PlansDetails;
