import { useEffect, useState } from "react";
import {CardProduct} from "../../../components/Card/CardProduct"
import { Title } from "../../../components/Title/Title";
import getData from "./../../../helpers/getData";

const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData("/products", setProducts); // Cambia "/products" por la ruta correcta para obtener los productos.
  }, []);

  return (
    <section className="container-fluid text-center pt-4">
      <Title title="Nuestros productos" />
        <div className="col-12 gap-4 mt-5 d-flex flex-wrap justify-content-center">
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
