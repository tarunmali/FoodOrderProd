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
    <div className="flex justify-between bg-pink-50 shadow-xl" >
        <div className="logo">
            <a href="/">
                <img 
                className="h-28 p-2"
                src={LOGO_URL} 
                alt="" />
            </a>

        </div>


        <div className='nav-items'>
            <ul
            className="flex py-10 ">

                <Link to="/">
                    <li className="px-2">Home</li>
                </Link>

                <Link to="/about">
                    <li className="px-2">About Us</li>
                </Link>

                <Link to="/contact">
                <li className="px-2">Contact Us</li>
                </Link>


                <li className="px-2">Cart</li>
                
                <Link to="/instamart">
                <li className="px-2">Instamart</li>
                </Link>


            </ul>
        </div>

        <h1 className="font-bold text-2xl py-10">{status?'You are online!!🟢':'You are offline🔴'}</h1>

        {(isLoggedin)?<button className="pr-2" onClick={()=> setIsLoggedin(false)}>Logout</button>:<button className="login" onClick={()=> setIsLoggedin(true)}>Login</button>}
    </div>
)}

export default Header;