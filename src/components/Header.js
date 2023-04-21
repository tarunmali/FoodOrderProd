import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils_common_config/useOnline";


import { LOGO_URL } from "../utils_common_config/constants";
import Logo from "../assests/img/logo.jpeg"


const loggedinUser=()=>{
    //api call tho check authentication
    //if success return true else false
    return false;
}


const Header = () => {
    const [isLoggedin,setIsLoggedin] = useState(false);
    const status=useOnline();
    return (
    <div className="header">
        <div className='logo-container'>
            <a href="/">
                <img 
                className='logo'
                src={LOGO_URL} 
                alt="" />
            </a>


        </div>
        <div className="title">
            <h1>Food Good</h1>
        </div>
        <div className='nav-items'>
            <ul>

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About Us</li>
                </Link>

                <Link to="/contact">
                <li>Contact Us</li>
                </Link>


                <li>Cart</li>
                
                <Link to="/instamart">
                <li>Instamart</li>
                </Link>


            </ul>
        </div>

        <h1>{status?'You are online!!🟢':'You are offline🔴'}</h1>

        {(isLoggedin)?<button className="logout" onClick={()=> setIsLoggedin(false)}>Logout</button>:<button className="login" onClick={()=> setIsLoggedin(true)}>Login</button>}
    </div>
)}

export default Header;