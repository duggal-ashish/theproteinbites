import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import logo from "../assets/logo1.png";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="The Protein Bite" className="w-12 h-12" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            The Protein Bite
          </h1>
        </NavLink>

        {/* Search bar */}
        <div className="relative w-1/2 hidden md:block">
          <input
            type="text"
            placeholder="Search for your favorite snacks..."
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Cart & User */}
        <div className="flex items-center gap-4">
          <NavLink to="/login" className="p-2 border rounded-full">
            👤
          </NavLink>
          <NavLink to="/checkout" className="relative p-2 border rounded-full">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
