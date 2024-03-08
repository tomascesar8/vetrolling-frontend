import React, { useEffect, useState } from "react";
import getData from "./../../../helpers/getData";
import { Title } from "../../../components/Title/Title";
import { CardImage } from "../../../components/Card/Cards";

const SectionServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData("/services", setServices);
  }, []);

  return (
    <section className="pt-4 container">
      <div className="container-title-services mt-2 mt-sm-5">
        <Title
          title='Nuestros Servicios'
          description='Brindamos los mejores servicios para el cuidado de tus mascotas'
        />
      </div>
      <section className='container-card svg row'>
        {services.length > 0 && services.map((servicio) => (
          <CardImage
            clasesCardServices={"col-12 col-md-6 col-xl-3 align-items-center border-0"}
            imgServices={"img-service"}
            key={servicio._id} // Utilizando el ID del servicio como clave única
            title={servicio.nombre}
            urlImage={servicio.imagen}
            typeImg="jpg" // Cambia esto según la lógica de tu aplicación
          >
            {servicio.descripcion}
          </CardImage>
        ))}
      </section>
    </section>
  );
};

export default SectionServices;
