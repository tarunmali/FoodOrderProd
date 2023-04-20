import {IMG_CDN_URL} from "../utils_common_config/constants";

import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    // console.log(props);
const {resData}=props;
    // console.log(resData.data);
    return(    


    <div className="res-card" >
        <Link to= {"/restaurant/"+resData.data.id} >
        {/* <img 
        src={} alt="" /> */}
        <img className='res-logo' src={IMG_CDN_URL+resData.data.cloudinaryImageId} alt="" />
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.toString()}</h4>
        {/* <h4>{resData.stars}</h4> */}
        </Link>
    </div>



)}

export default RestaurantCard;