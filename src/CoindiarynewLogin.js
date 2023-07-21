import { AiOutlineApple, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import React, { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";
import foximg from '../src/assets/foxorgimg.png';

const CoindiarynewLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("*Email is required*");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    }

    // Validate password
    if (!password) {
      setPasswordError("*Password is required*");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }

    // Check if form fields are empty
    if (!email || !password) {
      showAlert("Required field should not be empty");
    } else if (!emailError && !passwordError) {
      // Proceed with form submission if there are no errors
      showAlert("Form submitted successfully");
      resetForm();
    }
  };

  const showAlert = (message) => {
    alert(message);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[100vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[50vw] pt-36 ml-[52%] border border-stone/10">
          <h1 className="text-white font-serif font-bold text-center text-4xl ">
            Create a Publisher Account
          </h1>
          <div className="text-white font-serif text-xl ml-[22%] mt-10 mb-4">
            <label htmlFor="email">Official Email Id</label>
          </div>
          <div className="flex items-center ml-[22%] ">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-slate-900 w-full md:w-[20vw] h-[43px] text-gray1 text-lg border px-2 py-1 rounded ${
                emailError && "border-red-500"
              }`}
              placeholder="Enter your email"
            />
            {email && (
              <MdOutlineCancel
                className="text-gray1 ml-2 cursor-pointer"
                size={22}
                onClick={() => setEmail("")}
              />
            )}
          </div>
          {emailError && (
            <div className="text-red-500 font-serif text-sm ml-48 mt-2">
              {emailError}
            </div>
          )}
          <div className="text-white font-serif text-xl text-left ml-[22%] mb-4 mt-6">
            <label htmlFor="password">Password</label>
          </div>
          <div className="flex items-center ml-[22%]">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`bg-slate-900 w-full md:w-[20vw] h-[43px] text-gray1 text-lg border px-2 py-1 rounded ${
                passwordError && "border-red-500"
              }`}
              placeholder="Enter your password"
            />
            {password && (
              <div className="flex">
                {passwordVisible ? (
                  <AiOutlineEye
                    className="text-gray1 ml-2 cursor-pointer"
                    size={22}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="text-gray1 ml-2 cursor-pointer"
                    size={22}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            )}
          </div>
          {passwordError && (
            <div className="text-red-500 font-serif text-sm ml-48 mt-2">
              {passwordError}
            </div>
          )}
          <div className="flex  mt-4 ml-[22%]">
            <button
              className="bg-green-800 w-full md:w-[20vw] h-[55px] hover:bg-blue text-lg font-serif text-white px-4 py-2 rounded mt-4"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
          <div className="font-semibold text-md text-gray1 ml-[36%]  mt-6">
            <Link to="/basicInfo">Or connect with socials</Link>
          </div>
          <div className="flex ml-[22%] ">
            <a
              href="https://appleid.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 w-full md:w-[20vw] h-[55px] text-white px-4 py-2 rounded mt-4 flex items-center justify-center"
            >
              <AiOutlineApple size={25} className="text-white" />
              <span className="text-lg ml-4 mr-2 font-serif">
                Connect with Apple
              </span>
            </a>
          </div>
          <div className="flex ml-[22%]">
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border w-full md:w-[20vw] h-[55px] text-white px-4 py-2 rounded mt-4 flex items-center justify-center"
            >
              <FaGooglePlusG size={25} className="ml-4" />
              <span className="text-lg ml-4 mr-2 font-serif">
                Connect with Email
              </span>
            </a>
          </div>
        </div>
        <div className="text-white font-serif font-bold text-xl text-left absolute mt-2 top-[15%]   left-0  md:ml-3   2xl:ml-48  ">
          <img className="w-[30vw]  rounded-lg " src={foximg} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default CoindiarynewLogin;
