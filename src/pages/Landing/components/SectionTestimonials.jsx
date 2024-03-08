import { useEffect, useState } from "react";
import { Title } from "../../../components/Title/Title";
// import getData from "../../../helpers/getData";
import { CardTestimonial } from "./CardTestimonial";
import getData from "./../../../helpers/getData";

const SectionTestimonials = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData("/comments", setComments);
  }, []);

  return (
    <section className="container-box-testimonials pt-0 pt-md-5 pb-0 col-12">
      <Title title="Testimonios de nuestros clientes" />
      <div className="d-flex flex-row justify-content-center flex-wrap flex-md-nowrap">
        {comments.map((comment) => (
          <CardTestimonial
            key={comment._id}
            subject={comment.nombre}
            // rol={comment.rol}
            image={comment.imagen}
          >
            {comment.comentario}
          </CardTestimonial>
        ))}
      </div>
    </section>
  );
};

export default SectionTestimonials;
