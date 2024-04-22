import RestaurantCard from "./RestaurantCard";
import resData from "./../utils/mockResData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fitleredRestaurant = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating > 4.2
            );
            setListOfRestaurants(fitleredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
