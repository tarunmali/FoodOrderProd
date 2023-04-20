import {IMG_CDN_URL} from "../utils_common_config/constants";
import Shimmer from "./Shimmer";


import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../utils_common_config/constants";



const RestaurantMenu = ({ restaurant }) => {

    const params=useParams();
    const [restaurantInfo,setRestaurantInfo]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId="+params.resId)
        const json= await data.json();
        setRestaurantInfo(json.data);
        // console.log(json);
        // console.log(json.data.cards[0].card.card.info);
    }


    if(!restaurantInfo){
        return <Shimmer/>
    }

    return <div className="restaurant-menu">
        <h1>{`Restaurant id: ${params.resId}`}</h1>
        <h2>{restaurantInfo?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.area}</h3>
        <img src={IMG_CDN_URL+restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3> 
         {/* {console.log(restaurantInfo)} */}
        {console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(x => x?.card?.card?.title=="Recommended"))}

    </div> 
}

export default RestaurantMenu;