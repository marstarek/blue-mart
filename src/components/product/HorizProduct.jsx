import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { addTocart } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import {Routes, Route, useNavigate} from 'react-router-dom';

const HorizProduct = ({ product }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
function navTo (id) {
  nav(`/details/${id}`)
  }
  const addProducts = (product) => { 
    dispatch(addTocart({ ...product }))

   }
  return (
    
    <div
    className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row w-full" key={product.id}>
    <img onClick={()=>navTo(product.id)}
      className="h-96 py-2 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={`${product.image}`}
      alt="" />
    <div className="flex flex-col justify-around p-6 flex-grow " >
      <h5
        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {product.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {product.price}
      </p>
      <p className="badge text-xs  border-0 bg-blue-300"> {product.category} </p>

      <button className="btn w-full  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400 " onClick={() =>{addProducts({ id:product.id, title:product.title, image:product.image, price:product.price,quantity: 1 }) 
              }
        } > Add To Cart <MdAddShoppingCart className="text-lg"/>
        </button>
    </div>
      
  </div>








  );
};

export default HorizProduct;
