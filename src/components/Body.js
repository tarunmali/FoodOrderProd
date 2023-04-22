import {useState, useEffect} from "react";

import useOnline from "../utils_common_config/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import NoResult from "./NoResult";
import {searchFunction} from "../utils_common_config/helper.js";

//destructuring on the fly
const Body = ({user}) => 
{

    const [noOfSearchResults,setNoOfSearchResults]=useState(0);
    const [searchState1, setSearchState1] = useState("Press 🔽button 🔼 to search")
    const [searchState2, setSearchState2] = useState("🔥bLAZINGLYfAST🔥 Search Experience")
    const [searchText1, setSearchText1] = useState("");
    const [searchText2, setSearchText2] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);


    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await 
        fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING', {
    headers: {
        'x-cors-api-key': 'temp_e281277ba3e28656d4de5f8bd33078f6',
    }
    });
        
        
       
        const json= await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const status=useOnline();


    if(!status){
        return <h1>🥲Offline, please check your connection</h1>
    }


    //early return / not rendring a component
    if(!filteredRestaurants) return null;
    if(filteredRestaurants.length==0 && allRestaurants.length!=0) return <NoResult/>
    
    if(!allRestaurants) return null;
    
    return (allRestaurants.length!=0 )?
        
        (<div className="body">
            <div className="search-container-1 p-2  bg-pink-50 m-2 flex justify-between">

                <div>
                <h3>{searchState1}</h3>
                <input type="text" className="search-input" placeholder="Search" value={searchText1}
                //this e is provided by  js 
                onChange={(e)=>{
                    setSearchText1(e.target.value);
                }}
                />
                <button className="search-btn p-2 m-2 bg-purple-900 hover:bg-green-900 text-white rounded-md" onClick={()=>{
                    setFilteredRestaurants(searchFunction(allRestaurants,searchText1));
                    
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
                    setFilteredRestaurants(allRestaurants.filter(
                        (restaurant)=> restaurant.data.name.toLowerCase().includes(e.target.value.toLowerCase())
                    ))
                }}
                />
                <button className="search-btn p-2 m-2 bg-purple-900 hover:bg-green-900 text-white rounded-md" onClick={()=>{
                    setSearchState2("Why click anyway when results are bLAZINGLYFAST already!!!!")

                }}>Search</button>
            </div>

            </div>

            

            {/* <div className='filter'>
            <button className="filter-btn" 
            onClick={()=>{
                setListOfRestaurants(listOfRestaurants.filter(
                    (restaurant)=> restaurant.stars>4
                ))

            }}
            > Top Rated Restaurant </button>
            </div>*/}
        <div className="res-container flex flex-wrap bg-purple-100">
            {filteredRestaurants.map(restaurant=>{
                // console.log(restaurant.data.id);
                return (<RestaurantCard user={user} key={restaurant.data.id} resData={restaurant}/>)})}


        </div> 

        </div>)
        :
        <Shimmer/>


}

export default Body;