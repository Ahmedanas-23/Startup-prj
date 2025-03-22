'use client';
import React, { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

const SideBar = () => {
    const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Sidebar State

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", route: "/sidemenupage/dashboard" },
    { name: "Tickets", route: "/sidemenupage/tickets" },
    { name: "Customers", route: "/sidemenupage/noname" },
    { name: "Equipments", route: "/sidemenupage/equipment" },
    { name: "Reports", route: "/sidemenupage/reports" },
  ];


  const appControls = [
    { name: "Settings", route: "/sidemenupage/settings" },
    { name: "Help & Support", route: "/sidemenupage/helpandsupport" },
    { name: "Rate us", route: "/sidemenupage/rateus" },
  ];


  return (
    <div className="flex h-screen">
      {/* Hamburger Menu Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#484AF8] text-white px-3 py-2 rounded-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed sidebar md:relative w-2/3 md:w-1/6 h-screen bg-white text-black px-2 py-3 border-r border-[#E5E5E5] z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex side-bar-header">
          <span className="text-white bg-[#484AF8] font-bold text-2xl p-2 px-3 rounded-[10px]">M</span>
          <div className="ml-2 p-0 flex flex-col">
            <h2 className="font-semibold flex items-center">
              Company X{" "}
              <span className="flex cursor-pointer flex-col ml-1 text-gray-500 leading-none text-[10px]">
                <span className="active:text-black">▲</span>
                <span className="active:text-black">▼</span>
              </span>
            </h2>
            <p className="text-gray-500 text-[13px]">Admin</p>
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="main-menu mt-6">
          <p className="text-gray-500 font-semibold text-[11px]">Main Menu</p>
          <hr className="border-gray-300 mt-0.5" />
          {menuItems.map((items, index) => (
            <div
              className="flex cursor-pointer text-left items-center my-4 py-1.5 px-14 rounded-[5px] text-black hover:font-bold hover:text-[#484AF8] hover:bg-[#e2e3f9]"
              key={index}
              onClick={() => Router.push(items.route)}
            >
              <div href="#" className="text-[13px]">
                {items.name}
              </div>
            </div>
          ))}
        </div>

        {/* App Control Menu */}
        <div className="app-control mt-3">
          <p className="text-gray-500 font-semibold text-[11px]">App Controls</p>
          <hr className="border-gray-300 mt-0.5" />
          {appControls.map((AppItems, AppIndex) => (
            <div
              className="cursor-pointer flex text-left items-center my-4 py-1.5 px-14 rounded-[5px] text-black hover:font-bold hover:text-[#484AF8] hover:bg-[#e2e3f9]"
              key={AppIndex}
            onClick={() => Router.push(AppItems.route)}>
              <div className="text-[13px] whitespace-nowrap">{AppItems.name}</div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Section (Navbar + Dashboard) */}
      {/* <div className={`flex flex-col transition-all w-full md:w-5/6 ${isOpen ? "opacity-50" : "opacity-100"}`}>
        <Navbar />
      </div> */}
    </div>
  );
};

export default SideBar;
