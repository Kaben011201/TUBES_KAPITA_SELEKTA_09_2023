import React from "react";
import Header from "./component/Header";

const DashboardScreen = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm mt-10">
          <div className="ml-2 w-[220px]">
          <h1 className="text-[18px] font-bold">Dashboard</h1>
          <p className="text-[10px] leading-[13px] font-semibold mt-2 mb-4">Berikut merupakan data statistik pasien di Posyandu Mawar I</p>
          </div>

          <img className="w-50" src="dashboard/graph.svg"></img>
        </div>

        <div className="flex justify-between mt-9 w-[275px]">
        <div className="dashboard-content">
          <img className="w-[35px]" src="dashboard/bumil.svg"></img>
          <p>Ibu Hamil</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px]" src="dashboard/baduta.svg"></img>
          <p>Bayi</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px]" src="dashboard/balita.svg"></img>
          <p>Balita</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px]" src="dashboard/lansia.svg"></img>
          <p>Lansia</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
