import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import {RESTAURANT_LIST} from "../utils_common_config/constants";

const Body = () => 
{


    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_LIST);
    const [searchState, setSearchState] = useState("A bLAZINGLYfAST search experience")
    return (
        
        <div className="body">
            <div className="search-container">
                <h3>{searchState}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                //this e is provided by react, also avaialable in js 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    setListOfRestaurants(RESTAURANT_LIST.filter(
                        (restaurant)=> restaurant.resName.toLowerCase().includes(e.target.value.toLowerCase())
                    ))
                }}
                />
                <button className="search-btn" onClick={()=>{
                    setSearchState("Search started...")

                }}>Search</button>
            </div>
            <div className='filter'>
            <button className="filter-btn" 
            onClick={()=>{
                setListOfRestaurants(listOfRestaurants.filter(
                    (restaurant)=> restaurant.stars>4
                ))

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