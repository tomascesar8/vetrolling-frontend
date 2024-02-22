import { useEffect, useState } from "react";

import CardPlans from "./CardPlans";
import getData from "./../../../helpers/getData";
import { Link } from "react-router-dom";

const SectionPlanes = ({ButtonType, Title}) => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    getData("/planes", setPlanes);
  }, []);

  return (
    <section className="container-fluid container-box">
      <Title
        title='Conocé nuestra cartilla en planes de salud'
      />
      <div className="container-card row container-cards-plans">
        {planes.map(plan => (
          <CardPlans
            key={plan._id}
            title={plan.nombre}
            imageUrl={plan.imagen}
            price={plan.precio}
            description={plan.descripcion}
          />
        ))}
      </div>
      <Link to="/plansdetails" className="btn btn-primary btn-lg mt-4">
        Ver detalle de planes
      </Link>
    </section>
  );
};

export default SectionPlanes;