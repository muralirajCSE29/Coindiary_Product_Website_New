import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import foximg from '../src/assets/foxorgimg.png';

const OfficialLinks = () => {
  const [githubLink, setGithubLink] = useState('');
  const [whitePaper, setWhitePaper] = useState('');
  const [currentStep, setCurrentStep] = useState(5);

  const handleGithubLinkChange = (event) => {
    setGithubLink(event.target.value);
  };

  const handleWhitePaperChange = (event) => {
    setWhitePaper(event.target.value);
  };

  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[100vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[50vw] pt-16 sm:ml-[52%] border border-stone/10">
        <h1 className="flex justify-end text-gray font-semibold mr-3 mb-2">Step <span className="text-white">&nbsp;  5   </span>&nbsp;  of 6</h1>
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
          <h1 className="text-white font-serif mt-14 ml-[12%] text-2xl">Official Links</h1>

          <div className="flex justify-between items-center mt-14">
            <div className="flex items-center"></div>
          </div>

          <div className="flex mt-6 font-serif text-2xl ml-[12%] ">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">Github</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="  enter github links"
                  value={githubLink}
                  onChange={handleGithubLinkChange}
                  className="bg-slate-900 text-xl text-gray1 w-[27vw] h-[43px] border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
                />
                {githubLink && (
                  <MdOutlineCancel
                    className="text-gray-600  text-2xl absolute top-[32px] transform -translate-y-1/2 right-3"
                    onClick={() => setGithubLink('')}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex mt-8 font-serif ml-[12%]">
            <div className="flex flex-col mr-4">
              <p className="text-lg text-white mt-2">White Paper</p>
              <div className="relative">
                <input
                  type="file"
                  placeholder="  attach white paper"
                  value={whitePaper}
                  onChange={handleWhitePaperChange}
                  className="bg-slate-900 text-gray1 w-[27vw] h-[43px]  border mt-3 border-gray1 rounded-md p-2 focus:outline-none"
                />
                {whitePaper && (
                  <MdOutlineCancel
                    className="text-gray-600 text-2xl absolute top-[32px] transform -translate-y-1/2 right-3"
                    onClick={() => setWhitePaper('')}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center ml-20 mt-[35%]">
            <button className="border border-gray-400 w-[5vw] text-white px-4 py-2   rounded-md mr-10">
              Skip
            </button>
            <Link to="/welcometocoindiary">
              <button className="bg-red-700 w-[12vw] text-white px-4 py-2 rounded-md">next</button>
            </Link>
          </div>
        </div>

        <div className="text-white font-serif font-bold text-xl text-left absolute mt-2 top-[15%] left-0 ml-48">
        <img className="w-[30vw]  rounded-lg" src={foximg} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default OfficialLinks;
