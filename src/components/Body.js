import {useState} from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => 
{


    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([
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
    
]);
    const [searchState, setSearchState] = useState("A bLAZINGLYfAST search experience")
    return (
        
        <div className="body">
            <div className="search-container">
                <h3>{searchState}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                //this e is provided by react, also avaialable in js 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <button className="search-btn" onClick={()=>{
                    setSearchState("Search started...")
                }}>Search</button>
            </div>
            <div className='filter'>
            {/* //call back function, function inside {} */}
            <button className="filter-btn" 
            onClick={()=>{
                //filter logic
                let updatedListOfRestaurants=listOfRestaurants.filter(
                    (restaurant)=> restaurant.stars>4
                );
                setListOfRestaurants(updatedListOfRestaurants)
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