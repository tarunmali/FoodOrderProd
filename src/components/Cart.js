import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import Fooditem from "./Fooditem";

const Cart =()=>{

    const cartItems=useSelector(store=>store.cart.items);

    return (<div>
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        {/* {console.log(cartItems)}; */}
        <Fooditem item={cartItems[0]}/>
    </div>)
}

export default Cart;