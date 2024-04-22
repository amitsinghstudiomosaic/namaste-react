import { restaurantLogoURL } from "./../utils/constant";
const RestaurantCard = (props) => {
  const { restData } = props;
  console.log(restData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={restaurantLogoURL + restData.cloudinaryImageId}
      />
      <h3>{restData.name}</h3>
      <h4>{restData.cuisines.join(", ")} </h4>
      <h4>{restData.avgRatingString} stars</h4>
      <h4>{restData.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
