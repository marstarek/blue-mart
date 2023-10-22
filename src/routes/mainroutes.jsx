import Layout from ".././utlis/Layout";
import RootBoundary from ".././utlis/RootBoundary";
import {createBrowserRouter} from "react-router-dom";

import Preloader from "../components/preloader/Preloader";
import Home from "../pages/home/Home";
import Details from "../components/details/Details";
import Orders from "../components/orders/Orders";
import OrderForm from "../components/orderform/OrderForm";
const routes = [
 
  {
    path: '/',
    element: <Home/>,
    errorElement: <RootBoundary />,
    loader: Preloader,
   
  },
  {
    path: '/details/:id',
    element: <Details/>,
    errorElement: <RootBoundary />,
    loader: Preloader,
  
  },
  {
    path: '/orders',
    element: <Orders/>,
    errorElement: <RootBoundary />,
    loader: Preloader,
 
  
  },
  {
    path: '/orderform',
    element: <OrderForm/>,
    errorElement: <RootBoundary />,
    loader: Preloader,
  
  }
]
const router = createBrowserRouter(routes);

export default router;