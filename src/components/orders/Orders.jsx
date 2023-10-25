import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/productSlice";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

const Orders = () => {
  const { cart } = useSelector((state) => state.products);
  console.log(cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart?.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <>
      <Navbar />
      <div className="card-body flex flex-col">
        <div className="text-center ">
        <h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text p-0 text-center text-3xl font-extrabold text-transparent">Blue Cart</h1>
        <p className="text-md">Review Your Order</p>


        </div>
        {cart?.length >= 1 ? (
          cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <div className=" flex justify-center items-center">
          <div className="badge badge-info gap-2 text-white">
          Cart is empty!
           </div>

        </div>

          
         
      
        )}
        <div className="card-actions flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-500">
            Subtotal: {getTotal().totalPrice}
          </span>
          {cart?.length >= 1 ?  <Link to={"/orderform"}>
            <button className="btn  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400  ">
              {" "}
            Order Now
            </button>
          </Link>:null

          }
        
        </div>
      </div>
    </>
  );
};

export default Orders;
