import { useEffect,useState } from "react"
import Product from "../product/Product";
import Loader from "../../utlis/Loader";
import Fuse from 'fuse.js';
import { BsFillGridFill,BsCardList } from "react-icons/bs";
import {MdOutlineTableRows } from "react-icons/md";
import HorizProduct from "../product/HorizProduct";

const List = ({ products, isLoading }) => {
  const [view, setView] = useState(true);

  return (
     <>
    
     

      <div>
      <div className="flex justify-end  items-center w-full  mx-auto  gap-2 py-2 container px-4">
           <button className="  text-blue-700 hover:text-black  text-2xl  " id="grid"
             onClick={(e) => setView(true)}> <BsFillGridFill></BsFillGridFill> 
           </button>
           <button className=" text-blue-700 hover:text-black  text-3xl " id="list"
             onClick={(e) => setView(false)}> <MdOutlineTableRows></MdOutlineTableRows> 
           </button>
       
         </div>
        <div className={`w-fit container mx-auto grid ${view?"grid-cols-1 lg:grid-cols-3 md:grid-cols-2":"grid-cols-1"}  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 px-4`}>
          
         {isLoading ?<Loader/>:view? products?.map((product) => <Product product={product} key={product.id}/>):products?.map((product) => <HorizProduct product={product} key={product.id}/>)}
       </div>

       
     </div>
   </>
  )
}

export default List