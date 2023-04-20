import {useState,useEffect} from 'react';

const useRestaurants = (resId) => {
    const [restaurantInfo,setRestaurantInfo]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId="+resId)
        const json= await data.json();
        setRestaurantInfo(json.data);
        // console.log(json);
        // console.log(json.data.cards[0].card.card.info);
    }
    return restaurantInfo;
};

export default useRestaurants;