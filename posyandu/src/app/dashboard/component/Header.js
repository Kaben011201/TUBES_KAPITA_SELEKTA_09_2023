"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex flex-row bg-[#FF5757] h-12 justify-between items-center px-4 shadow-md shadow-neutral-400 relative left-auto right-auto">
      <div className="flex items-center">
        <div className="drawer w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
            >
              <img src="header/hamburger.svg"></img>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[48vw] min-h-full bg-white text-base-content shadow shadow-neutral-400">
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
        <img className="mr-1" src="header/logo.svg"></img>
        <p className=" text-white text-[10px]">Posyandu Mawar I</p>
      </div>

      <div className="flex item-center">
        <img src="header/search.svg"></img>
        <img className="mx-2" src="header/filter.svg"></img>
        <img src="header/profile.svg"></img>
      </div>
    </div>
  );
};

export default Header;
