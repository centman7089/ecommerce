// @ts-nocheck
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import PlaceOrder from "./pages/PlaceOrder";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="/place-order" element={<PlaceOrder/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/collection" element={<Collection/>} />
      {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      <Footer/>
  </div>
  )
};

export default App;
