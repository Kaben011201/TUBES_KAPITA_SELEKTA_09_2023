"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";

const LansiaScreen = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    nik: "",
    kk: "",
    jenisKelamin: "L",
    tanggalLahir: "",
    umur: "",
    alamat: "",
    alamatKK: "",
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
      kk: inputs.kk,
      jenisKelamin: inputs.jenisKelamin,
      tanggalLahir: new Date(inputs.tanggalLahir),
      umur: parseInt(inputs.umur),
      alamat: inputs.alamat,
      alamatKK: inputs.alamatKK,
      bb: parseFloat(inputs.bb),
      tb: parseFloat(inputs.tb),
      tensi: inputs.tensi,
      bpjs: inputs.bpjs,
    };

    axiosConfig
      .post("http://localhost:3000/api/lansia", data)
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
              name="kk"
              id="kk"
              value={inputs.kk}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Lengkap
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
              name="tanggalLahir"
              id="tanggalLahir"
              value={inputs.tanggalLahir}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium"
              htmlFor=""
            >
              Umur
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="umur"
              id="umur"
              value={inputs.umur}
              onChange={handleInput}
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
            <select defaultValue={"L"} value={inputs.jenisKelamin} name="jenisKelamin" onChange={handleInput}>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
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
              name="bb"
              id="BB"
              value={inputs.bb}
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
              name="tb"
              id="TB"
              value={inputs.tb}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tensi Darah (mm/Hg)
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
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
              name="bpjs"
              id="BPJS"
              value={inputs.bpjs}
              onChange={handleInput}
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
