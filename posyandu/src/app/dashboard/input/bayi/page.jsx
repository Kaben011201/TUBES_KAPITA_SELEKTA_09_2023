"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";

const BayiScreen = () => {
  const [inputs, setInputs] = useState({
    kunjung: "",
    nama: "",
    nik: "",
    jenisKelamin: "L",
    tanggalLahir: "",
    ayah: "",
    nikAyah: "",
    ibu: "",
    nikIbu: "",
    noHp: "",
    alamat: "",
    alamatKK: "",
    kia: "Iya",
    bb5: "",
    bb: "",
    tb: "",
    lk: "",
    ll: "",
    vit: "Iya",
    neo1: "",
    neo2: "",
    neo3: "",
    vitA: "Iya",
    imunisasi: "Tidak Ada",
    tanggalMeninggal: "",
    penyebab: "",
    keterangan: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // LOGIN
  const addBayi = (e) => {
    e.preventDefault();

    const data = {
      type: "bayi",
      nama: inputs.nama,
      nik: inputs.nik,
      jenisKelamin: inputs.jenisKelamin,
      tanggalLahir: new Date(inputs.tanggalLahir),
      ayah: inputs.ayah,
      nikAyah: inputs.nikAyah,
      ibu: inputs.ibu,
      nikIbu: inputs.nikIbu,
      noHp: inputs.noHp,
      alamat: inputs.alamat,
      alamatKK: inputs.alamatKK,
      kia: inputs.kia,
      bb5: parseFloat(inputs.bb5),
      bb: parseFloat(inputs.bb),
      tb: parseFloat(inputs.tb),
      lk: parseFloat(inputs.lk),
      ll: parseFloat(inputs.ll),
      vit: inputs.vit,
      neo1: inputs.neo1,
      neo2: inputs.neo2,
      neo3: inputs.neo3,
      vitA: inputs.vitA,
      imunisasi: inputs.imunisasi,
      tanggalMeninggal: new Date(inputs.tanggalMeninggal),
      penyebab: inputs.penyebab,
      keterangan: inputs.keterangan,
    };

    axiosConfig
      .post("http://localhost:3000/api/bayi", data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Wanghasil wangnambahkan wangta wangyi");
        } else {
          alert(response.data.message);
        }
        console.log(response.data);
      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
      });
  };

  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
        <div className="text-sm breadcrumbs font-bold p-0">
          <ul className="text-[12px] xl:text-xl">
            <li>
              <a href="">Input Data</a>
            </li>
            <li>Bayi</li>
          </ul>
        </div>

        <form
          onSubmit={addBayi}
          className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6"
        >
          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tanggal Kunjungan
              <span className="text-red-500 absolute mt-[-20px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="date"
              name="kunjung"
              id="kunjung"
              value={inputs.kunjung}
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
              required
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
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="date"
              name="tanggalLahir"
              id="tanggalLahir"
              value={inputs.tanggalLahir}
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
            <select
              defaultValue={"L"}
              value={inputs.jenisKelamin}
              name="jenisKelamin"
              onChange={handleInput}
            >
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Ibu{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="ibu"
              id="ibu"
              value={inputs.ibu}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              NIK Ibu <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nikIbu"
              id="nikIbu"
              value={inputs.nikIbu}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Ayah{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="ayah"
              id="ayah"
              value={inputs.ayah}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              NIK Ayah{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="nikAyah"
              id="nikAyah"
              value={inputs.nikAyah}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              No Handphone{" "}
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="noHp"
              id="noHp"
              value={inputs.noHp}
              onChange={handleInput}
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
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-9px]">
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

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Punya Buku KIA?
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <select
              defaultValue={"Iya"}
              value={inputs.kia}
              name="kia"
              onChange={handleInput}
            >
              <option value="Iya">Iya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[22%] xl:w-[18%] text-[10px] xl:text-base text-end font-semibold xl:font-medium leading-[1.2]"
              htmlFor=""
            >
              Berat Lahir s.d 5 jam (kg)
              <span className="text-red-500 text-[12px] absolute mt-[-17px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="bb5"
              id="bb5"
              value={inputs.bb5}
              onChange={handleInput}
              required
            />
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
              id="tb"
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
              Lingkar Kepala (cm)
              <span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="lk"
              id="lk"
              value={inputs.lk}
              onChange={handleInput}
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
              name="ll"
              id="ll"
              value={inputs.ll}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Vitamin (2 Bulan)
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <select
              defaultValue={"Iya"}
              value={inputs.vit}
              name="vit"
              onChange={handleInput}
            >
              <option value="Iya">Iya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div className="flex gap-5 xl:gap-8">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Masa Neonatal
            </label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] text-[11px] xl:text-base xl:font-medium font-semibold">
              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  1. 6-48 jam
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="neo1"
                  id="neo1"
                  value={inputs.neo1}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  2. Hari ke 3-28
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="neo2"
                  id="neo2"
                  value={inputs.neo2}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  3. Hari ke 8-28
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="neo3"
                  id="neo3"
                  value={inputs.neo3}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Vitamin A
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <select
              defaultValue={"Iya"}
              value={inputs.vitA}
              name="vitA"
              onChange={handleInput}
            >
              <option value="Iya">Iya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Imunisasi
              <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <select
              defaultValue={"Tidak Ada"}
              value={inputs.imunisasi}
              name="imunisasi"
              onChange={handleInput}
            >
              <option value="Tidak Ada">Tidak Ada</option>
              <option value="HB 0-7 Hari">HB 0-7 Hari</option>
              <option value="DXG">DXG</option>
              <option value="DPT-HB-Hib 1">DPT-HB-Hib 1</option>
              <option value="DPT-HB-Hib 2">DPT-HB-Hib 2</option>
              <option value="DPT-HB-Hib 3">DPT-HB-Hib 3</option>
              <option value="Polio 1">Polio 1</option>
              <option value="Polio 2">Polio 2</option>
              <option value="Polio 3">Polio 3</option>
              <option value="Polio 4">Polio 4</option>
              <option value="IPV">IPV</option>
              <option value="Campak">Campak</option>
            </select>
          </div>

          <div className="flex gap-5">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Meninggal
            </label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] font-semibold xl:font-medium text-[11px] xl:text-base">
              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[30%] xl:w-[20%]" htmlFor="">
                  Tanggal
                </label>
                <input
                  className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2 font-medium"
                  type="date"
                  name="tanggalMeninggal"
                  id="tanggalMeninggal"
                  value={inputs.tanggalMeninggal}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[30%] xl:w-[20%]" htmlFor="">
                  Penyebab
                </label>
                <input
                  className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="penyebab"
                  id="penyebab"
                  value={inputs.penyebab}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Keterangan
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="text"
              name="keterangan"
              id="keterangan"
              value={inputs.keterangan}
              onChange={handleInput}
            />
          </div>

          <button type="submit" className="bg-[#FF5757;] w-[110px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[10px] xl:rounded-[15px] text-white font-semibold text-sans text-[14px] xl:text-xl p-2 xl:p-5 flex items-center gap-1 xl:gap-3">
          <svg className="xl:w-[21px] xl:h-[21px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="6.75" fill="white"/>
              <path d="M9 11.25L9 6.75" stroke="#222222" stroke-width="1.2" stroke-linecap="square"/>
              <path d="M11.25 9L6.75 9" stroke="#222222" stroke-width="1.2" stroke-linecap="square"/>
          </svg>
          Tambahkan
        </button>
        </form>
      </div>
    </main>
  );
};

export default BayiScreen;
