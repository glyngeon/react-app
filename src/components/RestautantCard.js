import { useContext } from 'react';
import { CARD_URL } from '../utils/constant';
import UserContext from '../utils/userContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="w-[350] rounded-md m-4 shadow-md hover:shadow-gray-300">
        <img className='rounded-md w-[22rem] h-[16rem] object-cover' src={CARD_URL + resData?.info?.cloudinaryImageId} alt="Avatar"/>
        <div className="p-4">
            <div className="flex justify-between">
                <h4 className="text-left text-ellipsis whitespace-nowrap overflow-hidden text-lg"><b>{resData.info.name}</b></h4>
                <p className="bg-green-600 justify-center flex m-w-[2.6rem] rounded-sm text-white px-2 ">{resData.info.avgRatingString}</p>
            </div>
            <div className="my-2">
                <p className="text-ellipsis whitespace-nowrap overflow-hidden m-w-[56%]">{resData.info.cuisines?.join(', ')}</p>
                <p className="flex justify-end">{resData.info.costForTwo}</p>
            </div>
            <p className="delivery-time">{loggedInUser}</p>
        </div>
        </div>
    )
  }

 export const PromotedRestaurantCard = (RestaurantCard)=> {
    return (props) => {
        return (
            <div>
                <label className='px-2 m-2 rounded-sm absolute bg-black text-white'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
  }
  export default RestaurantCard;