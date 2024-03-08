import './PlansDetails.css'
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import FormPlans from "./components/FormDetails";


const PlansDetails = () => {
  return (
    <>
      <NavbarBrand />
      <main className="main-form-plans mt-4 mt-sm-5 mx-4 mx-sm-auto"> 
        <FormPlans />
      </main>
    </>
  )
};

export default PlansDetails;
