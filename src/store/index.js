import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
export default configureStore({
  reducer: {
    products,
  
  },
});
