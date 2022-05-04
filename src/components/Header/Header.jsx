import React from "react";
import profileImage from '../../assets/images/Photo.jpg';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 pl-6 sm:px-4 py-3 pr-7 rounded ">
      <div className="container flex flex-wrap justify-between mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="pr-32 pt-2">
              <a href="#s" className="flex items-center">
              <span className="self-center text-sm font-semibold whitespace-nowrap">
                Starbucks
              </span>
              <i className="pl-2 fa-solid fa-caret-down" />
            </a>
          </div>
          {/*  Search Box */}
          <div
          className="justify-between items-center w-full md:flex md:w-auto relative">
          <input type="text" placeholder="Search" className="border-solid px-10 py-2 rounded-md bg-gray-100 focus:border-blue-300 w-80 focus:outline-none focus:ring-blue-500" />
          <i class="fa-solid fa-magnifying-glass absolute left-3 text-gray-300 "></i>
        </div>
        </div>
    
        <div className="pt-2">
          <i class="fa-regular fa-bell pr-5 py-5.5 text-base"></i>
          <img src={profileImage} width="30px" height="25px" alt="Profile" className="rounded-full inline" />
          <span className="pl-5 self-center text-sm font-semibold whitespace-nowrap">
              John Doe
          </span>
          <i className="pl-2 fa-solid fa-caret-down" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
