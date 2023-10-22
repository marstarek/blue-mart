import { useEffect,useState } from "react"
import Product from "../product/Product";
import Loader from "../../utlis/Loader";
import Fuse from 'fuse.js';
const List = ({ products, isLoading }) => {
  const [query, updateQuery] = useState('');
  const fuse = new Fuse(products, {keys: ['title']});

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
    setFilterdProducts( query ? results.map(character => character.item) : products);
  }
  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : products;
  console.log(characterResults)
  const [filterdProducts, setFilterdProducts] = useState(products);
     useEffect(() => {
      setFilterdProducts(products)
     }, []);
  return (
     <>
     <h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text py-8 text-center text-5xl font-extrabold text-transparent">
       Our Products 
      </h1>
     

     <div>
       <div className="w-fit container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
         {isLoading ?<Loader/>: products?.map((product) => <Product product={product} key={product.id}/>)}
       </div>

       
     </div>
   </>
  )
}

export default List