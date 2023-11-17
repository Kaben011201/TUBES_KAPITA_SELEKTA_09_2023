"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

const DashboardScreen = () => {
  const [options] = useState({
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Ibu Hamil",
      fontColor: "#FFBBBB",
    },
    axisY: {
      includeZero: true,
      labelFontColor: "#FFBBBB"
    },
    data: [
      {
        type: "column",
        xValueFormatString: "MMM YYYY",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { label: 'Jan', y: 70 },
          { label: 'Feb', y: 55 },
          { label: 'Mar', y: 50 },
          { label: 'Apr', y: 65 },
          { label: 'Mei', y: 71 },
          { label: 'Jun', y: 68 },
          { label: 'Jul', y: 92, index: "Highest" },
          { label: 'Ags', y: 54 },
          { label: 'Sep', y: 60 },
          { label: 'Okt', y: 21 },
          { label: 'Nov', y: 49 },
          { label: 'Des', y: 36 },
        ],
        color: "#FFBBBB",
      },
    ],
  });

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-sm mt-12 xl:mt-[120px] justify-center">
          <div className="ml-2 w-[250px] xl:w-[1400px] mb-3">
            <h1 className="text-[20px] font-bold xl:text-[45px]">Dashboard</h1>
            <p className="text-[10px] leading-[13px] font-semibold mt-4 mb-4 xl:text-[16px] xl:mt-[25px]">
              Berikut merupakan data statistik pasien di Posyandu Mawar I
            </p>
          </div>

          {/* <img className="xl:hidden" src="dashboard/graph.svg"></img>
          <img className="hidden xl:block" src="dashboard/graph-desktop.svg"></img> */}
          <div>
            <CanvasJSChart options={options} />
          </div>
        </div>

        <div className="flex justify-between mt-9 w-[275px] xl:w-[500px] xl:mb-[80px]">
          <div className="dashboard-content">
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/bumil.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/bumil-desktop.svg"
            ></img>
            <p>Ibu Hamil</p>
          </div>
          <div className="dashboard-content">
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/baduta.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/baduta-desktop.svg"
            ></img>
            <p>Bayi</p>
          </div>
          <div className="dashboard-content">
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/balita.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/balita-desktop.svg"
            ></img>
            <p>Balita</p>
          </div>
          <div className="dashboard-content">
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/lansia.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/lansia-desktop.svg"
            ></img>
            <p>Lansia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;