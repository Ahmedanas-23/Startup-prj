import React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import SearchIcon from "@/assets/icons8-search-30.png";
import Image from "next/image";

function Equipment() {
  const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const tableData = [
    "111A0472874",
    "Loren ipusum",
    "10/12/2024",
    "$ 4.00",
    "2 year",
    "10/12/2024 11:24 PM",
  ];

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="absolute">
        <div className="flex ml-[230px] mt-[-500px]">
          <div className="flex relative">
            <Image
              src={SearchIcon}
              alt="Search"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />

            <input
              type="text"
              placeholder="Search Customer"
              className="w-full outline-none text-[#1616161] text-[13px] pl-10 py-1 border border-gray-300 rounded-[5px] border-b-gray-300 bg-gray-100"
            />
          </div>

          <div className="relative w-50 ml-5">
            <input
              type="date"
              id="dateCreated"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="relative ml-[420px]">
            <button
              className="py-2 px-7 bg-[#484AF8] cursor-pointer text-white rounded-[7px]"
              onClick={() => setIsOpen(true)}
            >
              Add Equipment
            </button>
          </div>
        </div>
        <hr className="border-[#E5E5E5] w-full mt-5" />
      </div>

      <div className="justify-center w-5/6 ml-[210px] mt-[-430px]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[
                <span className="flex text-center items-center gap-2">
                  {" "}
                  <input type="checkbox" />
                  EQI ID{" "}
                  <span className="flex cursor-pointer flex-col ml-1 text-gray-500 leading-none text-[10px]">
                    <span className="active:text-black">▲</span>
                    <span className="active:text-black">▼</span>
                  </span>
                </span>,
                "Name",
                <span className="flex align-middle">
                  Manufacture Data{" "}
                  <span className="align-middle flex cursor-pointer flex-col ml-1 text-gray-500 leading-none text-[10px]">
                    <span className="active:text-black">▲</span>
                    <span className="active:text-black">▼</span>
                  </span>{" "}
                </span>,
                <span className="flex align-middle">
                  Price{" "}
                  <span className="align-middle flex cursor-pointer flex-col ml-1 text-gray-500 leading-none text-[10px]">
                    <span className="active:text-black">▲</span>
                    <span className="active:text-black">▼</span>
                  </span>{" "}
                </span>,
                "Warranty",
                <span className="flex align-middle">
                  Date Created{" "}
                  <span className="align-middle flex cursor-pointer flex-col ml-1 text-gray-500 leading-none text-[10px]">
                    <span className="active:text-black">▲</span>
                    <span className="active:text-black">▼</span>
                  </span>{" "}
                </span>,
              ].map((heading, index) => (
                <th
                  key={index}
                  className="text-center px-4 py-2 font-semibold text-[15px]"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <td
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-start"
                >
                  {tableData[index]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Slide Section */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 right-0 w-1/2 bg-white shadow-lg transform transition-transform duration-300 p-5 mt-2 mr-2 rounded-[9px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-10"
        >
          <span className="text-[20px] text-gray-500">x</span>
        </button>

        <h2 className="text-lg font-bold">Add New Equipment</h2>

        <hr className="my-2 border-[#E5E5E5]" />
        {/* Form Fields */}
        <form>
          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">
              Equipment ID
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="Enter Equipment ID"
            />
          </div>

          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">
              Equipment Name
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="Enter Equipment Name"
            />
          </div>

          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">
              Manufacture Date
            </label>
            <input
              type="date"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="Select Mfg. Date"
            />
          </div>

          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">Price</label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="$ Enter Equipment Pricing"
            />
          </div>

          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">
              Warranty
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="Enter Warranty Period"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Equipment Details
            </label>
            <div className="flex items-center border border-[#E5E5E5] rounded-md overflow-hidden">
              {/* Dropdown for Equipment Type */}
              <select className="px-2 py-1 border-r w-1/3 text-gray-500 outline-none">
                <option value="">Power</option>
                <option value="machine">Price</option>
                <option value="tool">Benefit</option>
                <option value="accessory">Loss</option>
              </select>

              {/* Quantity Input */}
              <input
                type="number"
                className="px-2 py-1 w-1/3 outline-none"
                placeholder="Enter Qty"
                min="1"
              />

              {/* Add Button */}
              <button className="px-2 py-1 cursor-pointer bg-[#484AF8] text-white w-1/3">
                Add
              </button>
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-[13px] mb-1 font-medium">
              Common Issues (optional)
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-[#E5E5E5] rounded-md"
              placeholder="Enter Common Issues"
            />
          </div>

          <hr className="border-[#E5E5E5] my-0.5" />
          <button
            type="submit"
            className="px-16 ml-[410px] mt-1 cursor-pointer bg-[#484AF8] text-white py-1 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Equipment;
