import React, { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import foximg from "../src/assets/foxorgimg.png";


const BasicInfonewCoindiary = () => {
  const [selectIndustrytype, setSelectedIndustrytype] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleIndustryType = (e) => {
    setSelectedIndustrytype(e.target.value);
  };
  const supportedIndustrytype = [
    "Type 1",
    "Type 2",
    "Type 3",
    "Type 4",
    // Add more wallets here
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        
        
        <div className="bg-stone p-4 h-[90vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[30vw] pt-16 sm:ml-52 border border-white/50 ">
        <h1 className="flex justify-end text-gray font-semibold mr-3 mb-2">Step <span className="text-white">&nbsp;  1   </span>&nbsp;  of 6</h1>
        <div className="flex justify-end  items-center   mb-6">
         
            <div
              className={`w-2.5 h-2.5 mx-2  rounded-full ${
                currentStep === 1 ? "bg-red-500" : "bg-gray"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ${
                currentStep === 2 ? "bg-red-700" : "bg-gray/90"
              } mx-1`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ${
                currentStep === 3 ? "bg-red-700" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 4 ? "bg-red-700" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 5 ? "bg-red-700" : "bg-gray/90"
              }`}
            ></div>
            <div
              className={`w-2.5 h-2.5 mx-2 rounded-full ml-1 ${
                currentStep === 6 ? "bg-red-700" : "bg-gray/90"
              }`}
            ></div>
          </div>
          <h1 className="text-white font-serif text-2xl">Basic Info</h1>
          

          <div className="flex justify-between items-center mt-8 ">
            <div className="bg-stone-500 rounded-full mb-0 w-28 h-28 flex items-center justify-center mr-2">
              <TbCameraPlus className="text-4xl text-white/70" />
            </div>
            <div className="flex items-center ">
              <div className="ml-4">
                <p className="text-white ml-7 pb-3 font-serif font-thin ">
                  Username
                </p>
                <label>
                  <div className="border border-dashed mb-7 text-white/60 rounded-md w-[20vw] h-24 ml-4 flex  items-center justify-center">
                    <input type="file" className="hidden" />
                    <LuImagePlus className="text-white/60 text-4xl" />
                    <div className="ml-8">
                      <p className="text-white text-md">
                        <span className="underline">Select</span> a file or drag
                        and drop here
                      </p>
                      <p className="text-gray font-bold text-xs">
                        JPG, PNG or PDF file size no more than 10 MB
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex mt-6 font-serif">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Username</p>
              <input
                type="text"
                placeholder="Username"
                className="bg-slate-900 text-gray1 w-[12vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col ml-10">
              <p className="text-lg text-white mt-2">Launch Date</p>
              <input
                type="date"
                className="bg-slate-900  text-gray1 border w-[12vw] h-[43px] mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex mt-8 font-serif ">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Industry Type</p>
              <select
                value={selectIndustrytype}
                onChange={handleIndustryType}
                className="bg-slate-900 text-gray1 w-[12vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select Industry Type
                </option>
                {supportedIndustrytype.map((Type, index) => (
                  <option key={index} value={Type}>
                    {Type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col ml-10">
              <p className="text-lg text-white mt-2">Coin/Token Name</p>
              <input
                type="text"
                placeholder="Enter Coin/Token Name"
                className="bg-slate-900 text-gray1 border w-[12vw] h-[43px] mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex mt-8 font-serif ">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Blockchain Platform</p>
              <input
                type="text"
                placeholder="Enter Blockchain Platform"
                className="bg-slate-900 text-gray1 w-[12vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col ml-10">
              <p className="text-lg text-white mt-2">Native Token</p>
              <input
                type="text"
                placeholder="Enter Native Token"
                className="bg-slate-900 text-gray1 border w-[12vw] h-[43px] mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end mt-14">
            <button className="border border-gray-400 w-[5vw] text-white px-4 py-2   rounded-md mr-10">
              Skip
            </button>
            <Link to="/basicInfobio">
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

export default BasicInfonewCoindiary;
