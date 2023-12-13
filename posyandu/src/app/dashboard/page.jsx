"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosConfig from "../../utils/axios";
import BarChart from "./component/Chart";
import _debounce from "lodash/debounce";

const DashboardScreen = () => {
  const [kategori, setKategori] = useState("bumil");
  const [tahun, setTahun] = useState(2023); // Default value set to 2023
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
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const selectedTahun = e.target.value;
    setTahun(selectedTahun);

    try {
      setLoading(true);
      switch (kategori) {
        case "bumil":
          await getGrafikData("bumil");
          break;
        case "bayi":
          await getGrafikData("bayi", "bayi");
          break;
        case "balita":
          await getGrafikData("bayi", "balita");
          break;
        case "lansia":
          await getGrafikData("lansia");
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedHandleChange = _debounce(handleChange, 200); // Adjust the delay as needed

  const getGrafikData = async (category, type) => {
    try {
      const response = await axiosConfig.get(`api/grafik/${category}`, {
        params: { year: tahun, type },
      });

      if (response.data.status !== 400) {
        setdataTahun(response.data.data);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderChart = () => {
    console.log(dataTahun);
    return {
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
          label:
            kategori === "bumil"
              ? "Ibu Hamil"
              : kategori === "lansia"
              ? "Lansia"
              : kategori === "bayi"
              ? "Bayi"
              : kategori === "balita"
              ? "Balita"
              : kategori,
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
    };
  };

  useEffect(() => {
    getGrafikData("bumil");
  }, [loading]);

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

          <div>
            <select
              onChange={debouncedHandleChange}
              className="select select-bordered select-xs xl:select-sm mb-4 w-full max-w-xs"
            >
              <option value={2024}>2024</option>
              <option value={2023} selected>
                2023
              </option>
              <option value={2022}>2022</option>
            </select>
            {loading && <p>Loading...</p>}
            <BarChart data={renderChart()} />
          </div>
        </div>

        <div className="flex justify-between mt-9 w-[275px] xl:w-[500px] xl:mb-[80px]">
          <button
            onClick={() => {
              setKategori("bumil");
              getGrafikData("bumil");
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
              setKategori("bayi");
              getGrafikData("bayi", "bayi");
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
              setKategori("balita");
              getGrafikData("bayi", "balita");
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
              setKategori("lansia");
              getGrafikData("lansia");
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
