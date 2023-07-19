import React from 'react';

const TwitterSidebar = () => {
  return (
    <div className="flex flex-col w-72 bg-white border-r">
      <div className="flex items-center justify-between p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L11 13H2v9h9l11-11z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-12 text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className="font-semibold text-2xl">Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className='text-2xl font-semibold '>Explore</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className='text-2xl font-semibold '>Notifications</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 4v11a4 4 0 0 1-4 4H5a2 2 0 0 1-2-2V4h2v11a2 2 0 0 0 2 2h11" />
              <path d="M8 2L21 2M3 10h16M7 15h2M12 15h2M7 20h2M12 20h2M16 20h2" />
            </svg>
            <span className='text-2xl font-semibold '>Messages</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className='text-2xl font-semibold '>Bookmarks</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className='text-2xl font-semibold '>Lists</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className='text-2xl font-semibold '>Profile</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13H2v9h9l11-11z" />
            </svg>
            <span className='text-2xl font-semibold '>More</span>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button className="bg-blue text-white rounded-full py-2 px-4 w-full">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TwitterSidebar;
