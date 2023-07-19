import React from 'react';
import { Link } from 'react-router-dom';

const EmailBuissness = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue to-lime">
      <div className="ml-4 mt-2 text-yellow1 font-extrabold text-3xl">
        coindiary
      </div>
    <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="max-w-md mx-auto bg-gray1 border border-blue rounded-2xl w-96 shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Official Email</h2>
        <input type='text' placeholder='Enter the Official email id ' className="text-gray2 mb-8 border text-lg text-center  sm:w-full border-gray2 rounded-lg h-10"></input>
        
      </div>
      <div className='p-10'>
        <Link to="/signindiary">
      <button className="bg-gray hover:bg-blue text-white text-2xl font-bold py-2 px-4   rounded-full">Next</button>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default EmailBuissness;
