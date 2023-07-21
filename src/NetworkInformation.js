import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import foximg from '../src/assets/foxorgimg.png';

const NetworkInformation = () => {
  const [selectedWallet, setSelectedWallet] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  const [currentStep, setCurrentStep] = useState(3);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle changes in the wallet selection
  const handleWalletChange = (e) => {
    setSelectedWallet(e.target.value);
  };

  const handleselectChain = (e) => {
    setSelectedChain(e.target.value);
  };

  // Supported wallets options (replace this with your actual list of wallets)
  const supportedWallets = [
    'Wallet 1',
    'Wallet 2',
    'Wallet 3',
    'Wallet 4',
    'Wallet 5',
    'Wallet 6',
    // Add more wallets here
  ];

  const supportedChain = [
    'Explorer 1',
    'Explorer 2',
    'Explorer 3',
    'Explorer 4',
    'Explorer 5',
    'Explorer 6',
  ];

  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[100vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[50vw] pt-16 sm:ml-[52%] border border-stone/10">
        <h1 className="flex justify-end text-gray font-semibold mr-3 mb-2">Step <span className="text-white">&nbsp;  3   </span>&nbsp;  of 6</h1>
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
          <h1 className="text-white font-serif mt-20 ml-[12%] text-2xl">Network NetworkInformation</h1>

          <div className="flex justify-between items-center mt-14">
            
            <div className="flex items-center">
                
          </div>
            
          </div>
         

          <div className="flex mt-6 font-serif ml-[12%]">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Total Supply</p>
              <input
                type="text"
                placeholder="enter total supply"
                className="bg-slate-900 text-gray1 w-[15vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col ml-[14%]">
              <p className="text-lg text-white mt-2">Circulating Supply</p>
              <input
                type="text"
                placeholder="enter circulating supply"
                className="bg-slate-900  text-gray1 border w-[15vw] h-[43px] mt-3 border-gray1 rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex mt-12 font-serif ml-[12%] ">
            <div className="flex flex-col mr-4">
            <p className="text-lg text-white mt-2">Supported Wallets</p>
            <select
            value={selectedWallet}
            onChange={handleWalletChange}
            className="bg-slate-900 text-gray1 w-[15vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
          >
            <option value="" disabled>Select supported wallet</option>
            {supportedWallets.map((wallet, index) => (
              <option key={index} value={wallet}>
                {wallet}
              </option>
            ))}
          </select>
            </div>

            <div className="flex flex-col ml-[14%]">
              <p className="text-lg text-white mt-2">Chain Explorer</p>
              <select
            value={selectedChain}
            onChange={handleselectChain}
            className="bg-slate-900 text-gray1 w-[15vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
          >
            <option value="" disabled>Select chain explorer</option>
            {supportedChain.map((Explorer, index) => (
              <option key={index} value={Explorer}>
                {Explorer}
              </option>
            ))}
          </select>
            </div>
          </div>
          <div className="flex mt-8 font-serif ">
            

            
          </div>
          <div className="flex justify-center ml-20 mt-60">
            <button className="border border-gray-400 w-[5vw] text-white px-4 py-2   rounded-md mr-10">Skip</button>
            <Link to="/teamcolloborators">
            <button className="bg-red-700 w-[12vw] text-white px-4 py-2 rounded-md">next</button>
            </Link>
          </div>
        </div>
        

        <div className="text-white font-serif font-bold text-xl text-left absolute mt-2 top-[15%] left-0 ml-48">
        <img className="w-[30vw]  rounded-lg" src={foximg} alt="Logo"/>
          
        </div>
      </div>
    </div>
  );
};

 

export default NetworkInformation
