import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => (
    <div className="header">
        <div className='logo-container'>
            <img 
            className='logo'
            src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" 
            alt="" />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)


const resObj={

}

const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
    
    
    // console.log('props', props);
    return(    
    <div className="res-card" style={{
        backgroundColor:"yellow",
    }}>
        <img className='res-logo'
        src="https://filmymantra.com/wp-content/uploads/2019/01/maggi1.jpg" alt="" />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4>
    </div>
)}


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



const AppLayou5t = () =>  (
    <div class="app">
        <Header/>
        <Body/>
    </div>
)


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayou5t/>);