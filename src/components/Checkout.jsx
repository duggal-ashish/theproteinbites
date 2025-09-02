import React, { useContext } from "react";
import { CartContext } from "../App";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const updateQuantity = (index, type) => {
    const updated = [...cart];
    if (type === "increase") {
      updated[index].quantity += 1;
    } else if (type === "decrease") {
      if (updated[index].quantity > 1) {
        updated[index].quantity -= 1;
      } else {
        updated.splice(index, 1); // remove if quantity = 0
      }
    }
    setCart(updated);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * parseInt(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(index, "decrease")}
                  className="px-3 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, "increase")}
                  className="px-3 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex justify-between items-center text-xl font-bold mt-6">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
