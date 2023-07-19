import React from "react";
import Icons from "./Icons";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import MainComponentTwitter from "./MainComponentTwitter";

const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-slate-950">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <Icons />
        <MainComponentTwitter /> 
        
        
        <main className=" sticky top-0 flex  w-[3600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-400 ">
          <h1 className="text-xl font-bold  text-white p-6 backdrop-blur bg-slate-950 sticky top-0 ">
            Home
          </h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600  relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="w-full text-white h-full placeholder:text-gray-600  placeholder:text-xl bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
                placeholder="What's happening?"
              />

              <div className="w-full justify-between items-center flex">
               
                <div className="w-full max-w-[100px]">
                  <button
                    className="rounded-full bg-primary text-white  px-4 py-4 w-full text-sm text-center hover:bg-opacity-70
                          trasition duration-200 font-bold"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className=" px-4 border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center w-full  justify-between  ">
                    <div className="flex items-center  space-x-1 w-full ">
                        
                      <div className="text-white font-bold ">MuraliRaj</div>
                      <div className="text-gray1 text-sm ">@MuraliRajCodey</div>
                      <div className="text-gray1">
                        <BsDot />
                      </div>
                      <div className="text-gray1 text-sm">1 hour ago</div>
                      <div className="text-white ">
                        <BsThreeDots />
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-sm">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2"></div>
                  <div className="flex justify-start space-x-20 mt-2   text-white w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer">
                      <BsChat />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer">
                      <AiOutlineRetweet />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer">
                      <AiOutlineHeart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer">
                      <IoStatsChart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer">
                      <IoShareOutline />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default HomePage;






