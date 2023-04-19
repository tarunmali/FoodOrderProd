import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import {RESTAURANT_LIST} from "../utils_common_config/constants";

const Body = () => 
{

    
    const [searchState1, setSearchState1] = useState("Button daba ke search karne wala")
    const [searchState2, setSearchState2] = useState("A bLAZINGLYfAST search experience")
    const [searchText1, setSearchText1] = useState("");
    const [searchText2, setSearchText2] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_LIST);
    return (
        
        <div className="body">
            <div className="search-container-1">
                <h3>{searchState1}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText1}
                //this e is provided by  js 
                onChange={(e)=>{
                    setSearchText1(e.target.value);
                }}
                />
                <button className="search-btn" onClick={()=>{
                    setSearchState1("Search started...")
                    setListOfRestaurants(RESTAURANT_LIST.filter(
                        (restaurant)=> restaurant.resName.toLowerCase().includes(searchText1.toLowerCase())
                    ))
                }}>Search</button>
            </div>

            <div className="search-container-2">
                <h3>{searchState2}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText2}
                onChange={(e)=>{
                    setSearchText2(e.target.value);
                    setListOfRestaurants(RESTAURANT_LIST.filter(
                        (restaurant)=> restaurant.resName.toLowerCase().includes(e.target.value.toLowerCase())
                    ))
                }}
                />
                <button className="search-btn" onClick={()=>{
                    setSearchState2("Why click anyway when results are bLAZINGLYFAST")

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