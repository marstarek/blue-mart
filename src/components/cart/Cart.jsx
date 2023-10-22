import { useDispatch,useSelector } from 'react-redux';
import {addTocart ,incrementQuantity, decrementQuantity, removeItem} from '../../store/productSlice';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {
     const  {cart}  = useSelector((state) => state.products);
     console.log(cart)
const dispatch = useDispatch()
const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart?.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (
     <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart?.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-[50vw] bg-base-100 shadow">
        <div className="card-body flex flex-col">
        {cart?.length>=1?cart?.map((item) => (
            
       
            <CartItem 
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price} 
            quantity={item.quantity}
             />
      
      
                   )):<p className="empty text-dark">Cart is empty</p>
                   
                   }
                      <div className="card-actions flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-500">Subtotal: {getTotal().totalPrice}</span>
                           <Link to={"/orders"}>
                           <button className="btn  text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400 m-4"> Review Order</button>
                           
                           </Link>
                        

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart



