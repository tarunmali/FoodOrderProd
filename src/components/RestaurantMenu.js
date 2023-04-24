import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";


import {IMG_CDN_URL} from "../utils_common_config/constants";
import Shimmer from "./Shimmer";

import useRestaurants from "../utils_common_config/useRestaurants";

import { addItem } from "../utils_common_config/cartSlice";




const RestaurantMenu = ({ restaurant }) => {

    const {resId}=useParams();
    const restaurantInfo =useRestaurants(resId);

    const dispatch = useDispatch();

    const addFoodItem =(item) =>{
        //dispatch an action
        dispatch(addItem(item));
    }

    if(!restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards){
        return <Shimmer/>
    }

    return <div className="restaurant-menu flex">


{restaurantInfo && restaurantInfo.cards && restaurantInfo.cards.length > 0 && restaurantInfo.cards[2]  &&(
        <div >
            <h1>{`Restaurant id: ${resId}`}</h1>
            <h2 className="font-bold">{restaurantInfo?.cards[0]?.card?.card?.info?.name}</h2>
            <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.area}</h3>
            <img src={IMG_CDN_URL+restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
            <h3 className="font-bold">{restaurantInfo?.cards[0]?.card?.card?.info?.avgRating} stars⭐</h3>
            <h3 >{restaurantInfo?.cards[0]?.card?.card?.info?.city}</h3>
            <h3 className="font-bold">{restaurantInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3> 
        </div>)}



        <div className="p-5">
        <h1 className="text-5xl">Menu</h1>
            {restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards.map(x => <h6> {x.card.info.name} <button
            className="p-1  bg-green-50"
            onClick={()=>addFoodItem(x.card.info)}
            >Add</button>
             </h6> )}
        </div>

    </div> 
}

export default RestaurantMenu;