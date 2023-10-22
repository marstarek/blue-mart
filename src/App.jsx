import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./routes/mainroutes"



const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;