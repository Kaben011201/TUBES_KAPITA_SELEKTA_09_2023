"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  const router = useRouter();

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
          <div className="drawer-side z-[100]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu items-center relative p-2 w-[45vw] xl:w-[20vw] min-h-full bg-white text-base-content shadow shadow-neutral-400 [&>div>li]:cursor-pointer z-[50]">
              {/* Sidebar content here */}
              <img
                className="w-[70px] xl:w-[160px]"
                src="/header/logo-desktop.svg"
              ></img>
              <div className="flex leading-[25px] flex-col items-center ml-[-55px] mt-[25px]">
                <div className="sidebar-items">
                  <details className="dropdown">
                    <summary className="flex items-center justify-center">
                      <img
                        className="xl:w-[30px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[30px]"
                        src="/header/input.svg"
                      ></img>
                      <p className="ml-1">Input Data</p>
                    </summary>
                    <ul className="flex flex-col flex-wrap items-center text-start ml-[40px] [&>li]:mt-[0px]">
                      <li onClick={()=>{router.push("/dashboard/input/ibuhamil");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Ibu Hamil</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/input/bayi");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Bayi</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/input/balita");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Balita</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/input/lansia");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/lansia-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Lansia</p>
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>

                <div className="sidebar-items mt-[8px] my-[6px]">
                  <details className="dropdown">
                    <summary className="flex items-center justify-center">
                      <img
                        className="xl:w-[30px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[30px]"
                        src="/header/lihat.svg"
                      ></img>
                      <p className="ml-1">Lihat Data</p>
                    </summary>
                    <ul className="flex flex-col flex-wrap items-center text-start ml-[40px] [&>li]:mt-[0px]">
                      <li onClick={()=>{router.push("/dashboard/data/ibuhamil");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px]  xl:ml-[30px] xl:w-[30px]"
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Ibu Hamil</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/data/bayi");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Bayi</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/data/balita");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Balita</p>
                        </div>
                      </li>

                      <li onClick={()=>{router.push("/dashboard/data/lansia");}}>
                        <div className="grid grid-cols-2 items-center p-[4px] py-[2px]">
                          <img
                            className="ml-[15px] w-[20px] xl:ml-[30px] xl:w-[30px]"
                            src="/header/lansia-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px]">Lansia</p>
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>

                <li>
                  <div className="sidebar-items p-[4px] py-[2px]">
                    <div className="flex">
                      <img
                        className="ml-[15px] xl:ml-[30px] xl:w-[30px]"
                        src="/header/catatan.svg"
                      ></img>
                    </div>
                    <p className="ml-1">Kegiatan</p>
                  </div>
                </li>
              </div>
              <img
                className="absolute bottom-10 xl:w-[250px]"
                src="/header/logout.svg" onClick={()=>{router.push("/login")}}
              ></img>
            </div>
          </div>
        </div>

        <img className="mr-1 xl:hidden" src="/header/logo.svg"></img>
        <img
          className="mr-1 hidden xl:block"
          src="/header/logo-desktop.svg"
        ></img>
        <p onClick={()=>router.push("/dashboard")} className=" text-white font-semibold xl:text-neutral-700 text-[12px] xl:text-[16px]">
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
