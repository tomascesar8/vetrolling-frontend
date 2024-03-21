import './PlansDetails.css'
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import FormPlans from "./components/FormDetails";


const PlansDetails = () => {
  return (
    <>
      <NavbarBrand />
      <main className="main-form-plans mt-5 pb-4 mx-4 mx-sm-auto"> 
        <FormPlans />
      </main>
    </>
  )
};

export default PlansDetails;
