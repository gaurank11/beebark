import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state?.email || ""); // Prefill email if passed from the previous page
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle SignUp form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    const userData = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch("https://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success: Display success toast and navigate to Sign In
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      } else {
        // Error: Display error toast
        setErrorMessage(result.message || "Something went wrong!");
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server.");
      toast.error("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg mt-44 sm:mt-12">
        {/* Left side: Sign Up Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-montserrat">
            TheBeeBark Sign Up
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-center mt-4">{errorMessage}</div>
            )}

            {/* Agree to Terms Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-green-600 hover:text-green-800">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>

            {/* Already have an account? */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <span>Already have an account? </span>
              <a href="/login" className="text-green-600 hover:text-green-800">
                Log In
              </a>
            </div>
          </form>

          {/* Legal Terms */}
          <div className="text-xs text-center mt-6 text-gray-500">
            By signing up, I agree to the{" "}
            <a href="/privacy" className="text-green-600 hover:text-green-800">
              Privacy Policy
            </a>
            .
          </div>
        </div>

        {/* Right side: Image + Continue Buttons */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center bg-cover bg-center rounded-t-lg sm:rounded-r-lg relative">
          {/* Image */}
          <div
            className="w-full sm:h-2/3 bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: "url('/logo-chill1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Continue Buttons (for mobile and desktop) */}
          <div className="w-full p-6 bg-white flex flex-col items-center space-y-4">
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/google_logo.png" alt="Google" className="mr-2 h-5 w-5" />
              Sign Up with Google
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/apple_logo.png" alt="Apple" className="mr-2 h-5 w-5" />
              Sign Up with Apple
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/facebook_logo.png" alt="Facebook" className="mr-2 h-5 w-5" />
              Sign Up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
