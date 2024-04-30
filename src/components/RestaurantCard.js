import resLogo from "./../../res-logo.png";
import { IMG_URL } from "./../utils/constants";
const RestaurantCard = ({ resData }) => {
  const resInfo = { ...resData.info };
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_URL + resInfo.cloudinaryImageId}
      />
      <h3>{resInfo.name}</h3>
      <h4>{resInfo.avgRatingString}</h4>
      <h4>{resInfo.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
