import React from 'react';

const Sidebar = () => {
    return (
      <aside className="h-full border hidden lg:block md:block border-r-gray-200" style={{backgroundColor: '#F2F2F3'}}>
        <div className="pt-4 pr-3 lg:pl-7 md:pl-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#5"
                className="flex items-center p-2 font-normal text-base text-gray-600 rounded-lg hover:bg-white"
              >
                <i className="fa-solid fa-house lg:pl-2"></i>
                <span className="flex-1 ml-3 whitespace-nowrap hidden lg:block md:hidden">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#5"
                className="flex items-center p-2 font-normal text-base text-green-500 rounded-lg hover:bg-white"
              >
                <i className="fa-solid fa-file-lines lg:pl-2"></i>
                <span className="flex-1 ml-3 whitespace-nowrap hidden lg:block md:hidden">Inventory</span>
              </a>
            </li>
            <li>
              <a
                href="#5"
                className="flex items-center p-2 font-normal text-base text-gray-600 rounded-lg hover:bg-white"
              >
                <i className="fa-solid fa-book lg:pl-2"></i>
                <span className="flex-1 ml-3 whitespace-nowrap hidden lg:block md:hidden">Documents</span>
              </a>
            </li>
            <li>
              <a
                href="#5"
                className="flex items-center p-2 font-normal text-base text-gray-600 rounded-lg hover:bg-white"
              >
                <i className="fa-solid fa-gear lg:pl-2"></i>
                <span className="flex-1 ml-3 whitespace-nowrap hidden lg:block md:hidden">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
};

export default Sidebar;