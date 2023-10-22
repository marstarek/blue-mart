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
  // const [filterdProducts, setFilterdProducts] = useState(products);
  // const [query, updateQuery] = useState('');
  // const fuse = new Fuse(products, {keys: ['title']});

  // function onSearch({ currentTarget }) {
  //   updateQuery(currentTarget.value);
  // }
  //   useEffect(() => {
  //   const results = fuse.search(query);
  //   const characterResults = query ? results.map(character => character.item) : products;
  //   setFilterdProducts(characterResults)
  //    }, [query]);

     return (
       <> 
          {/* <div className="flex justify-center items-center w-full  py-4">
          <input type="text" className='border-2 w-1/2 py-2 ' value={query} onChange={onSearch} />
         </div> */}
         <Navbar></Navbar>
         <List products={products} isLoading={isLoading} />

       </>

  )
}

export default Home