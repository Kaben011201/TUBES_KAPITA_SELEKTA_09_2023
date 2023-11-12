"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex flex-row bg-[#FF5757] h-12 justify-between items-center px-4 shadow-md shadow-neutral-400 relative left-auto right-auto">
      <div className="flex items-center">
      <img src="header/hamburger.svg"></img>
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
