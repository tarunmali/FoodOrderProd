import {IMG_CDN_URL} from "../utils_common_config/constants";

import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
const {resData,user}=props;
    return(    


    <div className="res-card w-[200px] p-2 m-2 shadow-lg bg-pink-50" >
        <Link to= {"/restaurant/"+resData.data.id} >
        <img className='res-logo' src={IMG_CDN_URL+resData.data.cloudinaryImageId} alt="" />
        <h3 className="font-bold text-xl">{resData.data.name}</h3>
        <h4 className="flex">{resData.data.cuisines.join(", ")}</h4>
        </Link>
    </div>



)}

export default RestaurantCard;