"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex flex-row bg-[#FF5757] xl:bg-white h-12 xl:h-[80px] justify-between items-center px-4 shadow-md shadow-neutral-400 relative left-auto right-auto">
      <div className="flex items-center ml-[20px]">
        <div className="drawer w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
            >
              <img className="xl:hidden cursor-pointer" src="/header/hamburger.svg"></img>
              <img className="hidden xl:block cursor-pointer" src="/header/hamburger-desktop.svg"></img>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[48vw] xl:w-[20vw] min-h-full bg-white text-base-content shadow shadow-neutral-400">
              {/* Sidebar content here */}
              <li className="mt-[40px] z-[-1]">
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <img src="header/hamburger.svg"></img> */}
        <img className="mr-1 xl:hidden" src="/header/logo.svg"></img>
        <img className="mr-1 hidden xl:block" src="/header/logo-desktop.svg"></img>
        <p className=" text-white font-semibold xl:text-neutral-700 text-[10px] xl:text-[16px]">Posyandu Mawar I</p>
      </div>

      <div className="flex item-center mr-[6px]">
        <img className="xl:hidden" src="/header/search.svg"></img>
        <div className="hidden xl:flex items-center w-[260px] h-[35p] border-[2px] border-gray-400 rounded-[50px] shadow-md">
        <img className="ml-[8px]" src="/header/search.svg"></img> 
        <input className="focus:outline-none placeholder:text-center placeholder:text-neutral-600 placeholder:text-sm ml-[5px] w-[200px]" placeholder="Pencarian" type="text"></input>
        </div>
        <img className="mx-2 xl:hidden cursor-pointer" src="/header/filter.svg"></img>
        <img className="mx-2 hidden xl:block cursor-pointer" src="/header/filter-desktop.svg"></img>
        <img className="xl:hidden cursor-pointer" src="/header/profile.svg"></img>
        <img className="hidden xl:block cursor-pointer" src="/header/profile-desktop.svg"></img>
      </div>
    </div>
  );
};

export default Header;
