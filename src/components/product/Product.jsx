import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { addTocart } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
function coco (id) {
  nav(`/details/${id}`)
  }
  const addProducts = (product) => { 
    dispatch(addTocart({ ...product }))

   }
  return (
    
      <div className="h-96 card bg-base-100 shadow-2xl" key={product.id} >
      
          <figure className="h-50 py-2" onClick={()=>coco(product.id)}>
            <img
              src={`${product.image}`}
              alt="product"
              className=" rounded-t-xl h-full"
            />
          </figure>
        <div className="card-body p-2 sm:p-2 md:p-4  lg:p-5 xl:p-6 " onClick={()=>coco(product.id)}>
          <h2 className="card-title ">{product.title}</h2>

          <div className="card-actions   items-center">
          <p className=" text-2xl font-bold">
              {product.price}$
              </p>
              <p className="badge  border-0 bg-blue-300"> {product.category} </p>
       

            

          </div>
          
        </div>
        <button className="btn  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400 m-4" onClick={() =>{addProducts({ id:product.id, title:product.title, image:product.image, price:product.price,quantity: 1 }) 
              }
        } > Add To Cart <MdAddShoppingCart className="text-lg"/>
        </button>
       
      </div>
  

  );
};

export default Product;
