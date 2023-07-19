import React from "react";
import { BsSearch } from "react-icons/bs";


const MainComponentTwitter = () => {
    return (
        <div className="w-full h-full flex justify-center items-center relative bg-slate-950  ">
        <div className="max-w-[80vw] w-full h-full flex relative ">
          <section className="fixed top-0 mt-4 flex flex-col items-stretch right-0 h-screen px-6 max-h-screen  ">
            <div>
              <div className="sticky w-full h-full group">
                <input
                  id="searchbox"
                  type="text"
                  placeholder="Search Twitter"
                  className="outline-none peer focus:border-primary focus:border text-white bg-neutral-700/90 w-full h-full rounded-xl py-4 pl-14 pr-4 "
                />
  
                <label
                  htmlFor="searchbox"
                  className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary "
                >
                  <BsSearch className="w-5 h-5" />
                </label>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4 ">
              <h3 className="text-white font-bold text-xl my-2 px-4">
                What's happening
              </h3>
  
              <div className="text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
                    key={i}
                  >
                    <div className="font-bold text-lg">#trending ${i + 1}</div>
                    <div className="text-xs text-neutral-400">35.4k</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4 ">
              <h3 className="text-white font-bold text-xl my-2 px-4">
                Who to follow
              </h3>
                                
              <div className="text-white">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    className="hover:bg-white/10 p-4 space-x-3 flex items-center last:rounded-b-xl transition duration-200"
                    key={i}
                  >
                    <div className="w-10 h-10 bg-neutral-700 rounded-full flex-none"></div>
                    <div className="flex flex-col">
                      <div className="font-bold text-white">Other User</div>
                      <div className="text-xs text-gray">@otheruser0777</div>
                    </div>
                    <div className="w-full">
                      <button className="rounded-full px-6 py-2 bg-white text-neutral-900">
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default MainComponentTwitter;

  