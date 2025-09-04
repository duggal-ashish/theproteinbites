import React, { useContext, useState } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [instructions, setInstructions] = useState({});
  const [address, setAddress] = useState({
    house: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const [paymentMode, setPaymentMode] = useState(""); 
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const updateQuantity = (index, type) => {
    const updated = [...cart];
    if (type === "increase") {
      updated[index].quantity += 1;
    } else if (type === "decrease") {
      if (updated[index].quantity > 1) {
        updated[index].quantity -= 1;
      } else {
        updated.splice(index, 1);
      }
    }
    setCart(updated);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * parseInt(item.price.replace("₹", "")),
    0
  );
  const platformFee = 5;
  const deliveryCharge = subtotal >= 399 ? 0 : 20;
  const total = subtotal + platformFee + deliveryCharge;

  const handlePlaceOrder = () => {
    if (
      !address.house ||
      !address.street ||
      !address.city ||
      !address.district ||
      !address.state ||
      !address.pincode
    ) {
      alert("⚠️ Please fill all required address fields!");
      return;
    }

    if (!paymentMode) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    if (paymentMode === "card") {
      if (!cardDetails.name || !cardDetails.number || !cardDetails.exp || !cardDetails.cvv) {
        alert("⚠️ Please fill all card details!");
        return;
      }
    } else if (paymentMode === "upi") {
      if (!upiId) {
        alert("⚠️ Please enter UPI ID!");
        return;
      }
    }

    alert("✅ Payment successful! Your order has been placed.");
    navigate("/menu"); // redirect to menu after successful order
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start bg-white shadow p-4 rounded-lg"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
                <textarea
                  placeholder="Any cooking instructions?"
                  value={instructions[item.name] || ""}
                  onChange={(e) =>
                    setInstructions({ ...instructions, [item.name]: e.target.value })
                  }
                  className="mt-2 w-full border rounded-lg p-2 text-sm"
                />
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3 ml-4">
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

          {/* Address Section */}
          <div className="bg-white p-4 rounded-lg shadow space-y-3">
            <h2 className="text-xl font-semibold">Delivery Address</h2>
            {["house", "street", "city", "district", "state", "pincode", "landmark"].map((field, i) => (
              <input
                key={i}
                placeholder={
                  field === "house"
                    ? "House / Flat No."
                    : field === "street"
                    ? "Street Name"
                    : field === "city"
                    ? "City"
                    : field === "district"
                    ? "District"
                    : field === "state"
                    ? "State"
                    : field === "pincode"
                    ? "Pincode"
                    : "Nearby Landmark (Optional)"
                }
                className="w-full border p-2 rounded"
                value={address[field]}
                onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
              />
            ))}
          </div>

          {/* Payment Section */}
          <div className="bg-white p-4 rounded-lg shadow space-y-3">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMode === "card"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                Card (Credit/Debit)
              </label>
              {paymentMode === "card" && (
                <div className="space-y-2">
                  <input
                    placeholder="Card Holder Name"
                    className="w-full border p-2 rounded"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                  />
                  <input
                    placeholder="Card Number"
                    className="w-full border p-2 rounded"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <input
                      placeholder="Exp Date (MM/YY)"
                      className="w-1/2 border p-2 rounded"
                      value={cardDetails.exp}
                      onChange={(e) => setCardDetails({ ...cardDetails, exp: e.target.value })}
                    />
                    <input
                      placeholder="CVV"
                      className="w-1/2 border p-2 rounded"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    />
                  </div>
                </div>
              )}

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMode === "upi"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                UPI
              </label>
              {paymentMode === "upi" && (
                <input
                  placeholder="Enter UPI ID"
                  className="w-full border p-2 rounded"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              )}

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMode === "cod"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Total Section */}
          <div className="bg-white p-4 rounded-lg shadow text-lg space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee:</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery:</span>
              <span>{deliveryCharge === 0 ? "Free 🚚" : `₹${deliveryCharge}`}</span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t pt-2">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
