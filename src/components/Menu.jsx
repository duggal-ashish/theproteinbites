import React, { useState, useContext } from "react";
import { CartContext } from "../App";

// ... your same menu data
const menu = {
  "Salad": [
    { 
        name: "Blanch Veg. Salad", 
        price: "₹100", 
        ingredients: "Carrot, cucumber, broccoli, capsicum (R.G.Y.), baby corn, sweet corn, onion, iceberg, mushroom, green & black olives, spices.", 
        type: "veg" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qrfmwP9ST0TSHB7ZV84XgodmGOutolPN4A&s",
        rating: 4.5,
    },
    { 
        name: "Kidney Beans Salad", 
        price: "₹120", 
        ingredients: "Kidney Beans, carrot, broccoli, capsicum, baby corn, sweet corn, onion, mushroom, green & black olives, spices.", 
        type: "veg" ,
        img: "https://www.whiskaffair.com/wp-content/uploads/2019/03/Kidney-Bean-Salad-1-3.jpg",
        rating: 4.5,
    },
    { 
        name: "Chik-Pea Salad", 
        price: "₹120", 
        ingredients: "Chik-pea, carrot, broccoli, capsicum, sweet corn, onion, mushroom, green & black olives, spices.", 
        type: "veg" ,
        img: "https://thedeliciousplate.com/wp-content/uploads/2022/01/Indian-chickpea-salad-16-2.jpg",
        rating: 4.5,
    },
    { 
        name: "Roasted Veg Salad", 
        price: "₹110", 
        ingredients: "Carrot, broccoli, capsicum, baby corn, sweet corn, onion, iceberg, mushroom, cucumber, spices.", 
        type: "veg" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3paiEc3sLtPcP-iVS_ywORhc5EU9vyPL66g&s",
        rating: 4.5,
    },
    { 
        name: "Paneer Blanch Salad", 
        price: "₹120", 
        ingredients: "Paneer, carrot, cucumber, broccoli, capsicum, baby corn, sweet corn, onion, iceberg, mushroom, spices.", 
        type: "veg" ,
        img: "https://healthyhomerecipe.com/wp-content/uploads/2024/09/Homemade-Paneer-Salad.jpg",
        rating: 4.5,
    },
    { 
        name: "Tofu Blanch Salad", 
        price: "₹100", 
        ingredients: "Tofu (spiced/plain), carrot, cucumber, broccoli, capsicum, baby corn, sweet corn, onion, iceberg, mushroom, spices.", 
        type: "veg" ,
        img: "https://foodtrails25.com/wp-content/uploads/2024/02/Tofu-Salad-recipe.jpg",
        rating: 4.5,
    },
    { 
        name: "Soya Steam Kabab", 
        price: "₹50", 
        ingredients: "Soyabean, gram-flour, spices.", 
        type: "veg" ,
        img: "https://maayeka.com/wp-content/uploads/2013/09/veg-soya-seekh-kabab.jpg",
        rating: 4.5,
    },
    { 
        name: "Veg. Soup (100ml)", 
        price: "₹30", 
        ingredients: "Water, sweet corn, carrot, beans, mushroom, spices.", 
        type: "veg" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQH49waX_-KXhT09Z5dF19nv292n22KbwZQ&s",
        rating: 4.5,
    },
    // Example non-veg for demo
    { 
        name: "Chicken Salad", 
        price: "₹150", 
        ingredients: "Chicken, lettuce, cucumber, tomato, spices.", 
        type: "nonveg",
        img: "https://eatthegains.com/wp-content/uploads/2018/08/Buffalo-Chicken-Salad-4.jpg",
        rating: 4.5, 
    },
  ],
  "Meals": [
    { 
        name: "Veg. Sandwich", 
        price: "₹50", 
        ingredients: "Carrot, cucumber, capsicum (R.G.Y.), sweet corn, onion, tomato, cabbage, veg-sauce.", 
        type: "veg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNG6YHlYs-4zSLpSCWlfWbRNLVBEPemX7PTw&s",
        rating: 4.5,
    },
    { 
        name: "Paneer Sandwich", 
        price: "₹70", 
        ingredients: "Cucumber, sweet corn, onion, tomato, veg-sauce.", 
        type: "veg",
        img: "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Smoked-Tandoori-Paneer-Sandwich-500x500.jpg",
        rating: 4.5,
    },
    { 
        name: "Paneer Chilla", 
        price: "₹80", 
        ingredients: "Gram-flour, paneer, carrot, capsicum (R.G.Y.), sweet corn, onion, tomato, cabbage, spices.", 
        type: "veg",
        img: "https://www.chefkunalkapur.com/wp-content/uploads/2024/04/DSC09226-1300x731.jpg",
        rating: 4.5,
    },
    { 
        name: "Brown Rice",
        price: "₹100",
        ingredients: "Brown rice, carrot, broccoli, capsicum (R.G.Y.), baby corn, sweet corn, onion, mushroom, spices.", 
        type: "veg",
        img: "https://minimalistbaker.com/wp-content/uploads/2015/08/Fried-Rice-SQUARE.jpg",
        rating: 4.5, 
    },
    // Example non-veg for demo
    { 
        name: "Egg Sandwich", 
        price: "₹90", 
        ingredients: "Egg, onion, tomato, lettuce, mayo.", 
        type: "nonveg",
        img: "https://umamipot.com/wp-content/uploads/2024/01/tamago-sando.jpg",
        rating: 4.5, 
    },
  ],
};

