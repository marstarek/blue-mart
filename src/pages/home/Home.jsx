import {useEffect, useState} from 'react'

import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../store/productSlice";

import List from '../../components/list/List';
import Fuse from 'fuse.js';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
    // setFilterdProducts(products)
  }, [dispatch]);
  const { isLoading, products } = useSelector((state) => state.products);
  const [filterdProducts, setFilterdProducts] = useState(products);
  const [query, setQuery] = useState('');
  const fuse = new Fuse(products, {keys: ['title',"category"]});
  useEffect(() => {
    setFilterdProducts(products)
     }, []);
  function onSearch({ currentTarget }) {
    setQuery(currentTarget.value);
  }
    useEffect(() => {
    const results = fuse.search(query);
    const characterResults = query ? results.map(character => character.item) : products;
    setFilterdProducts(characterResults)
     });


     return (
       <> 
         
         <Navbar></Navbar>
         <h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text pt-8 text-center text-5xl font-extrabold text-transparent">
          Blue Mart  
          </h1>
         <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text py-4 text-center text-lg  text-transparent">
         100% original products.Multiple Payment Options. Subscribe To Newsletter. Gift Cards Available 
          </h2>
         <div className="flex justify-center items-center w-full  py-4">
       
       <div className="relative w-1/2">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
               </svg>
           </div>
           <input value={query} onChange={onSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search  name , category..." required />
           
       </div>
            </div>
         
         <List products={filterdProducts} isLoading={isLoading} view={"Horizontal"} />

       </>

  )
}

export default Home