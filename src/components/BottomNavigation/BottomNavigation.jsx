import React from "react";

const BottomNavigation = () => {
  return (
    <section className="block fixed bottom-0 inset-x-0 z-50 bg-white border-r-gray-200  border-t-2 border-royal/20">
      <div className="flex justify-between py-4">
          {/* Menu 1 */}
        <a
          href="#3"
          className="w-full text-gray-600 justify-center inline-block text-center pt-2"
        >
         
         <i className="fa-solid fa-house text-xl"></i>
        </a>
        {/* Menu 2 */}
        <a
          href="#4"
          className="w-full text-green-500 justify-center inline-block text-center pt-2"
        >
            <i className="fa-solid fa-file-lines text-xl"></i>
        </a>
        {/* Menu 3 */}
        <a
          href="#7"
          className="w-full text-gray-600 justify-center inline-block text-center pt-2"
          activeclass="dark:text-gray-100 text-black"
        >
            <i className="fa-solid fa-book text-xl"></i>
        </a>
        {/* Menu 4 */}
        <a
          href="#9"
          className="w-full text-gray-600 justify-center inline-block text-center pt-2"
          activeclass="dark:text-gray-100 text-black"
        >
            <i className="fa-solid fa-gear text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default BottomNavigation;
