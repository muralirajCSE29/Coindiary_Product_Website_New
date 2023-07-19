import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaDiscord, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateaccountDiary = () => {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
 

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
    if (password.length < 5) {
      setPasswordError("*password must be at least 5 characters long*");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("*password and confirm password must be same* ");
      return;
    }

    if (! isChecked) {
        alert("If you are 18+ or above please select check box and continue");
        return;
      }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsChecked(false); 
    alert("Account Created Successfully");
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  


  const emailIsValid = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

    
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("confirmpassword:", confirmPassword);

    async function submit(e){
      e.preventDefault();
  
      try{
  
        await axios.post("http://localhost:9992/createaccountdiary",{
          email,password
        })
        .then(res=>{
          if(res.data=="exist"){
            alert("User already exist")
            
  
          }
          else if(res.data=="not exist"){
            history("/homediary",{state:{id:email}})
  
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
    <div className="fixed top-0 bg-gradient-to-r from-purple to-lime min-h-screen left-0 w-full h-full">
      <div className="ml-4 mt-2   text-yellow1 font-bold text-3xl">
        coindiary
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-purple to-lime min-h-screen">
        <div className="bg-gray1 border border-stone1 shadow-2xl w-full  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4  p-8 rounded-xl">
          <h2 className="2xl:text-3xl font-serif md:text-xl lg:text-xl  p-6 md:p-20 font-bold text-red1 text-center">
            Create Account
          </h2>
          <div className="flex justify-center items-center h-full">
            <div>
              <div className="relative">
                <input
                  className="border border-gray rounded-lg h-12 md:w-full 2xl:w-screen sm:max-w-md px-8 py-8 pl-12 text-lg focus:outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <AiOutlineMail className="absolute top-6 left-4  text-2xl" />
              </div>
              {emailError && <p className="text-red2 text-center font-bold text-sm">{emailError}</p>}
                <div className="relative mt-4">
                    <input
                    className="border border-gray rounded-lg h-12 md:w-full 2xl:w-screen sm:max-w-md px-8 py-8 pl-12 text-lg focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                    <AiOutlineLock className="absolute top-6 left-4  text-2xl" />
                </div>
              {passwordError && <p className="text-red2 text-center font-bold  text-sm">{passwordError}</p>}
              {/* <div className="relative mt-4">
                
                <input
                  className="border border-gray rounded-lg h-12 md:w-full 2xl:w-screen sm:max-w-md px-8 py-8 pl-12 text-lg focus:outline-none"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <AiOutlineLock className="absolute top-6 left-4  text-2xl" />
                {confirmPasswordError && (
                  <p className="text-red2 text-center font-bold  text-sm">{confirmPasswordError}</p>
                )}
              </div> */}

              <p className="text-center mt-4 font-bold text-gray">or</p>
              <p className="text-center font-bold mt-4 text-gray">
                Sign up with Social account
              </p>

              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://www.twitter.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-3xl text-blue hover:text-blue2 cursor-pointer" />
                </a>
                <a
                  href="https://www.reddit.com/register/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaReddit className="text-3xl text-red hover:text-red1 cursor-pointer" />
                </a>
                <a
                  href="https://discord.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="text-3xl text-blue2 hover:text-purple2 cursor-pointer" />
                </a>
                <a
                  href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ftopics%2Flogin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl text-gray2 hover:text-gray3 cursor-pointer" />
                </a>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-full border-gray border"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  
                />
                <p className="ml-4 font-bold  text-gray text-sm">
                  (I certify that I am 18 years of age or older, and I agree to
                  the user agreement and privacy policy)
                </p>
              </div>
              <button
                className="bg-blue1 hover:bg-blue2 text-center ml-20  text-white text-lg font-bold py-2 px-4 rounded-lg mt-8 2xl:w-2/3 sm:w-auto"
                onClick={handleSubmit}
                
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateaccountDiary;
