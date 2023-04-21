import {useState,useEffect} from 'react';
import { FETCH_MENU_URL } from './constants';

const useRestaurants = (resId) => {
    const [restaurantInfo,setRestaurantInfo]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await fetch("https://cors-anywhere.herokuapp.com/"+FETCH_MENU_URL+resId)
        const json= await data.json();
        setRestaurantInfo(json.data);
    }
    return restaurantInfo;
};

export default useRestaurants;