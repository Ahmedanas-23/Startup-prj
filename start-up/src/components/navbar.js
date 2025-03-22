"use client";
import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "../assets/icons8-search-30.png";
import notifcIcon from "../assets/icons8-notification-24.png";
import Image from "next/image";
import ProfileIcon from "../assets/icons8-circled-user-male-skin-type-1-and-2-48.png";
import { useRouter } from "next/router";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [pageTiltle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    const pageTitles = {
      "/sidemenupage/dashboard": "Dashboard",
      "/sidemenupage/tickets": "Tickets",
      "/sidemenupage/noname": "Customers",
      "/sidemenupage/equipment": "Equipments",
      "/sidemenupage/reports": "Reports",
    };

    setPageTitle(pageTitles[router.pathname] || "Dashboard", "Equipment");
  }, [router.pathname]);

  
  const faekData = [
    "Apple",
    "Ball",
    "Dashboard",
    "Tickets",
    "Customers",
    "Equipments",
    "Reports",
    "Failure",
  ];

  
  const filteredData = search
    ? faekData.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="absolute w-full ">
    
      <nav className="w-5/6 ml-auto bg-white p-3 flex items-center border-b border-[#E5E5E5]">
        <h1 className="text-[22px] font-bold text-[#161616] ml-3">{pageTiltle}</h1>

        <div className="flex ml-44 relative">
          <Image
            src={SearchIcon}
            alt="Search"
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find Something!"
            className="w-full outline-none pl-10 pr-50 py-1 border border-gray-300 rounded-[5px] border-b-gray-300 bg-gray-100"
          />

          {/* Search Suggestions */}
          {filteredData.length > 0 && (
            <ul className="absolute left-0 mt-10 w-full bg-[#e2e3f9] rounded-lg shadow-lg max-h-48 overflow-auto">
              {filteredData.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-white/90 hover:text-[#484AF8] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex ml-auto align-middle gap-3">
          <div className="bg-[#e2e3f9] p-3 items-center align-middle text-center flex rounded-[50%]">
            <Image src={notifcIcon} alt="Notification" />
          </div>
          <div className="bg-[#e2e3f9] items-center align-middle text-center flex rounded-[50%]">
            <Image src={ProfileIcon} alt="Profile" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
