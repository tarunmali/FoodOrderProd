import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import useOnline from "../utils_common_config/useOnline";
import { LOGO_URL } from "../utils_common_config/constants";
import { useSelector } from "react-redux";
import store from "../utils_common_config/store";
// import Logo from "../assests/img/logo.jpeg"
// import UserContext from "../utils_common_config/UserContext";


const loggedinUser=()=>{
    //api call tho check authentication
    //if success return true else false
    return false;
}


const Header = () => {
    const [isLoggedin,setIsLoggedin] = useState(false);
    const status=useOnline();


    // const {user}=useContext(UserContext);
    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);

    return (
    <div className="flex justify-between bg-pink-50 shadow-xl   sm:bg-purple-50" >
        <div className="logo">
            <a href="/">
                <img 
                className="h-24 p-2"
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


                
                <Link to="/instamart">
                <li className="px-2">Instamart</li>
                </Link>

                <Link to="/cart">
                <li className="px-2">Cart-  {cartItems.length}</li>
                </Link>


            </ul>
        </div>

        <h1 className="font-bold  py-10">{status?'You are online🟢':'You are offline🔴'}</h1>
        {/* <h3 className="py-10 font-bold text-red-900">{`Welcome ${user.name} to FOODGOOD`}</h3>
        {(isLoggedin)?<button className="auth py-10" onClick={()=> setIsLoggedin(false)}>Logout</button>:<button className="login" onClick={()=> setIsLoggedin(true)}>Login</button>} */}
    </div>
)}

export default Header;