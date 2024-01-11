import { CardImage } from "../../../components/Card/Cards";

const CardPlan = ({ title, imageUrl, price, description }) => {
  return (
    <CardImage
      title={title}
      urlImage={imageUrl}
      urlHref="/"
      // titleHref={title}
    >
      {description}
      <div><h6 className="text-success mt-3">${price}</h6></div>
    </CardImage>
  );
};

export default CardPlan;
