import { MENU_CARD_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    console.log(items);
  return (
    <div className="">
      {items?.map((item) => 
        <div
          className="flex justify-between m-1 p-2 mb-3 border-b"
        >
          <div className="w-[85%]">
            <h3 className="font-semibold text-lg">{item?.card?.info?.name}</h3>
            <p className="text-sm">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-sm mt-4 w-[80%] text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="relative w-[15%] h-[120px]">
            <div className="img-container m-w-[118px]">
              <img
                alt=""
                className="w-[118px] h-[96px] object-cover rounded-sm"
                loading="lazy"
                width="256"
                src={MENU_CARD_URL + item?.card?.info?.imageId}
              />
            </div>
            <div className="absolute rounded-sm border bg-gray-50 text-green-600 text-sm left-[50%] bottom-[8px] translate-x-[-50%] z-10 px-6 py-2">
              <div className="buttonInner">Add</div>
            </div>
          </div>
        </div>
        
      )}

    <hr className="border-b" />
    </div>
  );
};



export default ItemList;