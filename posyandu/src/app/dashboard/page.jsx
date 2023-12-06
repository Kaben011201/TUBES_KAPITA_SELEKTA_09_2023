"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosConfig from "../../utils/axios";
import BarChart from "./component/Chart";

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
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Ags",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],

        datasets: [
          {
            label: "Ibu Hamil",
            data: [
              dataTahun.january,
              dataTahun.february,
              dataTahun.march,
              dataTahun.april,
              dataTahun.may,
              dataTahun.june,
              dataTahun.july,
              dataTahun.august,
              dataTahun.september,
              dataTahun.october,
              dataTahun.november,
              dataTahun.december,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.7)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
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
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Ags",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],

        datasets: [
          {
            label: "Lansia",
            data: [
              dataTahun.january,
              dataTahun.february,
              dataTahun.march,
              dataTahun.april,
              dataTahun.may,
              dataTahun.june,
              dataTahun.july,
              dataTahun.august,
              dataTahun.september,
              dataTahun.october,
              dataTahun.november,
              dataTahun.december,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.7)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
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
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Ags",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],

        datasets: [
          {
            label: "Bayi",
            data: [
              dataTahun.january,
              dataTahun.february,
              dataTahun.march,
              dataTahun.april,
              dataTahun.may,
              dataTahun.june,
              dataTahun.july,
              dataTahun.august,
              dataTahun.september,
              dataTahun.october,
              dataTahun.november,
              dataTahun.december,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.7)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
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
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Ags",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],

        datasets: [
          {
            label: "Balita",
            data: [
              dataTahun.january,
              dataTahun.february,
              dataTahun.march,
              dataTahun.april,
              dataTahun.may,
              dataTahun.june,
              dataTahun.july,
              dataTahun.august,
              dataTahun.september,
              dataTahun.october,
              dataTahun.november,
              dataTahun.december,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.7)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };
  const [options, setOptions] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],

    datasets: [
      {
        label: "Ibu Hamil",
        data: [
          dataTahun.january,
          dataTahun.february,
          dataTahun.march,
          dataTahun.april,
          dataTahun.may,
          dataTahun.june,
          dataTahun.july,
          dataTahun.august,
          dataTahun.september,
          dataTahun.october,
          dataTahun.november,
          dataTahun.december,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  });

  // useEffect(() => {
  //   getBumilGrafik();
  // }, [tahun, kategori]);

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
            <BarChart data={options} />
          </div>
        </div>

        <div className="flex justify-between mt-9 w-[275px] xl:w-[500px] xl:mb-[80px]">
          <button
            onClick={() => {
              getBumilGrafik();
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
            onClick={() => {
              getBayiGrafik();
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
            onClick={() => {
              getBalitaGrafik();
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
            onClick={() => {
              getLansiaGrafik();
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
