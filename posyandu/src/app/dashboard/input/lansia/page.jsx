"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";

const LansiaScreen = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    nik: "",
    kk: "",
    jenisKelamin: "",
    tanggalLahir: "",
    umur: "",
    alamat: "",
    alamaKK: "",
    bb: "",
    tb: "",
    tensi: "",
    bpjs: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // LOGIN
  const addLansia = (e) => {
    e.preventDefault();

    const data = {
      nama: inputs.nama,
      nik: inputs.nik,
      nokk: inputs.nokk,
      jenkel: jenkel,
      ttl: inputs.ttl,
      umur: inputs.umur,
      alamat: inputs.alamat,
      alamatKK: inputs.alamatKK,
      BB: inputs.BB,
      TB: inputs.TB,
      tensi: inputs.tensi,
      BPJS: inputs.BPJS,
    };

    axiosConfig
      .post("http://localhost:3000/api/lansia", data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Wanghasil wangnambahkan wangta wangsia");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
      });
  };
  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] w-full m-[7px] mt-[56px] rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
        <div className="text-sm breadcrumbs font-bold p-0">
          <ul className="text-[12px] xl:text-xl">
            <li>
              <a href="">Input Data</a>
            </li>
            <li>Lansia</li>
          </ul>
        </div>

        <form
          onSubmit={addLansia}
          className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6"
        >
          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium"
              htmlFor=""
            >
              Tanggal Kunjungan
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="date"
              name="kunjung"
              id="kunjung"
              value={""}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium"
              htmlFor=""
            >
              NIK
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nik"
              id="nik"
              value={inputs.nik}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium"
              htmlFor=""
            >
              No KK
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nokk"
              id="nokk"
              value={inputs.nokk}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Lengkap{" "}
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nama"
              id="nama"
              value={inputs.nama}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tanggal Lahir{" "}
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2 px-2"
              type="date"
              name="ttl"
              id="ttl"
              value={inputs.ttl}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Jenis Kelamin
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <div className="flex flex-row gap-10 xl:gap-32">
              <div className="flex gap-2">
                <input
                  className="accent-pink-500"
                  type="radio"
                  name="jenkel"
                  id="pria"
                  checked={(inputs.jenkel = "L")}
                  value={inputs.jenkel}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="">Laki-laki</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="accent-pink-500"
                  type="radio"
                  name="jenkel"
                  id="wanita"
                  checked={(inputs.jenkel = "P")}
                  value={inputs.jenkel}
                  onChange={handleInput}
                />
                <label htmlFor="">Perempuan</label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Alamat <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <textarea
              className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none"
              name="alamat"
              id="alamat"
              rows="3"
              value={inputs.alamat}
              onChange={handleInput}
              required
            ></textarea>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Alamat Domisili KK
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <textarea
              className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none"
              name="alamatKK"
              id="alamatKK"
              rows="3"
              value={inputs.alamatKK}
              onChange={handleInput}
              required
            ></textarea>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="BB"
              id="BB"
              value={inputs.BB}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="TB"
              id="TB"
              value={inputs.TB}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tensi Darah (mmHg)
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="tensi"
              id="tensi"
              value={inputs.tensi}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              No. BPJS<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="BPJS"
              id="BPJS"
              value={inputs.BPJS}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tensi Darah (mmHg)
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="tensi"
              id="tensi"
              value={120}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              No. BPJS<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="BPJS"
              id="BPJS"
              value={"42425453"}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-1 xl:gap-4"
          >
            <img
              className="w-[22px] xl:w-[35px] mb-1"
              src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg"
              alt="saveform"
            />
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
};

export default LansiaScreen;
