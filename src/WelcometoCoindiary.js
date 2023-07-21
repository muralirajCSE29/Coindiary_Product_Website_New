import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import gandhiimg from "../src/assets/gandhiorgimg.png";

const WelcometoCoindiary = () => {
  const [acceptedTnC, setAcceptedTnC] = useState(false);

  // Function to handle changes in the checkbox status
  const handleTnCToggle = () => {
    setAcceptedTnC(!acceptedTnC);
  };

  return (
    <div className="relative h-screen bg-black">
      <h1 className="text-white font-serif font-bold text-3xl absolute top-0 left-0 mt-8 ml-8">
        Coindiary
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="bg-stone p-4 h-[100vh] w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[50vw] pt-16 sm:ml-[52%] border border-stone/10">
          <h1 className="text-white text-center font-serif text-3xl">CD</h1>

          <div className="flex  items-center justify-center mt-[15%]">
            <h1 className="text-white text-center font-mono text-4xl font-extrabold">
              Welcome to Coindiary
              <p className="text-gray text-left text-lg mt-5">
                Lorem ipsum dolor sit amet. Et perferendis sint sit magni
                officia ut odio dolorum qui repudiandae eius sed culpa error qui
                quaerat laboriosam sed laudantium pariatur. Qui tenetur itaque
                et laborum corporis qui saepe velit ea distinctio temporibus eos
                officiis fugiat? Qui mollitia rerum qui facilis minima aut
                dolores delectus et saepe eius. Lorem ipsum dolor sit amet. Et
                perferendis sint sit magni officia ut odio dolorum qui
                repudiandae eius sed culpa error qui quaerat laboriosam sed
                laudantium pariatur. <br></br> <br></br>
                Lorem ipsum dolor sit amet. Et perferendis sint sit magni
                officia ut odio dolorum qui repudiandae eius sed culpa error qui
                quaerat laboriosam sed laudantium pariatur. Qui tenetur itaque
                et laborum corporis qui saepe velit ea distinctio temporibus eos
                officiis
              </p>
            </h1>
          </div>
          <div className="flex justify-end   mt-16 ">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className=" text-white mt-36"
                checked={acceptedTnC}
                onChange={handleTnCToggle}
              />
              <div>
                
              </div>
              <p className="text-white ml-3 mt-36">accept T&amp;C</p>
            </label>
            {acceptedTnC ? (
              <Link to="/homecoindiary">
                <button className="flex w-[12vw] h-[13h] text-center justify-center bg-red-700 text-white px-4 py-2 rounded-md ml-12 mt-36">
                  Continue
                  <AiOutlineArrowRight className="ml-2 mt-1" />
                </button>
              </Link>
            ) : (
              <button
                className="flex w-[12vw] h-[13h] text-center justify-center bg-red-700 text-white px-4 py-2 rounded-md ml-12 mt-36 opacity-50 cursor-not-allowed "
                disabled
              >
                Continue
                <AiOutlineArrowRight className="ml-2 mt-1" />
              </button>
            )}
          </div>
        </div>

        <div className="text-white font-serif font-bold text-xl text-left absolute mt-2 top-[15%] left-10 ml-48">
          <img className="w-[22vw] rounded-lg " src={gandhiimg} alt="Logo" />

          <h1 className="text-2xl text-center">Do you accept our T&C?</h1>
        </div>
      </div>
    </div>
  );
};

export default WelcometoCoindiary;
