import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700 ">
        <Navbar />
        <Toaster position="bottom-left" reverseOrder={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
