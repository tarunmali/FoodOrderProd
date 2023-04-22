import {useState,useEffect} from 'react';
import { FETCH_MENU_URL } from './constants';

const useRestaurants = (resId) => {
    const [restaurantInfo,setRestaurantInfo]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await
        fetch(`https://proxy.cors.sh/${FETCH_MENU_URL}/${resId}`, {
            headers: {
                'x-cors-api-key': 'temp_e281277ba3e28656d4de5f8bd33078f6',
            }
            });
        
        
   
        const json= await data.json();
        setRestaurantInfo(json.data);
    }
    return restaurantInfo;
};

export default useRestaurants;