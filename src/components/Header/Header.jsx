import React from "react";
import profileImage from '../../assets/images/Photo.jpg';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 pl-6 sm:px-4 py-3 pr-7 border border-b-gray-200">
      <div className="container flex flex-wrap justify-between mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Brand Info */}
          <div className="lg:pr-32 pt-3">
              <a href="#s" className="flex items-center">
              <span className="self-center text-base font-semibold whitespace-nowrap">
                Starbucks
              </span>
              <i className="pl-2 fa-solid fa-caret-down" />
            </a>
          </div>
          {/*  Search Box */}
          <div className="justify-between items-center w-full md:flex md:w-auto relative lg:ml-10 hidden lg:block md:ml-3">
            <input type="text" placeholder="Search" className="border-solid px-9 py-2 rounded-md focus:border-blue-300 w-80 focus:outline-none" style={{backgroundColor: '#F2F2F3'}}/>
            <i className="fa-solid fa-magnifying-glass absolute left-3 lg:top-3 md:top-4 text-gray-300 "></i>
          </div>
        </div>
    
        {/* Users info */}
        <div className="pt-2">
          <i className="fa-regular fa-bell pr-6 py-1 text-lg"></i>
          <img src={profileImage} width="30px" height="25px" alt="Profile" className="rounded-full inline" />
         <div className="inline">
          <span className="pl-6 self-center text-base font-semibold whitespace-nowrap">
                John Doe
            </span>
            <i className="pl-2 fa-solid fa-caret-down" />
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
