"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosConfig from "../../utils/axios";
import CanvasJSReact from "@canvasjs/react-charts";

const { CanvasJSChart } = CanvasJSReact;

const DashboardScreen = () => {
  const [kategori, setKategori] = useState("bumil");
  const [tahun, setTahun] = useState(0);
  const [dataTahun, setdataTahun] = useState({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  });
  const handleChange = (e) => {
    setTahun(e.target.value);
    if (kategori === "bumil") {
      getBumilGrafik();
    } else if (kategori === "bayi") {
      getBayiGrafik();
    } else if (kategori === "balita") {
      getBalitaGrafik();
    } else if (kategori === "lansia") {
      getLansiaGrafik();
    }
  };
  const getBumilGrafik = async () => {
    try {
      const response = await axiosConfig.get(
        "http://localhost:3000/api/grafik/bumil",
        { params: { year: tahun } }
      );
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setdataTahun(response.data.data);
      setOptions({
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "Ibu Hamil",
          fontColor: "#FFBBBB",
        },
        axisY: {
          includeZero: true,
          labelFontColor: "#FFBBBB",
        },
        data: [
          {
            type: "column",
            xValueFormatString: "MMM YYYY",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
              { label: "Jan", y: dataTahun.january },
              { label: "Feb", y: dataTahun.february },
              { label: "Mar", y: dataTahun.march },
              { label: "Apr", y: dataTahun.april },
              { label: "Mei", y: dataTahun.may },
              { label: "Jun", y: dataTahun.june },
              { label: "Jul", y: dataTahun.july },
              { label: "Ags", y: dataTahun.august },
              { label: "Sep", y: dataTahun.september },
              { label: "Okt", y: dataTahun.october },
              { label: "Nov", y: dataTahun.november },
              { label: "Des", y: dataTahun.december },
            ],
            color: "#FFBBBB",
          },
        ],
      });
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };
  const getLansiaGrafik = async () => {
    try {
      const response = await axiosConfig.get(
        "http://localhost:3000/api/grafik/lansia",
        { params: { year: tahun } }
      );
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setdataTahun(response.data.data);
      setOptions({
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "Lansia",
          fontColor: "#FFBBBB",
        },
        axisY: {
          includeZero: true,
          labelFontColor: "#FFBBBB",
        },
        data: [
          {
            type: "column",
            xValueFormatString: "MMM YYYY",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
              { label: "Jan", y: dataTahun.january },
              { label: "Feb", y: dataTahun.february },
              { label: "Mar", y: dataTahun.march },
              { label: "Apr", y: dataTahun.april },
              { label: "Mei", y: dataTahun.may },
              { label: "Jun", y: dataTahun.june },
              { label: "Jul", y: dataTahun.july },
              { label: "Ags", y: dataTahun.august },
              { label: "Sep", y: dataTahun.september },
              { label: "Okt", y: dataTahun.october },
              { label: "Nov", y: dataTahun.november },
              { label: "Des", y: dataTahun.december },
            ],
            color: "#FFBBBB",
          },
        ],
      });
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };
  const getBayiGrafik = async () => {
    try {
      const response = await axiosConfig.get(
        "http://localhost:3000/api/grafik/bayi",
        { params: { year: tahun, type: "bayi" } }
      );
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setdataTahun(response.data.data);
      setOptions({
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "Bayi",
          fontColor: "#FFBBBB",
        },
        axisY: {
          includeZero: true,
          labelFontColor: "#FFBBBB",
        },
        data: [
          {
            type: "column",
            xValueFormatString: "MMM YYYY",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
              { label: "Jan", y: dataTahun.january },
              { label: "Feb", y: dataTahun.february },
              { label: "Mar", y: dataTahun.march },
              { label: "Apr", y: dataTahun.april },
              { label: "Mei", y: dataTahun.may },
              { label: "Jun", y: dataTahun.june },
              { label: "Jul", y: dataTahun.july },
              { label: "Ags", y: dataTahun.august },
              { label: "Sep", y: dataTahun.september },
              { label: "Okt", y: dataTahun.october },
              { label: "Nov", y: dataTahun.november },
              { label: "Des", y: dataTahun.december },
            ],
            color: "#FFBBBB",
          },
        ],
      });
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };
  const getBalitaGrafik = async () => {
    try {
      const response = await axiosConfig.get(
        "http://localhost:3000/api/grafik/bayi",
        { params: { year: tahun, type: "balita" } }
      );
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setdataTahun(response.data.data);
      setOptions({
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "Balita",
          fontColor: "#FFBBBB",
        },
        axisY: {
          includeZero: true,
          labelFontColor: "#FFBBBB",
        },
        data: [
          {
            type: "column",
            xValueFormatString: "MMM YYYY",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
              { label: "Jan", y: dataTahun.january },
              { label: "Feb", y: dataTahun.february },
              { label: "Mar", y: dataTahun.march },
              { label: "Apr", y: dataTahun.april },
              { label: "Mei", y: dataTahun.may },
              { label: "Jun", y: dataTahun.june },
              { label: "Jul", y: dataTahun.july },
              { label: "Ags", y: dataTahun.august },
              { label: "Sep", y: dataTahun.september },
              { label: "Okt", y: dataTahun.october },
              { label: "Nov", y: dataTahun.november },
              { label: "Des", y: dataTahun.december },
            ],
            color: "#FFBBBB",
          },
        ],
      });
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };
  const [options, setOptions] = useState({
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Ibu Hamil",
      fontColor: "#FFBBBB",
    },
    axisY: {
      includeZero: true,
      labelFontColor: "#FFBBBB",
    },
    data: [
      {
        type: "column",
        xValueFormatString: "MMM YYYY",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { label: "Jan", y: dataTahun.january },
          { label: "Feb", y: dataTahun.february },
          { label: "Mar", y: dataTahun.march },
          { label: "Apr", y: dataTahun.april },
          { label: "Mei", y: dataTahun.may },
          { label: "Jun", y: dataTahun.june },
          { label: "Jul", y: dataTahun.july },
          { label: "Ags", y: dataTahun.august },
          { label: "Sep", y: dataTahun.september },
          { label: "Okt", y: dataTahun.october },
          { label: "Nov", y: dataTahun.november },
          { label: "Des", y: dataTahun.december },
        ],
        color: "#FFBBBB",
      },
    ],
  });

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-sm mt-[90px] xl:mt-[150px] justify-center">
          <div className="ml-2 w-[250px] xl:w-[1400px] mb-3">
            <h1 className="text-[20px] font-bold xl:text-[45px]">Dashboard</h1>
            <p className="text-[10px] leading-[13px] font-semibold mt-4 mb-4 xl:text-[16px] xl:mt-[25px]">
              Berikut merupakan data statistik pasien di Posyandu Mawar I
            </p>
          </div>

          {/* <img className="xl:hidden" src="dashboard/graph.svg"></img>
          <img className="hidden xl:block" src="dashboard/graph-desktop.svg"></img> */}
          <div>
            <select
              onChange={handleChange}
              className="select select-bordered select-xs xl:select-sm mb-4 w-full max-w-xs"
            >
              <option value={2024}>2024</option>
              <option value={2023} selected>
                2023
              </option>
              <option value={2022}>2022</option>
            </select>
            <CanvasJSChart options={options} />
          </div>
        </div>

        <div className="flex justify-between mt-9 w-[275px] xl:w-[500px] xl:mb-[80px]">
          <button
            onClick={async () => {
              await getBumilGrafik();
              setKategori("bumil");
            }}
            className="dashboard-content"
          >
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/bumil.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/bumil-desktop.svg"
            ></img>
            <p>Ibu Hamil</p>
          </button>
          <button
            onClick={async () => {
              await getBayiGrafik();
              setKategori("bayi");
            }}
            className="dashboard-content"
          >
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/baduta.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/baduta-desktop.svg"
            ></img>
            <p>Bayi</p>
          </button>
          <button
            onClick={async () => {
              await getBalitaGrafik();
              setKategori("balita");
            }}
            className="dashboard-content"
          >
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/balita.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/balita-desktop.svg"
            ></img>
            <p>Balita</p>
          </button>
          <button
            onClick={async () => {
              await getLansiaGrafik();
              setKategori("lansia");
            }}
            className="dashboard-content"
          >
            <img
              className="w-[35px] xl:w-[60px] xl:hidden"
              src="dashboard/lansia.svg"
            ></img>
            <img
              className="w-[35px] xl:w-[60px] hidden xl:block"
              src="dashboard/lansia-desktop.svg"
            ></img>
            <p>Lansia</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
