import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/CategoryChips";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

// Cart Context
export const CartContext = React.createContext();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Categories />
                </>
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}
