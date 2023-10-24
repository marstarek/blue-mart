import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getproducts = createAsyncThunk("products/getproducts",
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await fetch(`https://fakestoreapi.com/products`);
      const data = await result.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getproduct = createAsyncThunk(
  "products/getproduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      
      const result = await fetch(`https://fakestoreapi.com/products/${item}`, {
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      const data = await result.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const productslice = createSlice({
  name: "products",
  initialState: { products: [], isLoading: false, error: null,product:[],cart:[] },
   reducers: {
    addTocart: (state, action) => {
       const itemIncart = state.cart.find((item) => item.id === action.payload.id);
       console.log(state, action)
      if (itemIncart) {
        itemIncart.quantity=itemIncart.quantity+action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity ==0) {
         item.quantity = 1;
      }
      if (item.quantity === 1) {
        // item.quantity = 1;
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    emptyCart: (state, action) => {
      while (state.cart.length > 0) {
        state.cart.pop();
      }      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getproduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getproduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
  }
 
});
export default productslice.reducer;
export const {
  addTocart,
  incrementQuantity,
  decrementQuantity,
  removeItem,emptyCart
} = productslice.actions;


