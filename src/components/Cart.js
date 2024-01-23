import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../states/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const disptach = useDispatch();

    const clearCart = ()=> {
        console.log('wwwwwww')
        disptach(clearItems())
    }

return (
    <div className="flex justify-center flex-col items-center">
        {/* <div className="flex items-center"> */}
            <div className="text-center font-bold text-2xl m-4 p-4">Cart</div>
            <button
            className="w-[100px] h-[40px] rounded border py-1 px-2 mr-2 bg-transparent hover:border-gray-700 hover:bg-gray-3001"
            onClick={clearCart}
            >
            Clear Cart
            </button>
        {/* </div> */}
            <div className="m-auto" >
                <ItemList items={cartItems} />
            </div>
        { cartItems.length === 0 && (<h1>Cart is empty. Add items to the cart.</h1>)}
    </div>
)
}

export default Cart;