export default function Menu() {
  const [filter, setFilter] = useState("all"); 
  const { cart, setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [expanded, setExpanded] = useState({}); // track which items are expanded

  const changeQuantity = (itemName, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[itemName] || 1) + delta);
      return { ...prev, [itemName]: newQty };
    });
  };

  const addToCart = (item) => {
    const qty = quantities[item.name] || 1;
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.name === item.name);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
    alert(`${item.name} added to cart (${qty})`);
  };

  const toggleExpand = (itemName) => {
    setExpanded((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Menu
      </h1>

      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-8">
        {["all", "veg", "nonveg"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              filter === f
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {f === "all" ? "All" : f === "veg" ? "Veg 🟩" : "Non-Veg 🟥"}
          </button>
        ))}
      </div>

      {/* Menu Sections */}
      {Object.entries(menu).map(([category, items]) => {
        const filteredItems =
          filter === "all" ? items : items.filter((item) => item.type === filter);

        if (filteredItems.length === 0) return null;

        return (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-400 inline-block">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => {
                const isExpanded = expanded[item.name];
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#f4ffe6] via-[#eafff1] to-[#7FB45A]/20 shadow-md rounded-xl p-4 hover:shadow-lg transition flex flex-col"
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Name + Price */}
                    <div className="flex justify-between items-center mt-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-green-600 font-bold">
                        {item.price}
                      </span>
                    </div>

                    {/* Ingredients with "See more" */}
                    <p
                      className={`text-sm text-gray-600 mt-2 ${
                        !isExpanded ? "line-clamp-2 sm:line-clamp-none" : ""
                      }`}
                    >
                      {item.ingredients}
                    </p>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="text-green-600 text-xs mt-1 sm:hidden"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>

                    {/* Rating */}
                    <p className="mt-2 text-yellow-500 text-sm font-medium">
                      ⭐ {item.rating}
                    </p>

                    {/* Veg / Non-Veg Dot */}
                    <div className="mt-2">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          item.type === "veg" ? "bg-green-600" : "bg-red-600"
                        }`}
                        title={item.type === "veg" ? "Veg" : "Non-Veg"}
                      ></span>
                    </div>

                    {/* Quantity + Add to Cart */}
                    <div className="mt-4 flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => changeQuantity(item.name, -1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{quantities[item.name] || 1}</span>
                        <button
                          onClick={() => changeQuantity(item.name, 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
