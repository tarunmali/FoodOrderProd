import {IMG_CDN_URL} from "../utils_common_config/constants";


import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../utils_common_config/constants";



const RestaurantMenu = ({ restaurant }) => {

    const params=useParams();
    const [restaurantInfo,setRestaurantInfo]=useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=176437")
        const json= await data.json();
        // console.log(json);
        console.log(json.data.cards[0].card.card.info);
        setRestaurantInfo(json.data.cards[0].card.card.info);
    }


    return <div className="restaurant-menu">
        <h1>{`Restaurant id: ${params.resId}`}</h1>
        <h2>{restaurantInfo.name}</h2>
        <img src={IMG_CDN_URL+restaurantInfo.cloudinaryImageId} alt="" />
        <h3>{restaurantInfo.area}</h3>
        <h3>{restaurantInfo.avgRating} stars</h3>
        <h3>{restaurantInfo.city}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>


    </div> 
}

export default RestaurantMenu;