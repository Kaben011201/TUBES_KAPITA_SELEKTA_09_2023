"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex flex-row bg-[#FF5757] xl:bg-white h-12 xl:h-[80px] justify-between items-center px-4 shadow-md shadow-neutral-400 relative">
      <div className="flex items-center xl:ml-[20px]">
        <div className="drawer w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer">
              <img
                className="xl:hidden cursor-pointer"
                src="/header/hamburger.svg"
              ></img>
              <img
                className="hidden xl:block cursor-pointer"
                src="/header/hamburger-desktop.svg"
              ></img>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="relative flex flex-col items-center menu p-4 w-[50vw] xl:w-[20vw] min-h-full bg-white text-base-content shadow shadow-neutral-400">
              {/* Sidebar content here */}

              <img
                className="w-[100px] xl:w-[200px]"
                src="/header/logo-desktop.svg"
              ></img>
              <div className="ml-[-30px] mt-[15px]]">
                <li>
                  <div className="sidebar-items">
                    <div className="flex">
                      <img
                        className="xl:w-[30px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[30px]"
                        src="/header/input.svg"
                      ></img>
                    </div>
                    <p>Input Data</p>
                  </div>
                </li>

                <li>
                  <div className="sidebar-items">
                    <div className="flex">
                      <img
                        className="xl:w-[30px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[30px]"
                        src="/header/lihat.svg"
                      ></img>
                    </div>
                    <p>Lihat Data</p>
                  </div>
                </li>

                <li>
                  <div className="sidebar-items">
                    <div className="flex">
                      <img
                        className="ml-[15px] xl:ml-[30px] xl:w-[30px]"
                        src="/header/catatan.svg"
                      ></img>
                    </div>
                    <p>Kegiatan</p>
                  </div>
                </li>
                <details className="dropdown">
                  <summary className="m-1 btn">open or close</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </div>
              <img
                className="absolute bottom-10 xl:w-[250px]"
                src="/header/logout.svg"
              ></img>
            </ul>
          </div>
        </div>
        {/* <img src="header/hamburger.svg"></img> */}
        <img className="mr-1 xl:hidden" src="/header/logo.svg"></img>
        <img
          className="mr-1 hidden xl:block"
          src="/header/logo-desktop.svg"
        ></img>
        <p className=" text-white font-semibold xl:text-neutral-700 text-[10px] xl:text-[16px]">
          Posyandu Mawar I
        </p>
      </div>

      <div className="flex item-center mr-[6px]">
        <img className="xl:hidden" src="/header/search.svg"></img>
        <div className="hidden xl:flex items-center w-[260px] h-[35p] border-[2px] border-gray-400 rounded-[50px] shadow-md">
          <img className="ml-[8px]" src="/header/search.svg"></img>
          <input
            className="focus:outline-none placeholder:text-center placeholder:text-neutral-600 placeholder:text-sm ml-[5px] w-[200px]"
            placeholder="Pencarian"
            type="text"
          ></input>
        </div>
        <img
          className="mx-2 xl:hidden cursor-pointer"
          src="/header/filter.svg"
        ></img>
        <img
          className="mx-2 hidden xl:block cursor-pointer"
          src="/header/filter-desktop.svg"
        ></img>
        <img
          className="xl:hidden cursor-pointer"
          src="/header/profile.svg"
        ></img>
        <img
          className="hidden xl:block cursor-pointer"
          src="/header/profile-desktop.svg"
        ></img>
      </div>
    </div>
  );
};

export default Header;
