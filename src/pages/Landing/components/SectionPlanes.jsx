import { useEffect, useState } from "react";

import CardPlans from "./CardPlans";
import getData from "./../../../helpers/getData";

const SectionPlanes = ({ButtonType, Title}) => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    getData("/planes", setPlanes);
  }, []);

  return (
    <section className="container-box">
      <Title
        title='Conocé nuestra cartilla en planes de salud'
      />
      <div className="container-card">
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
      <ButtonType types='button' className=''>
        Ver detalle de planes
      </ButtonType>
    </section>
  );
};

export default SectionPlanes;