import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";

function searchFunction(listOfRestaurants,searchText){
    return listOfRestaurants.filter(
        (restaurant)=> restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    )
}


const Body = () => 
{

    const [noOfSearchResults,setNoOfSearchResults]=useState(0);
    const [searchState1, setSearchState1] = useState("Button daba ke search karne wala")
    const [searchState2, setSearchState2] = useState("A bLAZINGLYfAST search experience")
    const [searchText1, setSearchText1] = useState("");
    const [searchText2, setSearchText2] = useState("");
    let [listOfRestaurants, setListOfRestaurants] = useState([]);


    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.72158&lng=70.9249578&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    }



    return (listOfRestaurants.length!=0)?
        
        (<div className="body">
            <div className="search-container-1">
                <h3>{searchState1}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText1}
                //this e is provided by  js 
                onChange={(e)=>{
                    setSearchText1(e.target.value);
                }}
                />
                <button className="search-btn" onClick={()=>{
                    listOfRestaurants=searchFunction(listOfRestaurants,searchText1);
                    setListOfRestaurants(listOfRestaurants);
                    
                    
                    
                    //buggy
                    // console.log(listOfRestaurants);
                    // console.log(listOfRestaurants.length);
                    // setNoOfSearchResults(listOfRestaurants.length);
                    // console.log(noOfSearchResults)
                    // setSearchState1(`Search started... Returned ${noOfSearchResults} results`)

                }}>Search</button>
            </div>

            <div className="search-container-2">
                <h3>{searchState2}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText2}
                onChange={(e)=>{
                    setSearchText2(e.target.value);
                    setListOfRestaurants(listOfRestaurants.filter(
                        (restaurant)=> restaurant.data.name.toLowerCase().includes(e.target.value.toLowerCase())
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
            {listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)}


        </div>

        </div>):
        <Shimmer/>


}

export default Body;