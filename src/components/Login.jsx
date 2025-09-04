import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      alert("OTP sent to " + mobile);
    } else {
      alert("Enter valid mobile number");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      alert("Login successful ✅");
      setIsLoggedIn(true);
      navigate("/menu");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  const handleRegister = () => {
    if (!name || !mobile || !address) {
      alert("⚠️ Please fill all details!");
      return;
    }
    alert("Registered Successfully ✅, Now Verify OTP");
    setOtpSent(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          {isRegister ? "Register" : "Login"}
        </h2>

        {/* Toggle Tabs */}
        <div className="flex justify-around mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              !isRegister ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(false)}
          >
            Already Registered
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              isRegister ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(true)}
          >
            New Register
          </button>
        </div>

        {/* Register Form */}
        {isRegister && !otpSent && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3"
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              onClick={handleRegister}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Register & Send OTP
            </button>
          </>
        )}

        {/* Login Form */}
        {!isRegister && !otpSent && (
          <>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Send OTP
            </button>
          </>
        )}

        {/* OTP Verify */}
        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP (1234)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
