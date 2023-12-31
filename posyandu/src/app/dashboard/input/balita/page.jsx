"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";

const BalitaScreen = () => {
  //input data
  const [inputs, setInputs] = useState({
    hadir: "hadir",
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
    panjangLahir: "",
    bb: "",
    tb: "",
    lk: "",
    ll: "",
    vit: "Iya",
    imunisasi: "Tidak Ada",
    obatCacing: "Ya",
    bulan66: "",
    bulan78: "",
    bulan88: "",
    tanggalPra: "",
    tanggalMeninggal: "",
    penyebab: "",
    keterangan: "",
  });

  //set input value to database depending on name and value of inputs form
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //add balita data
  const addBalita = (e) => {
    e.preventDefault();

    const data = {
      type: "balita", //kunjung belum ada di database
      hadir: inputs.hadir,
      kunjung: inputs.kunjung,
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
      panjangLahir: parseFloat(inputs.panjangLahir),
      bb: parseFloat(inputs.bb),
      tb: parseFloat(inputs.tb),
      lk: parseFloat(inputs.lk),
      ll: parseFloat(inputs.ll),
      vit: inputs.vit,
      bulan66: inputs.bulan66, //semua bulan ini belum ada di database
      bulan78: inputs.bulan78,
      bulan88: inputs.bulan88,
      tanggalPra: new Date(inputs.tanggalPra), //ini juga belum ada di database
      imunisasi: inputs.imunisasi,
      obatCacing: inputs.obatCacing,
      tanggalMeninggal: new Date(inputs.tanggalMeninggal),
      penyebab: inputs.penyebab,
      keterangan: inputs.keterangan,
    };

    axiosConfig
      .post("api/bayi", data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Berhasil menambahkan data balita!");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] w-full rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
        <div className="text-sm breadcrumbs font-bold p-0">
          <ul className="text-[12px] xl:text-xl">
            <li>
              <a href="">Input Data</a>
            </li>
            <li>Balita</li>
          </ul>
        </div>

        <form
          onSubmit={addBalita}
          className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6"
        >
          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Kehadiran
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <select
              defaultValue={"hadir"}
              value={inputs.hadir}
              name="hadir"
              onChange={handleInput}
            >
              <option value="hadir">Hadir</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Tanggal Kunjungan
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                *
              </span>
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
            />
          </div>
          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Nama Lengkap{" "}
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
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
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
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
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
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
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                *
              </span>
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
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
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
              className="w-[22%] xl:w-[18%] xl:text-base text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Berat Lahir s.d 5 jam (kg)
              <span className="text-red-500 text-[12px] absolute mt-[-34px] xl:mt-[-6px]">
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
              Panjang Lahir (cm)
              <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                *
              </span>
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="panjangLahir"
              id="panjangLahir"
              value={inputs.panjangLahir}
              onChange={handleInput}
              required
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              BB (kg)
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="bb"
              id="bb"
              value={inputs.bb}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              TB (cm)
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="tb"
              id="tb"
              value={inputs.tb}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Lingkar Kepala (cm)
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="lk"
              id="lk"
              value={inputs.lk}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Lingkar Lengan (cm)
            </label>
            <input
              className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
              type="number"
              name="ll"
              id="ll"
              value={inputs.ll}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Vitamin
              <span className="text-red-500 absolute mt-[-6px]">*</span>
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

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Imunisasi
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <select
              defaultValue={"Tidak Ada"}
              value={inputs.imunisasi}
              name="imunisasi"
              onChange={handleInput}
            >
              <option value="Tidak Ada">Tidak Ada</option>
              <option value="DPT-HB-HIB">DPT-HB-HIB</option>
              <option value="Campak">Campak</option>
            </select>
          </div>

          <div className="flex gap-6 items-center my-4">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Obat Cacing
              <span className="text-red-500 absolute mt-[-6px]">*</span>
            </label>
            <select
              defaultValue={"Ya"}
              value={inputs.obatCacing}
              name="obatCacing"
              onChange={handleInput}
            >
              <option value="Tidak">Tidak</option>
              <option value="Ya">Ya</option>
            </select>
          </div>

          <div className="flex gap-5 xl:gap-8">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Pelayanan Anak Pra Sekolah
            </label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] text-[11px] xl:text-base xl:font-medium font-semibold">
              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  1. 66 Bulan
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="bulan66"
                  id="bulan66"
                  value={inputs.bulan66}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  2. 78 Bulan
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="bulan78"
                  id="bulan78"
                  value={inputs.bulan78}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  3. 84 Bulan
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="text"
                  name="bulan88"
                  id="bulan88"
                  value={inputs.bulan88}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[35%] xl:w-[20%]" htmlFor="">
                  4. Tanggal
                </label>
                <input
                  className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                  type="date"
                  name="tanggalPra"
                  id="tanggalPra"
                  value={inputs.tanggalPra}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 xl:gap-20 my-3">
            <label
              className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
              htmlFor=""
            >
              Meninggal
            </label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] font-semibold xl:font-medium text-[11px] xl:text-base">
              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[30%] xl:w-[10%]" htmlFor="">
                  Tanggal
                </label>
                <input
                  className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2 font-medium"
                  type="date"
                  name="tanggalMeninggal"
                  id="tanggalMeninggal"
                  value={inputs.tanggalMeninggal}
                  onChange={handleInput}
                />
              </div>

              <div className="flex gap-3 xl:gap-4 items-center">
                <label className="w-[30%] xl:w-[10%]" htmlFor="">
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

          <button
            type="submit"
            className="bg-[#FF5757;] w-[110px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[10px] xl:rounded-[15px] text-white font-semibold text-sans text-[14px] xl:text-xl p-2 xl:p-5 flex items-center gap-1 xl:gap-3"
          >
            <svg
              className="xl:w-[21px] xl:h-[21px]"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="6.75" fill="white" />
              <path
                d="M9 11.25L9 6.75"
                stroke="#222222"
                stroke-width="1.2"
                stroke-linecap="square"
              />
              <path
                d="M11.25 9L6.75 9"
                stroke="#222222"
                stroke-width="1.2"
                stroke-linecap="square"
              />
            </svg>
            Tambahkan
          </button>
        </form>
      </div>
    </main>
  );
};

export default BalitaScreen;
