import React from "react";

const Table = ({ pageTitle }) => {
  const tableData = [
    {
      id: 1,
      date: "11 Nov 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "200/300",
      price: 10,
      total: 2000,
    },
    {
      id: 2,
      date: "10 Nov 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "122/230",
      price: 10,
      total: 1220,
    },
    {
      id: 3,
      date: "6 Nov 2021",
      title: "Hammer",
      details: "Wood plan will be used to do woodworks, duh",
      status: "In Progress",
      quantity: "100/300",
      price: 1.5,
      total: 150,
    },
    {
      id: 4,
      date: "28 Oct 2021",
      title: "Hammer",
      details: "",
      status: "Out of Stock",
      quantity: "0/300",
      price: 10,
      total: 0,
    },
    {
      id: 5,
      date: "22 Oct 2021",
      title: "Hammer",
      details: "",
      status: "Out of Stock",
      quantity: "0/300",
      price: 10,
      total: 0,
    },
    {
      id: 6,
      date: "16 Oct 2021",
      title: "Hammer",
      details: "",
      status: "Out of Stock",
      quantity: "0/300",
      price: 10,
      total: 0,
    },
    {
      id: 7,
      date: "9 Oct 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "200/300",
      price: 10,
      total: 2000,
    },
    {
      id: 8,
      date: "5 Oct 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "200/300",
      price: 10,
      total: 2000,
    },
    {
      id: 9,
      date: "1 Oct 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "200/300",
      price: 10,
      total: 2000,
    },
    {
      id: 10,
      date: "23 Sep 2021",
      title: "Hammer",
      details: "This is a hammer to do work with",
      status: "Alright",
      quantity: "200/300",
      price: 10,
      total: 2000,
    },
  ];

  return (
    <div className="w-full py-4 h-full" style={{ backgroundColor: "#F2F2F3" }}>
      {/* Title */}
      <h3 className="px-6 text-black text-xl font-bold mb-4">{pageTitle}</h3>
      <hr className="border border-b-gray-200 mb-6" />

      {/* Deskop Table */}
      <div className="px-6 pb-6 overflow-auto hidden lg:block md:hidden">
        <div className="bg-white pt-6">
          <div className="justify-between pb-6 items-center w-full md:flex md:w-auto relative ml-6">
            <input
              type="text"
              placeholder="Search"
              className="border-solid px-9 py-2 rounded-md focus:border-blue-300 w-80 focus:outline-none"
              style={{ backgroundColor: "#F2F2F3" }}
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-400 "></i>
          </div>
          <table className="w-full">
            <thead className="bg-red-50">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left mx-auto">
                  <input type="checkbox" className="mt-2" />
                </th>
                <th className="w-36 p-3 text-sm font-semibold tracking-wide text-left">
                  Date Updated
                  <i className="fa-solid fa-arrow-down ml-1.5"></i>
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Title
                  <i className="fa-solid fa-arrows-up-down ml-1.5"></i>
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Details
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Quantity
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Unit Price
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">
                  Amount
                  <i className="fa-solid fa-arrows-up-down ml-1.5"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 &&
                tableData.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap">
                      <input type="checkbox" className="mt-2" />
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {
                        item.details === ""  ? (
                          <p>-</p>
                        )
                        :
                        (
                          <p>{item.details}</p>
                        )
                      }
                    </td>
                    <td className="tp-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.status === "Alright" && (
                        <div className="flex justify-center items-center">
                            <p className="-ml-7">{item.status}</p>
                            <span className="bg-green-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                      {item.status === "In Progress" && (
                        <div className="flex justify-center items-center">
                            <p className="-ml-2">{item.status}</p>
                            <span className="bg-yellow-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                      {item.status === "Out of Stock" && (
                        <div className="flex justify-center items-center">
                            <p>{item.status}</p>
                            <span className="bg-red-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      ${item.price}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      ${item.total}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center flex-wrap pt-8 pb-11">
            <div className="ml-6">
              <select className="w-56 px-1.5 py-1 border border-gray-300 text-gray-400">
                <option selected value="10">10 Items per page</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-between items-center mr-3">
              <div>
                <select className="w-44 px-1.5 py-1 border border-gray-300 text-gray-400">
                  <option selected value="10">Page 1 of 5</option>
                </select>
              </div>
              <div className="ml-4">
                    <button className="px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="ml-4 px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-right"></i>
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Table */}
      <div className="px-6 overflow-auto hidden lg:hidden md:block">
        <div className="bg-white pt-6">
          <div className="justify-between pb-6 items-center w-full md:flex md:w-auto relative ml-6">
            <input
              type="text"
              placeholder="Search"
              className="border-solid px-9 py-2 rounded-md focus:border-blue-300 w-80 focus:outline-none"
              style={{ backgroundColor: "#F2F2F3" }}
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-400 "></i>
          </div>
          <table className="w-full">
            <thead className="bg-red-50">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left mx-auto">
                  <input type="checkbox" className="mt-2" />
                </th>
                <th className="w-36 p-3 text-sm font-semibold tracking-wide text-left">
                  Date Updated
                  <i className="fa-solid fa-arrow-down ml-1.5"></i>
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Title
                  <i className="fa-solid fa-arrows-up-down ml-1.5"></i>
                </th>
                <th className="py-3 pl-7 pr-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">
                  Quantity
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">
                  Amount
                  <i className="fa-solid fa-arrows-up-down ml-1.5"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 &&
                tableData.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap">
                      <input type="checkbox" className="mt-2" />
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.status === "Alright" && (
                        <div className="flex justify-center items-center">
                            <p className="-ml-8">{item.status}</p>
                            <span className="bg-green-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                      {item.status === "In Progress" && (
                        <div className="flex justify-center items-center">
                            <p className="-ml-2">{item.status}</p>
                            <span className="bg-yellow-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                      {item.status === "Out of Stock" && (
                        <div className="flex justify-center items-center">
                            <p>{item.status}</p>
                            <span className="bg-red-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      ${item.total}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center flex-wrap pt-8 pb-11">
            <div className="ml-6">
              <select className="w-56 px-1.5 py-1 border border-gray-300 text-gray-400">
                <option selected value="10">10 Items per page</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-between items-center mr-3">
              <div>
                <select className="w-44 px-1.5 py-1 border border-gray-300 text-gray-400">
                  <option selected value="10">Page 1 of 5</option>
                </select>
              </div>
              <div className="ml-4">
                    <button className="px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="ml-4 px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-right"></i>
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Mobile Table */}
      <div className="px-6 pb-24 lg:hidden md:hidden sm:block">
        <div className="bg-white pt-6">
          <div className="justify-between pb-6 items-center w-full relative ml-4">
            <input
              type="text"
              placeholder="Search"
              className="border-solid px-9 py-2 rounded-md focus:border-blue-300 w-11/12 focus:outline-none"
              style={{ backgroundColor: "#F2F2F3" }}
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-400 "></i>
          </div>
          <table className="w-full">
            <thead className="bg-red-50">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Title
                  <i className="fa-solid fa-arrows-up-down ml-2"></i>
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">
                  Quantity
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">
                  Amount
                  <i className="fa-solid fa-arrows-up-down ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 &&
                tableData.map((item) => (
                  <tr key={item.id} className="bg-white space-y-3">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.status === "Alright" && (
                        <div className="flex items-center">
                            <p className="hidden">{item.status}</p>
                            <span className="bg-green-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                      {item.status === "In Progress" && (
                        <div className="flex items-center">
                            <p className="hidden">{item.status}</p>
                            <span className="bg-yellow-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div> 
                      )}
                      {item.status === "Out of Stock" && (
                        <div className="flex items-center">
                            <p className="hidden">{item.status}</p>
                            <span className="bg-red-600 rounded-full w-1.5 h-1.5 ml-2"></span>
                        </div>
                      )}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right p-3 text-sm text-gray-700 whitespace-nowrap">
                      ${item.total}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center flex-wrap pt-8 pb-11">
            <div className="flex flex-wrap justify-between items-center ml-3">
              <div>
                <select className="w-44 px-1.5 py-1 border border-gray-300 text-gray-400">
                  <option selected value="10">Page 1 of 5</option>
                </select>
              </div>
              <div className="ml-4">
                    <button className="px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="ml-4 px-2.5 py-1 border border-gray-300 text-gray-400">
                      <i class="fa-solid fa-angle-right"></i>
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
