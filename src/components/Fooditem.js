import { IMG_CDN_URL } from "../utils_common_config/constants.js";

const Fooditem =(props)=>{
    const {name,description,imageId,price} =props.item;

    return (<div>
        <h1>Fooditem</h1>
        {/* <h1>{props.item.name}</h1> */}
        {/* {console.log(props)} */}
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + imageId} alt="" />
        {/* {console.log(IMG_CDN_URL + imageId)} */}
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="text-lg">Rupees: {price/100}</h2>
        <h3 className="text-sm">{description}</h3>
        </div>
    </div>)
}
export default Fooditem;