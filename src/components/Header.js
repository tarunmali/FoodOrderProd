import { useState } from "react";
import { LOGO_URL } from "../utils_common_config/constants";


const loggedinUser=()=>{
    //api call tho check authentication
    //if success return true else false
    return false;
}


const Header = () => {
    const [isLoggedin,setIsLoggedin] = useState(false);
    return (
    <div className="header">
        <div className='logo-container'>
            <img 
            className='logo'
            src={LOGO_URL} 
            alt="" />
        </div>
        <div className="title">
            <h1>Food Good</h1>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        {(isLoggedin)?<button className="logout" onClick={()=> setIsLoggedin(false)}>Logout</button>:<button className="login" onClick={()=> setIsLoggedin(true)}>Login</button>}
    </div>
)}

export default Header;