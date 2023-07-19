import React from "react";
import { Link, useLocation } from "react-router-dom";

const HomeDiary = () => {
  const location = useLocation();
  const diaryId = location.state && location.state.id;
  return (
    <div className="px-2 md:px-4 lg:px-8  h-screen bg-gradient-to-r from-blue to-lime">
      <div className="text-yellow1 font-extrabold text-3xl md:text-4xl lg:text-4xl">
      coindiary {diaryId}
      </div>
      <div className="flex flex-col md:flex-row items-center flex-wrap">
        <div className="text-center font-bold text-4xl sm:p-9 md:text-5xl lg:text-6xl mx-auto mb-4 md:mb-0">
          *Info about CoinDiary*
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mx-4">
          <div className="w-1 h-screen bg-purple mx-4 hidden md:hidden 2xl:block">
            {/* Vertical Line - Hidden on small and medium screens */}
          </div>
          <div className="flex flex-col items-center md:items-end mt-4">
            <div
              className={`flex justify-center md:justify-end p-4 md:p-8 ${
                isMobile() ? "flex-col items-center" : ""
              }`}
            >
              <Link to="/creatediary">
                <a
                  className={`underline underline-offset-1 text-2xl md:text-4xl lg:text-5xl font-bold  lg:px-20 lg:py-8 md:px-16 md:py-6 sm:px-10 sm:py-4 ${
                    isMobile() ? "text-center mb-4" : ""
                  }`}
                  href="#"
                >
                  Create Your Diary
                </a>
              </Link>
            </div>
            <div
              className={`flex justify-center md:justify-end ${
                isMobile() ? "mb-4" : ""
              }`}
            >
              <Link to = "/signindiary">
              <a
                className={`underline underline-offset-1 text-2xl md:text-4xl lg:text-5xl font-bold lg:px-20 lg:py-8 md:px-16 md:py-6 sm:px-10 sm:py-4  ${
                  isMobile() ? "text-center" : ""
                }`}
                href="#"
              >
                Login to Your Diary
              </a>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to check if the screen size is mobile
const isMobile = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return screenWidth < 1024; // Adjust the value to your desired mobile breakpoint
};

export default HomeDiary;
