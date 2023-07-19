import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaTwitter, FaReddit, FaDiscord, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SigninDiary = () => {


  const history = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailIsValid(email)) {
      setEmailError("*please enter a valid email address*");
      return;
    }
    if (password === "") {
      setPasswordError("*please enter your valid password*");
      return;
    }
    setEmail("");
    setPassword("");


  };

  const emailIsValid = (email) => {

    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  // console.log("Email:", email);
  // console.log("Password:", password);

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:9992/",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist"){
          history("/homediary",{state:{id:email}})

        }
        else if(res.data=="not exist"){
         alert("User have not signup")

        }
        
      })
      .catch(e =>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <div className="fixed top-0 bg-gradient-to-r from-blue to-lime min-h-screen left-0 w-full h-full">
      <div className="ml-4 mt-2   text-yellow1 font-bold text-3xl">
        coindiary
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-blue to-lime min-h-screen">
        <div className="bg-gray1 border border-stone1 shadow-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto p-8 rounded-xl">
          <h2 className="text-2xl font-serif text-red1  p-6 md:p-20 font-bold text-center">
            Sign-in
          </h2>
          <div className="flex flex-col items-center mb-4">
            <div className="relative mb-4">
              <input
                className="border border-gray rounded-lg h-12 md:w-full lg:w-full 2xl:w-screen  sm:max-w-md px-8 py-8 pl-12 text-lg focus:outline-none"
                type="text"
                placeholder="abc@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <AiOutlineMail className="absolute top-6 left-4 text-gray-600 text-2xl" />
            </div>
            {emailError && <p className="text-red2 text-center font-bold text-sm">{emailError}</p>}
            <div className="relative">
              <input
                className="border border-gray rounded-lg h-12 md:w-full 2xl:w-screen sm:max-w-md px-8 py-8 pl-12 text-lg focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <AiOutlineLock className="absolute top-6 left-4 text-gray-600 text-2xl" />
            </div>
            {passwordError && <p className="text-red2 text-center font-bold text-sm">{passwordError}</p>}

            <div className="text-right mt-2">
              <Link to="/forgotpassworddiary">
                <a
                  href="#"
                  className="text-blue1 font-medium underline  text-lg"
                >
                  Forgot password?
                </a>
              </Link>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-4xl text-blue hover:text-blue2 cursor-pointer" />
              </a>

              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReddit className="text-4xl text-red hover:text-red1 cursor-pointer" />
              </a>

              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-4xl text-blue2 hover:text-purple2 cursor-pointer" />
              </a>

              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl text-gray2 hover:text-gray3 cursor-pointer" />
              </a>
            </div>

            <button className="bg-blue1 hover:bg-blue2 text-white text-lg font-bold py-2 px-4 rounded-lg mt-8 2xl:w-full sm:w-auto"
              onClick={handleSubmit}>
              Sign in
            </button>

            <p className="text-center mt-4 font-bold text-gray text-md">
              Already have an account? <span className="text-blue1">Sign in</span>
            </p>

            <div className="flex items-center mt-4">
              <p className="text-gray font-bold">or</p>
            </div>
            <div className="bg-green1 hover:bg-green2 text-center text-white text-lg font-bold py-2 px-4 rounded-lg mt-4 2xl:w-2/3 sm:w-auto">
              <Link to="/createaccountdiary">
                <button >
                  Create New Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninDiary;
