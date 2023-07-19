import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import foximg from '../src/assets/foxorgimg.png';

const TeamCollaborators = () => {
  // State to hold the value of the Founder input
  const [founderName, setFounderName] = useState('');
  const [currentStep, setCurrentStep] = useState(4);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  // State to hold the validation error message
  const [nameError, setNameError] = useState('');

  // Function to handle changes in the Founder input
  const handleFounderChange = (e) => {
    const inputValue = e.target.value;
    // Regular expression to validate only names (letters and spaces)
    const nameRegex = /^[A-Za-z\s]+$/;

    if (nameRegex.test(inputValue)) {
      setFounderName(inputValue);
      setNameError('');
    } else {
      setFounderName('');
      setNameError('This is not a valid name');
    }
  };
  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[90vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[30vw] pt-16 sm:ml-52 border border-white/50">
        <h1 className="flex justify-end text-gray font-semibold mr-3 mb-2">Step <span className="text-white">&nbsp;  4   </span>&nbsp;  of 6</h1>
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
          <h1 className="text-white mt-14 font-serif text-2xl">Team Colloborators</h1>

          <div className="flex justify-between items-center mt-14 ">
            
            <div className="flex items-center ">
                
          </div>
            
          </div>
         

          <div className="flex mt-6 font-serif">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Founder</p>
              <input
            type="text"
            placeholder="Enter names"
            value={founderName}
            onChange={handleFounderChange}
            className={`bg-slate-900 text-gray1 w-[12vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none ${
              nameError ? 'border-red-500' : ''
            }`}
          />
          {nameError && (
            <div className="text-red-500 font-serif text-sm mt-1">{nameError}</div>
          )}
            </div>

            <div className="flex flex-col ml-10">
              <p className="text-lg text-white mt-2">Team Members</p>
              <input
                type="text"
                placeholder="invite through mail"
                className="bg-slate-900  text-gray1 border w-[12vw] h-[43px] mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex mt-8 font-serif ">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Supported Wallets</p>
              <input
                type="text"
                placeholder="  e.g.(concept,development,launch,research,...)"
                className="bg-slate-900 text-gray1 w-[27vw] h-[43px]  border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>

           
          </div>
          <div className="flex mt-8 font-serif ">
            

            
          </div>
          <div className="flex justify-end mt-[46%]">
            <button className="border border-gray-400 w-[5vw] text-white px-4 py-2   rounded-md mr-10">Skip</button>
            <Link to="/officiallinks">
            <button className="bg-red-700 w-[12vw] text-white px-4 py-2 rounded-md">next</button>
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


export default TeamCollaborators