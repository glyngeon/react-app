import { useEffect, useState } from "react";
import RestaurantCard, {PromotedRestaurantCard} from "./RestautantCard";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { GET_RESTA } from "../utils/constant";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const PromotedRestaurant = PromotedRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTA);
    const resJson = await data.json();
    // optional chainning
    setListOfRestaurant(
      resJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      resJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };

  console.log(listOfRestaurant);
  // conditional rendering
  // if (listOfRestaurant.length === 0) {
  //     return <Shimmer/>
  // }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-8 mb-4 container m-auto">
      <div className="mt-4 text-center">
        <input
          className="rounded-md border-0 py-1.5 px-4 ring-2 text-gray-900 ring-inset ring-gray-300 focus:w-[25rem]"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-4 ml-4 border border-blue-500 rounded"
          onClick={() => {
            // bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
            const searchFilterRestaurant = listOfRestaurant.filter((ele) => {
              return ele?.info?.name
                ?.toString()
                .toLowerCase()
                ?.includes(searchText?.toString().toLowerCase());
            });
            setFilteredRestaurant(searchFilterRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="mt-6 mb-6 flex">
        <button
          className="rounded border py-1 px-4 mr-4 bg-transparent hover:border-gray-700 hover:bg-gray-300"
          onClick={() => {
            const filterRestaurant = listOfRestaurant.filter(
              (item) => item?.info?.avgRatingString > 4
            );
            setFilteredRestaurant(filterRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>

        <button
          className="rounded border py-1 px-4 mr-4 bg-transparent hover:border-gray-700 hover:bg-gray-3001"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurant);
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((item) => (
          <Link to={"/restaurant/" + item?.info.id} key={item?.info.id}>
            {item.info.avgRatingString > 4.2 ? (
              <PromotedRestaurant resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))}
        {/* <RestaurantCard key={resList[0].info.resId} resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
