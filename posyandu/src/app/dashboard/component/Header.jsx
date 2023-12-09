/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isActive, setisActive] = useState();
  const router = useRouter();

  return (
    <div className="flex flex-row bg-[#FF5757] xl:bg-white h-12 xl:h-[80px] justify-between items-center px-4 shadow-md shadow-neutral-400 fixed w-full max-w-full z-50">
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
                className="hidden xl:block cursor-pointer hover:opacity-60 transition ease-in-out"
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
                onClick={() => {
                  setisActive("");
                  router.push("/dashboard");
                }}
                className="mt-[20px] w-[80px] xl:w-[160px] cursor-pointer hover:opacity-80 transition ease-in-out active:translate-y-1"
                src="/header/logo-desktop.svg"
              ></img>
              <div className="flex leading-[25px] flex-col items-center ml-[-55px] mt-[25px] xl:leading-[45px]">
                <div className="sidebar-items">
                  <details className="dropdown">
                    <summary className="flex items-center justify-center cursor-pointer rounded-md pr-1 hover:bg-slate-100 transition duration-300 ease-in-out">
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
                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "input-ibuhamil" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("input-ibuhamil");
                          console.log(isActive);
                          router.push("/dashboard/input/ibuhamil");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">
                            Ibu Hamil
                          </p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "input-bayi" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("input-bayi");
                          router.push("/dashboard/input/bayi");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Bayi</p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "input-balita" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("input-balita");
                          router.push("/dashboard/input/balita");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">Balita</p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "input-lansia" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("input-lansia");
                          router.push("/dashboard/input/lansia");
                        }}
                      >
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
                    <summary className="flex items-center xl:grid-cols-2-laptop justify-center cursor-pointer rounded-md pr-1 hover:bg-slate-100 transition duration-300 ease-in-out">
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
                    <ul className="flex flex-col flex-wrap text-start ml-[40px] xl:ml-[70px] [&>li]:mt-[0px]">
                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "lihat-ibuhamil" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("lihat-ibuhamil");
                          router.push("/dashboard/data/ibuhamil");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img "
                            src="/header/bumil-sidebar.svg"
                          ></img>
                          <p className="ml-1 w-[50px] xl:w-[100px]">
                            Ibu Hamil
                          </p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "lihat-bayi" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("lihat-bayi");
                          router.push("/dashboard/data/bayi");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/bayi-sidebar.svg"
                          ></img>
                          <p className="ml-1 xl:w-[100px]">Bayi</p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "lihat-balita" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("lihat-balita");
                          router.push("/dashboard/data/balita");
                        }}
                      >
                        <div className="grid grid-cols-2 xl:grid-cols-2-laptop items-center p-[4px] py-[2px]">
                          <img
                            className="sidebar-img"
                            src="/header/balita-sidebar.svg"
                          ></img>
                          <p className="ml-1 xl:w-[100px]">Balita</p>
                        </div>
                      </li>

                      <li
                        className={`cursor-pointer sidebar-content ${
                          isActive === "lihat-lansia" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("lihat-lansia");
                          router.push("/dashboard/data/lansia");
                        }}
                      >
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

                <li className={`cursor-pointer sidebar-content ${
                          isActive === "kegiatan" && "border-black"
                        }`}
                        onClick={() => {
                          setisActive("kegiatan");
                          router.push("/dashboard/activity");
                        }}>
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
                className="absolute bottom-10 xl:w-[250px] cursor-pointer hover:opacity-80 transition ease-in-out"
                src="/header/logout.svg"
                onClick={() => {
                  router.push("/login");
                }}
              ></img>
            </div>
          </div>
        </div>

        <img className="mr-1 xl:hidden" src="/header/logo.svg"></img>
        <img
          className="mr-1 hidden xl:block"
          src="/header/logo-desktop.svg"
        ></img>
        <p
          onClick={() => {
            setisActive("");
            router.push("/dashboard");
          }}
          className=" text-white font-semibold xl:text-neutral-700 text-[12px] xl:text-[16px] cursor-pointer hover:underline transition ease-in-out "
        >
          Posyandu Mawar I
        </p>
      </div>

      <div className="flex item-center mr-[6px]">
        
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <img
              className="xl:hidden cursor-pointer"
              src="/header/profile.svg"
            ></img>
            <img
              className="hidden xl:block cursor-pointer hover:scale-110 transition ease-in-out"
              src="/header/profile-desktop.svg"
            ></img>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                router.push("/dashboard/setting");
              }}
            >
              <a>Settings</a>
            </li>
            <li
              onClick={() => {
                router.push("/login");
              }}
            >
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
