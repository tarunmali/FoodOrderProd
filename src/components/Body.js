import {useState} from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => 
{

    let listOfRestaurants=[
        { resName:"Meghana Food", 
    cuisine:"Biryani, North Indian",
    stars:4.4,
    imageSrc: "https://filmymantra.com/wp-content/uploads/2019/01/maggi1.jpg"
    },
    {   
        resName:"KFC", 
        cuisine:"Fast food",
        stars:3.8,
        imageSrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/l/f/p4-15578295855cda97d139913.jpg?tr=tr:n-xlarge"
    },
    {   
        resName:"Mc Donald", 
        cuisine:"Fast food",
        stars:4.9,
        imageSrc: "https://content.jdmagicbox.com/comp/ahmedabad/y6/079pxx79.xx79.130813113637.l5y6/catalogue/mcdonald-s-navrangpura-ahmedabad-fast-food-ibxnfmcmd6.jpg?clr="

    },

];


    return (
        
        <div className="body">
        <div className='filter'>
            {/* //call back function, function inside {} */}
            <button className="filter-btn" 
            onClick={()=>{
                //filter logic
                listOfRestaurants=listOfRestaurants.filter(
                    (restaurant)=> restaurant.stars>4
                );
                // console.log(listOfRestaurants);
            }}
            > Top Rated Restaurant </button>
            </div>
        <div className='res-container'>
            {listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.imageSrc} resData={restaurant}/>)}


        </div>
    </div>
)
}

export default Body;