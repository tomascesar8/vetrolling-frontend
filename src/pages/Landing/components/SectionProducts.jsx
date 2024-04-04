import { useEffect, useState } from "react";
import {CardProduct} from "../../../components/Card/CardProduct"
import { Title } from "../../../components/Title/Title";
import getData from "./../../../helpers/getData";

const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData("/products", setProducts);
  }, []);

  return (
    <section className="container-fluid text-center py-4">
      <Title title="Nuestros productos" />
        <div className="col-12 gap-4 mt-5 pt-4 d-flex flex-wrap justify-content-center">
          {products.map((product) => (
            <CardProduct
              key={product._id} 
              product={product.nombre}
              image={product.imagen}
              descripcion={product.descripcion}
            />
          ))}
        </div>
    </section>
  );
};

export default SectionProducts;
