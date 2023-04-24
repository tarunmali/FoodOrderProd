import { useSelector, useDispatch } from "react-redux";
import Fooditem from "./Fooditem";
import { clearCart } from "../utils_common_config/cartSlice";

const Cart =()=>{

    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }



    return (<div>
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        <button 
            className="bg-green-200 p-2 m-5" 
            onClick={()=>handleClearCart()}>
            Clear Cart
        </button>

        <div className="flex flex-wrap">
        {cartItems.map((item)=><Fooditem key={item.id} item={item}/>)}
        </div>
    </div>)
}

export default Cart;