import { RES_URL } from "../../Utils/constants";



const RestaurantCard = (props) => {
  const{resData}=props;
  const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime}=resData?.info;
  return (
    <div className="res-card">
      
      <img className="res-image" src={RES_URL + cloudinaryImageId}/>
      
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(',')}</h4>
      <h4 className="res-rating">{avgRating} stars</h4>
      <h4 className="res-time">{deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaurantCard;