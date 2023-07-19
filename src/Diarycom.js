import React from 'react';
import { Link } from 'react-router-dom';

const DiaryComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue to-lime">
      <div className="ml-4 mt-2 text-yellow1 font-extrabold text-3xl">
        coindiary
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          <h2 className="text-center text-4xl font-bold p-12 mt-4">Who is this diary for?</h2>
          <div className="flex flex-col items-center">
            <div className="bg-blue p-8 rounded-xl shadow-md mx-4 mb-8 w-72">
            <Link to="/confirmemail">
              <a href='#' className="text-3xl text-center text-yellow font-bold">Business </a>
              </Link>
            </div>
            <div className="bg-blue p-8 rounded-xl shadow-md mx-4 mb-8 w-72">  
              <a href='#' className="text-3xl text-center text-yellow font-bold">Individual </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryComponent;
