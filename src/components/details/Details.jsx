import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproduct } from "../../store/productSlice";
import Loader from "../../utlis/Loader";
import Navbar from "../navbar/Navbar";
const Details = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct(id))
      .unwrap()
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
              <span className="text-indigo-400 mr-1 mt-1 font-bold text-indigo-600 text-3xl">{product.price}$</span>
            </div>
          </div>
          <div className="flex-1">
<p className="text-green-500 text-xl font-semibold">rating {product.rating?.rate}</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p className="text-gray-500">{product.description}</p>

        <div className="flex py-4 space-x-4">
        
          <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Add to Cart
          </button>
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
