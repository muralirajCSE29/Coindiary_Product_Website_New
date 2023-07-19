import React, { useState } from "react";

const ForgotPasswordDiary = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (email.trim() === "") {
      setError("Please enter your email address.");
      setMessage("");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
    } else {
      // Simulate sending email (replace with your own logic)
      setTimeout(() => {
        setError("");
        setMessage("Email sent successfully!");
      }, 2000);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="fixed top-0 bg-gradient-to-r from-purple to-red min-h-screen left-0 w-full h-full">
      <div className="ml-4 mt-2   text-yellow1 font-bold text-3xl">
        coindiary
      </div>
    <div className="flex items-center bg-gradient-to-r from-purple to-red justify-center h-screen bg-gray-100">
        
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <p className="text-gray mb-6">
          Enter your email address below to reset your password.
        </p>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
          >
            Reset Password
          </button>
          {error && <p className="text-red mt-4">{error}</p>}
          {message && <p className="text-green1 mt-4">{message}</p>}
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default ForgotPasswordDiary;
