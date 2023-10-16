import { useEffect, useState } from "react";
import RestaurantCard from "./RestautantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);


    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8892684&lng=77.63991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const resJson = await data.json();
        console.log(resJson.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        console.log(resJson);
        // const restaurantList = resJson.
        // setListOfRestaurant
    }


  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filter-container">
        <button className="filter-btn" onClick={()=> {
            const filterRestaurant = listOfRestaurant.filter((item) => item?.info?.rating?.rating_text > 4);
            setListOfRestaurant(filterRestaurant);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className="cards-container">
        {listOfRestaurant.map((item) => (
          <RestaurantCard key={item?.info?.resId} resData={item} />
        ))}
        {/* <RestaurantCard key={resList[0].info.resId} resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
