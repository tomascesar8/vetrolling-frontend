import { CardImage } from "../../../components/Card/Cards";

const CardPlan = ({ title, imageUrl, price, description, clasesCardSPlans, imgPlans }) => {
  // console.log(imgPlans);
  return (
    <a className="btn col-12 col-md-3 mt-2" href="/plansdetails">
      <CardImage
        title={title}
        urlImage={imageUrl}
        urlHref="/"
        clasesCardPlans={"align-items-center img-plans border-1 mx-4 mx-sm-5 mx-md-0 mx-lg-4 px-0 py-lg-5"}
        imgPlans={"img-plans"}
        >
        {description}
        <div><h6 className="text-success mt-3">${price}</h6></div>
      </CardImage>
    </a>
  );
};

export default CardPlan;
