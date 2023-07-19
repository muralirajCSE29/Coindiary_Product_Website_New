import React, { useState } from "react";
import { Link } from "react-router-dom";
import foximg from '../src/assets/foxorgimg.png';


const BasicInfoBio = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[90vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[30vw] pt-16 sm:ml-52 border border-white/50">
        <h1 className="flex justify-end text-gray font-semibold mr-3 mb-2">Step <span className="text-white">&nbsp;  2   </span>&nbsp;  of 6</h1>
        <div className="flex justify-end  items-center mb-6">
         
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ${
                currentStep === 1 ? "bg-red-500" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ${
                currentStep === 2 ? "bg-red-500" : "bg-gray/90"
              } mx-1`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ${
                currentStep === 3 ? "bg-red-500" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 4 ? "bg-red-500" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 5 ? "bg-red-500" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 6 ? "bg-red-500" : "bg-gray/90"
              }`}
            ></div>
          </div>
          <h1 className="text-white font-serif mt-2  text-2xl">Basic Info</h1>
          <h1 className="text-white font-serif text-xl mt-14">Bio</h1>
          <div>
          <input className="bg-slate-950 text-xl w-[27vw] h-[35vh] text-center border mt-5 text-gray1 "
                type="text"
                placeholder="Type here"
               />
          </div>

          <div className="flex justify-end mt-44">
            <button className="border border-gray-400 w-[5vw] text-white px-4 py-2   rounded-md mr-10">
              Skip
            </button>
            <Link to="/networkinformation">
              <button className="bg-red-700 w-[12vw] text-white px-4 py-2 rounded-md">
                next
              </button>
            </Link>
          </div>
        </div>

        <div className="text-white font-serif font-bold text-xl text-left absolute mt-2 top-[25%] left-0 ml-32">
        <img className="w-full  rounded-lg" src={foximg} alt="Logo" />
          
        </div>
      </div>
    </div>
  );
};

export default BasicInfoBio;
