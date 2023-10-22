import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const Navbar = () => {
  return (
<div className="navbar bg-blue-100">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost normal-case text-xl">BLUE MART</Link>
  </div>
  <div className="flex-none">
   <Cart></Cart>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="./images/profile.jpg" />
        </div>
      </label>
    
    </div>
  </div>
</div>
  )
}

export default Navbar