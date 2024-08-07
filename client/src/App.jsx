import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import  Home  from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss"

const Layout = () => {
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/Products/:id",
        element: <Products />
      },
      {
        path:"/Product/:id",
        element: <Product />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
