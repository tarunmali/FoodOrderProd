import {IMG_CDN_URL} from "../utils_common_config/constants";
import Shimmer from "./Shimmer";

import useRestaurants from "../utils_common_config/useRestaurants";

import { useParams } from "react-router-dom"




const RestaurantMenu = ({ restaurant }) => {

    const {resId}=useParams();
    const restaurantInfo =useRestaurants(resId);

    if(!restaurantInfo){
        return <Shimmer/>
    }

    return <div className="restaurant-menu">
        <h1>{`Restaurant id: ${resId}`}</h1>
        <h2>{restaurantInfo?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.area}</h3>
        <img src={IMG_CDN_URL+restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3> 
        {console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(x => x?.card?.card?.title=="Recommended"))}

    </div> 
}

export default RestaurantMenu;