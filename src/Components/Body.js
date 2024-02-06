import { resList } from "../../Utils/mockdata";
import RestaurantCard from "./RestaurantCard";
// import { resList } from "../../Utils/mockdata";
import { useState, useEffect } from "react";
import Shiver from "./Shiver";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  

  const [searchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();
    console.log(jsondata);
    setListOfRestaurants(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shiver />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }

          }
          />
          <button
          onClick={()=>{
           const filteredRestaurant= listOfRestaurants.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText).toLowerCase());
           setListOfRestaurants(filteredRestaurant);
            // Filter the restaurant cards and update the UI
            //search text
          }}
          >Search</button>
        </div>
        <button
          className="btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(listOfRestaurants);
            console.log(listOfRestaurants);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
