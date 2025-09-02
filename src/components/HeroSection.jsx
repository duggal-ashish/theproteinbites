import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white text-center flex flex-col items-center justify-center h-[60vh] relative">
      <img src={logo} alt="Logo" className="w-32 mb-4" />
      <h2 className="text-4xl font-bold mb-2">
        Craving for <span className="text-yellow-300">Protein?</span>
      </h2>
      <p>Discover delicious treats delivered in a flash.</p>
      <button
        onClick={() => navigate("/menu")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
      >
        Order Now
      </button>
    </div>
  );
};

export default HeroSection;
