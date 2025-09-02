import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

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
      navigate("/menu"); // ✅ Redirect to menu page
    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {!otpSent ? (
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
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP (try 1234)"
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
