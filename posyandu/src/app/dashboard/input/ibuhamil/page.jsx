"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";

const IbuScreen = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    nik: "",
    kk: "",
    tanggalLahir: "",
    umur: "",
    alamat: "",
    alamatKK: "",
    bb: "",
    tb: "",
    usiaHamil: "",
    lingkarLengan: "",
    g: "",
    p: "",
    a: "",
    hpht: "",
    tp: "",
    hb: "",
    namaSuami: "",
    nikSuami: "",
    tanggalLahirSuami: "",
    noHp: "",
    bpjs: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // LOGIN
  const addIbuhamil = (e) => {
    e.preventDefault();

    const data = {
      nama: inputs.nama,
      nik: inputs.nik,
      kk: inputs.kk,
      tanggalLahir: new Date(inputs.tanggalLahir),
      umur: parseInt(inputs.umur),
      alamat: inputs.alamat,
      alamatKK: inputs.alamatKK,
      bb: parseFloat(inputs.bb),
      tb: parseFloat(inputs.tb),
      usiaHamil: parseFloat(inputs.usiaHamil),
      lingkarLengan: parseFloat(inputs.lingkarLengan),
      g: parseInt(inputs.g),
      p: parseInt(inputs.p),
      a: parseInt(inputs.a),
      hpht: new Date(inputs.hpht),
      tp: new Date(inputs.tp),
      hb: inputs.hb,
      namaSuami: inputs.namaSuami,
      nikSuami: inputs.nikSuami,
      tanggalLahirSuami: new Date(inputs.tanggalLahirSuami),
      noHp: inputs.noHp,
      bpjs: inputs.bpjs,
    };

    axiosConfig
      .post("http://localhost:3000/api/bumil", data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Wanghasil wangnambahkan wangta wangsia");
        } else {
          alert(response.data.message);
        }
        console.log(response.data);
      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <main className="flex justify-center">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] w-full rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
        <div className="text-sm breadcrumbs font-bold p-0">
          <ul className="text-[12px] xl:text-xl">
            <li>
              <a href="">Input Data</a>
            </li>
            <li>Ibu Hamil</li>
          </ul>
        </div>

        <form
          onSubmit={addIbuhamil}
          className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6"
        >
          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              No. Urut{" "}
              <span className="text-red-500 absolute mt-[-20px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="urut"
              id="urut"
              value={1}
              required
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
              name="kk"
              id="kk"
              onChange={handleInput}
              value={inputs.kk}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Ibu Hamil
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nama"
              id="nama"
              onChange={handleInput}
              value={inputs.nama}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium"
              htmlFor=""
            >
              NIK Ibu Hamil
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nik"
              id="nik"
              onChange={handleInput}
              value={inputs.nik}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] text-[11px] xl:text-base"
              htmlFor=""
            >
              Tanggal Lahir Ibu Hamil
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
              type="date"
              name="tanggalLahir"
              id="tanggalLahir"
              onChange={handleInput}
              value={inputs.tanggalLahir}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Umur Ibu Hamil
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="umur"
              id="umur"
              onChange={handleInput}
              value={inputs.umur}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Suami{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="namaSuami"
              id="namaSuami"
              onChange={handleInput}
              value={inputs.namaSuami}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              NIK Suami{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nikSuami"
              id="nikSuami"
              onChange={handleInput}
              value={inputs.nikSuami}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tanggal Lahir Suami
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
              type="date"
              name="tanggalLahirSuami"
              id="tanggalLahirSuami"
              onChange={handleInput}
              value={inputs.tanggalLahirSuami}
              required
            />
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
              onChange={handleInput}
              value={inputs.alamat}
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
              onChange={handleInput}
              value={inputs.alamatKK}
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
              name="bb"
              id="bb"
              onChange={handleInput}
              value={inputs.bb}
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
              name="tb"
              id="tb"
              onChange={handleInput}
              value={inputs.tb}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-semibold leading-[1.2] text-[10px] xl:text-base xl:font-medium"
              htmlFor=""
            >
              Usia Kehamilan (bulan)
              <span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="usiaHamil"
              id="usiaHamil"
              onChange={handleInput}
              value={inputs.usiaHamil}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Lingkar Lengan (cm)
              <span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="lingkarLengan"
              id="lingkarLengan"
              onChange={handleInput}
              value={inputs.lingkarLengan}
              required
            />
          </div>

          <div className="flex gap-8 xl:gap-8">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              GPA <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] text-medium xl:text-base xl:font-medium">
              <div className="flex xl:gap-4 items-center">
                <label className="w-[15%] xl:w-[20%]" htmlFor="">
                  G
                </label>
                <input
                  className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="number"
                  name="g"
                  id="g"
                  onChange={handleInput}
                  value={inputs.g}
                  required
                />
              </div>

              <div className="flex xl:gap-4 items-center">
                <label className="w-[15%] xl:w-[20%]" htmlFor="">
                  P
                </label>
                <input
                  className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="number"
                  name="p"
                  id="p"
                  onChange={handleInput}
                  value={inputs.p}
                  required
                />
              </div>

              <div className="flex xl:gap-4 items-center">
                <label className="w-[15%] xl:w-[20%]" htmlFor="">
                  A
                </label>
                <input
                  className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="number"
                  name="a"
                  id="a"
                  onChange={handleInput}
                  value={inputs.a}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              HPHT<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="date"
              name="hpht"
              id="hpht"
              onChange={handleInput}
              value={inputs.hpht}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              TP<span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="date"
              name="tp"
              id="tp"
              onChange={handleInput}
              value={inputs.tp}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              HB (g/dL)
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="hb"
              id="hb"
              onChange={handleInput}
              value={inputs.hb}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              No. Hp/WA
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="noHp"
              id="noHp"
              onChange={handleInput}
              value={inputs.noHp}
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
              name="bpjs"
              id="bpjs"
              onChange={handleInput}
              value={inputs.bpjs}
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

export default IbuScreen;
