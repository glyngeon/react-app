import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  handleClick = () => {
    setShowIndex();
    // setShowItem(!showItem);
  };

  return (
    <div className="p-4">
      <h2
        className="ml-1 mt-4 mb-4 p-2 rounded text-lg font-medium cursor-pointer bg-gray-100 shadow"
        onClick={handleClick}
      >
       ⚫️ {data?.title} ({data?.itemCards?.length})
      </h2>

      { showItem && <ItemList key={data.title} items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
