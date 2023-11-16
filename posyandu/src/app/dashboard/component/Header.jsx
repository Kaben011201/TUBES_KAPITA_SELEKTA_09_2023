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
            <div className="menu items-center leading-[50px] relative p-2 w-[45vw] xl:w-[20vw] min-h-full bg-white text-base-content shadow-md shadow-neutral-600 [&>div>li]:cursor-pointer">
              {/* Sidebar content here */}
              <img
                onClick={()=>{router.push("/dashboard")}}
                className="mt-[20px] w-[80px] xl:w-[160px] cursor-pointer"
                src="/header/logo-desktop.svg"
              ></img>
              <div className="flex leading-[25px] flex-col items-center ml-[-55px] mt-[25px] xl:leading-[45px]">
                <div className="sidebar-items">

                  <details className="dropdown">
                    <summary className="flex items-center justify-center cursor-pointer">
                      <img
                        className="xl:w-[35px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[35px]"
                        src="/header/input.svg"
                      ></img>
                      <p className="ml-1 xl:ml-2">Input Data</p>
                    </summary>

                    <ul className="flex flex-col flex-wrap items-center text-start ml-[40px] xl:ml-[70px] [&>li]:mt-[0px]">
                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/input/ibuhamil");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Ibu Hamil</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/input/bayi");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Bayi</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/input/balita");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Balita</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/input/lansia");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/lansia-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Lansia</p>
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>

                <div className="sidebar-items mt-[8px] my-[6px]">
                  <details className="dropdown">
                    <summary className="flex items-center xl:grid-cols-2-laptop justify-center cursor-pointer">
                      <img
                        className="xl:w-[35px]"
                        src="/header/drop-closed.svg"
                      ></img>
                      <img
                        className="xl:w-[35px]"
                        src="/header/lihat.svg"
                      ></img>
                      <p className="ml-1 xl:ml-2">Lihat Data</p>
                    </summary>
                    <ul className="flex flex-col flex-wrap items-center text-start ml-[40px] xl:ml-[70px] [&>li]:mt-[0px]">
                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/data/ibuhamil");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Ibu Hamil</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/data/bayi");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 xl:w-[100px]">Bayi</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/data/balita");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 xl:w-[100px]">Balita</p>
                        </div>
                      </li>

                      <li className="cursor-pointer" onClick={()=>{router.push("/dashboard/data/lansia");}}>
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/lansia-sidebar.svg"
                          ></img>
                          <p className="ml-1 xl:w-[100px]">Lansia</p>
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>

                <li>
                  <div className="sidebar-items p-[4px] py-[2px]">
                    <div className="flex">
                      <img
                        className="ml-[15px] xl:ml-[30px] xl:w-[35px]"
                        src="/header/catatan.svg"
                      ></img>
                    </div>
                    <p className="ml-1 xl:ml-2">Kegiatan</p>
                  </div>
                </li>
              </div>
              <img
                className="absolute bottom-10 xl:w-[250px] cursor-pointer"
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
        <p onClick={()=>router.push("/dashboard")} className=" text-white font-semibold xl:text-neutral-700 text-[12px] xl:text-[16px] cursor-pointer">
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
