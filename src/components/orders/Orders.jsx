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
          <p className="empty text-dark">Cart is empty</p>
        )}
        <div className="card-actions flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-500">
            Subtotal: {getTotal().totalPrice}
          </span>
          <Link to={"/orderform"}>
            <button className="btn  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400 m-4">
              {" "}
            Order Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
