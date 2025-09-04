import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/CategoryChips";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

// Contexts
export const CartContext = createContext();
export const AuthContext = createContext();

function AppLayout() {
  const location = useLocation();

  // ✅ Hide Header & Footer on Login page
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-white">
      {!hideHeaderFooter && <Header />}
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
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Router>
          <AppLayout />
        </Router>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}
