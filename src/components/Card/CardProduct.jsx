import { Card } from 'react-bootstrap';

export const CardProduct = ({ product, descripcion, image }) => {
  return (
    <Card
      className="text-white col-10 col-sm-5 col-lg-3"
      style={{ padding: "0px" }}
    >
      <Card.Img
        src={image}
        alt={product}
        // width={380}
        // height={300}
        className='product-img'
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <div className="text-card-product">
          <div className="text-inner">
            <Card.Text className="fw-bold fs-4">{product}</Card.Text>
            <Card.Text className="fw-bold">{descripcion}</Card.Text>
          </div>
        </div> 
      </Card.ImgOverlay>
    </Card>
  );
};
