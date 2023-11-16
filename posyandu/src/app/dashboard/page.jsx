import React from "react";

const DashboardScreen = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-sm mt-12 xl:mt-[120px] justify-center">
          <div className="ml-2 w-[250px] xl:w-[1400px] mb-3">
          <h1 className="text-[20px] font-bold xl:text-[45px]">Dashboard</h1>
          <p className="text-[10px] leading-[13px] font-semibold mt-4 mb-4 xl:text-[16px] xl:mt-[25px]">Berikut merupakan data statistik pasien di Posyandu Mawar I</p>
          </div>

          <img className="xl:hidden" src="dashboard/graph.svg"></img>
          <img className="hidden xl:block" src="dashboard/graph-desktop.svg"></img>
        </div>
        
        <div className="flex justify-between mt-9 w-[275px] xl:w-[500px] xl:mb-[80px]">
        <div className="dashboard-content">
          <img className="w-[35px] xl:w-[60px] xl:hidden" src="dashboard/bumil.svg"></img>
          <img className="w-[35px] xl:w-[60px] hidden xl:block" src="dashboard/bumil-desktop.svg"></img>
          <p>Ibu Hamil</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px] xl:w-[60px] xl:hidden" src="dashboard/baduta.svg"></img>
          <img className="w-[35px] xl:w-[60px] hidden xl:block" src="dashboard/baduta-desktop.svg"></img>
          <p>Bayi</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px] xl:w-[60px] xl:hidden" src="dashboard/balita.svg"></img>
          <img className="w-[35px] xl:w-[60px] hidden xl:block" src="dashboard/balita-desktop.svg"></img>
          <p>Balita</p>
        </div>
        <div className="dashboard-content">
          <img className="w-[35px] xl:w-[60px] xl:hidden" src="dashboard/lansia.svg"></img>
          <img className="w-[35px] xl:w-[60px] hidden xl:block" src="dashboard/lansia-desktop.svg"></img>
          <p>Lansia</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
