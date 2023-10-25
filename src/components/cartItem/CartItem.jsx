import { useDispatch } from "react-redux";
import {
  addTocart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/productSlice";

const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="justify-between mb-2 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start">
      <img
        src={image}
        alt="product-image"
        className=" rounded-lg w-16 h-16 "
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between items-center">
        <div className=" sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">{price}$</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </span>
            <span className=" rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {quantity}
            </span>

            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => dispatch(incrementQuantity(id))}
            >+</span>
          </div>
          <div className="flex items-center mx-2 " onClick={() => dispatch(removeItem(id))} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

//      <div className="btn col  flex justify-content-center" onClick={() => dispatch(decrementQuantity(id))} >-</div>

// <div className="btn col  flex justify-content-center" onClick={() => dispatch(incrementQuantity(id))} >+</div>
