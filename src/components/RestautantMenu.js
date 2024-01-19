import Shimmer from "./Shimmer";
import { MENU_CARD_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestautantMenu from "../utils/useRestautantMenu";
import RestaurantCategory from "./RestautantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaInfo = useRestautantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    feeDetails,
  } = restaInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } = restaInfo?.cards[restaInfo?.cards?.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const allCategories = restaInfo?.cards?.filter((e) => {
    if (e["groupedCard"]) {
      return e;
    }
  });
  const categories =
    allCategories[0].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-8 m-auto max-w-[800px] container">
      <div className="mx-4">
        <div className="pt-4 mb-4 flex justify-between">
          <div className="flex mr-4 w-[100%- 120px] flex-col">
            <div className="flex flex-col">
              <p className="text-xl font-semibold mb-2 transform-cpu">{name}</p>
              <p className="text-sm text-left text-ellipsis whitespace-nowrap overflow-hidden">
                {cuisines.join(", ")}
              </p>

              <div className="text-sm ">
                <p className="RestaurantNameAddress_area">{areaName}</p>
                <p className="RestaurantNameAddress_lastMile">
                  {sla?.lastMileTravelString}
                </p>
              </div>
            </div>

            <div className="pt-2 text-center flex items-center text-sm">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
                alt="DISTANCE_FEE_NON_FOOD_LM"
                className="RestaurantMessage_icon"
              />
              <span className="mx-2">{feeDetails?.message}</span>
            </div>
          </div>

          <button className="border rounded-sm shadow-sm text-center p-2 flex flex-col">
            <span className="RestaurantRatings_avgRating">
              <span className="icon-star"></span>
              <span>{avgRating}</span>
            </span>
            <span className="RestaurantRatings_totalRatings">
              {totalRatingsString}
            </span>
          </button>
        </div>
        <hr className="RestaurantHeader_dottedSeparator" />
        <div className="my-2 flex">
          <div className="flex items-center">
            <svg
              className="mr-2"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{sla?.slaString}</span>
          </div>
          <div className="flex items-center mx-3 text-sm">
            <svg
              className="mr-2"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItem={index === showIndex ?? false}
          setShowIndex= {()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
