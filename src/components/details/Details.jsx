import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTocart, decrementQuantity, getproduct, incrementQuantity, removeItem } from "../../store/productSlice";
import Loader from "../../utlis/Loader";
import Navbar from "../navbar/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";

const Details = () => {
  let { id } = useParams();
  const  {cart}  = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const addProducts = (product) => { 
    dispatch(addTocart({ ...product }))

   }
  let cardd = cart.filter((item) => item.id == id)
  console.log(cardd)
  useEffect(() => {
    dispatch(getproduct(id)).unwrap()
      .then((data) => console.log(data));
  }, [id]);
  const { isLoading, product } = useSelector((state) => state.products);
  console.log(isLoading, product);
  return (
<>      <Navbar></Navbar>

    <div className=" mx-auto  min-h-screen flex">
      {isLoading ? (<Loader/>
      ) : (
        <>
          {product && (
              <>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
    <div className="flex flex-col md:flex-row -mx-4 items-center py-8 rounded-lg shadow-lg ">
      <div className="md:flex-1 flex justify-center items-center px-4 ">


          <img
                    src={`${product.image}`}
                    className="h-64 md:h-96  bg-gray-100 mb-4  rounded-lg shadow-2xl"
                  />

   

         
        
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>
        <p className="text-gray-500 text-sm">As <span className="text-indigo-600 hover:underline">{product.category}</span></p>

        <div className="flex items-center space-x-4 my-4">
          <div>
            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
              <span className=" mr-1 mt-1 font-bold text-indigo-600 text-3xl">{product.price}$</span>
            </div>
          </div>
          <div className="flex-1">
<p className="text-green-500 text-xl font-semibold">rating {product.rating?.rate}</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p className="text-gray-500">{product.description}</p>
                        <div className=" flex justify-between items-center">
                        <div className="flex py-4 space-x-4">
        <button className="btn  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400 " onClick={() =>{addProducts({ id:product.id, title:product.title, image:product.image, price:product.price,quantity: 1 }) 
              }
        } > Add To Cart 
        </button>
        </div>
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => dispatch(decrementQuantity(product.id))}
            >
              -
            </span>
                            <span className=" rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {cart?.length>=1?cart?.filter((item) => item.id == id).map((item) => (<span key={item.id}>{item.quantity}</span>)):0}
            
            </span>

            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => dispatch(incrementQuantity(product.id))}
            >+</span>
          </div>
          <div className="flex items-center mx-2 "  >
          <button className="btn  text-white border-0 bg-gradient-to-r from-rose-600 to-rose-400 " onClick={() => dispatch(removeItem(product.id))}
         > <FaRegTrashAlt></FaRegTrashAlt> 
        </button>
          </div>
        </div>
        
      </div>
    </div>
                </div>
       
      
            </>
          )}
        </>
      )}
      </div>
      </>
  );
};

export default Details;
