import RestaurantCard from "./RestaurantCard";

const Body = () => (
    <div className="body">
        <div className='search'>search</div>
        <div className='res-container'>
            <RestaurantCard 
            resName="Meghana Food" 
            cuisine="Biryani, North Indian"
            />
            <RestaurantCard
            resName="KFC" 
            cuisine="Fast food"
            />
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
)

export default Body;