"use client";
import React, { useState, useEffect } from "react";
import Bulan from "../../component/Bulan";
import axiosConfig from "../../../../utils/axios";

const DataBayi = () => {
  const [bayi, setBayi] = useState([]);
  const [bayiFilter, setBayiFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(keyword);
  }

  const [edits, setEdits] = useState({
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

  const handleEdits = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdits((values) => ({ ...values, [name]: value }));
  };

  const getBayi = async () => {
    try {
      const response = await axiosConfig.get("http://localhost:3000/api/bayi", {
        params: { month: bulan,type: "bayi", query: search },
      });
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setBayi(response.data.data);
      console.log(search);
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };

  const getBayiFilter = async (bayi) => {
    try {
      const response = await axiosConfig.get(
        `http://localhost:3000/api/riwayat/bayi/${bayi.nik}`
      );

      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setBayiFilter(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        // If there is a response from the server
        alert(error.response.data.message);
        console.log(error.response.data);
      } else {
        // If there is no response from the server
        alert("An error occurred while fetching data");
        console.error(error);
      }
    }
  };

  const delBayiHapus = async (bayi) => {
    try {
      const response = await axiosConfig.delete(
        `http://localhost:3000/api/bayi/${bayi.id}`
      );
      if (response.data.status !== 400) {
        window.location.reload();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // If there is a response from the server
        alert(error.response.data.message);
        console.log(error.response.data);
      } else {
        // If there is no response from the server
        alert("An error occurred while fetching data");
        console.error(error);
      }
    }
  };

  const changeDateTable = (date) => {
    date = new Date(date);

    // Get the individual components
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let year = date.getFullYear().toString();

    // Format into a string in "DD/MM/YY" format
    let formattedDate = day + "/" + month + "/" + year;

    return formattedDate;
  };

  const changeDateEdit = (date) => {
    date = new Date(date);

    // Get the individual components
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let year = date.getFullYear().toString();

    // Format into a string in "DD/MM/YY" format
    let formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  };

  const getBayiEdit = async (bayi) => {
    try {
      const response = await axiosConfig.get(
        `http://localhost:3000/api/bayi/${bayi.id}`
      );
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setEdits(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        // If there is a response from the server
        alert(error.response.data.message);
        console.log(error.response.data);
      } else {
        // If there is no response from the server
        alert("An error occurred while fetching data");
        console.error(error);
      }
    }
  };

  const patchBayiEdit = (e) => {
    e.preventDefault();

    const data = {
      kunjung: edits.kunjung,
      nama: edits.nama,
      nik: edits.nik,
      jenisKelamin: edits.jenisKelamin,
      tanggalLahir: new Date(edits.tanggalLahir),
      ayah: edits.ayah,
      nikAyah: edits.nikAyah,
      ibu: edits.ibu,
      nikIbu: edits.nikIbu,
      noHp: edits.noHp,
      alamat: edits.alamat,
      alamatKK: edits.alamatKK,
      kia: edits.kia,
      bb: parseFloat(edits.bb),
      tb: parseFloat(edits.tb),
      lk: parseFloat(edits.lk),
      ll: parseFloat(edits.ll),
      vit: edits.vit,
      neo1: edits.neo1,
      neo2: edits.neo2,
      neo3: edits.neo3,
      vitA: edits.vitA,
      imunisasi: edits.imunisasi,
      tanggalMeninggal: new Date(edits.tanggalMeninggal),
      penyebab: edits.penyebab,
      keterangan: edits.keterangan,
    };

    axiosConfig
      .patch(`http://localhost:3000/api/bayi/${edits.id}`, data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Berhasil mengedit data bayi!");
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

  const PrintData = () => {
    //console.log('print');
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const renderTable = () => {
    return bayi.map((bayi) => {
      return (
        <tr key={bayi.id}>
          <td>{changeDateTable(bayi.kunjung)}</td>
          <td>{bayi.nama}</td>
          <td>{bayi.nik}</td>
          <td>{changeDateTable(bayi.tanggalLahir)}</td>
          <td>{bayi.jenisKelamin}</td>
          <td>{bayi.ibu}</td>
          <td>{bayi.nikIbu}</td>
          <td>{bayi.ayah}</td>
          <td>{bayi.nikAyah}</td>
          <td>{bayi.noHp}</td>
          <td>{bayi.alamat}</td>
          <td>{bayi.kia}</td>
          <td>{bayi.bb}</td>
          <td>{bayi.tb}</td>
          <td>{bayi.lk}</td>
          <td>{bayi.ll}</td>
          <td>{bayi.vit}</td>
          <td>{bayi.bb5}</td>
          <td>{bayi.neo1}</td>
          <td>{bayi.neo2}</td>
          <td>{bayi.neo3}</td>
          <td>{bayi.vitA}</td>
          <td>{bayi.imunisasi}</td>
          <td>{changeDateTable(bayi.tanggalMeninggal)}</td>
          <td>{bayi.keterangan}</td>
          <td className="whitespace-nowrap">
            <button
              onClick={async () => {
                await getBayiFilter(bayi);
                document.getElementById(`modal_info_bayi`).showModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.5"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M6.32813 4.92187C6.32813 4.73645 6.38311 4.5552 6.48612 4.40103C6.58914 4.24686 6.73556 4.12669 6.90686 4.05574C7.07817 3.98478 7.26667 3.96621 7.44852 4.00239C7.63038 4.03856 7.79743 4.12785 7.92854 4.25896C8.05965 4.39007 8.14894 4.55712 8.18511 4.73898C8.22129 4.92083 8.20272 5.10933 8.13176 5.28064C8.06081 5.45195 7.94065 5.59836 7.78647 5.70138C7.6323 5.80439 7.45105 5.85937 7.26563 5.85937C7.01699 5.85937 6.77853 5.7606 6.60272 5.58479C6.4269 5.40897 6.32813 5.17052 6.32813 4.92187ZM13.8281 7.5C13.8281 8.75158 13.457 9.97506 12.7616 11.0157C12.0663 12.0564 11.078 12.8675 9.92167 13.3464C8.76536 13.8254 7.49298 13.9507 6.26545 13.7065C5.03791 13.4624 3.91035 12.8597 3.02534 11.9747C2.14034 11.0897 1.53764 9.96209 1.29347 8.73456C1.0493 7.50702 1.17462 6.23464 1.65358 5.07833C2.13254 3.92202 2.94363 2.9337 3.98428 2.23836C5.02494 1.54301 6.24842 1.17188 7.5 1.17188C9.17775 1.17374 10.7863 1.84104 11.9726 3.0274C13.159 4.21375 13.8263 5.82225 13.8281 7.5ZM12.4219 7.5C12.4219 6.52654 12.1332 5.57495 11.5924 4.76555C11.0516 3.95615 10.2829 3.32531 9.38352 2.95278C8.48417 2.58026 7.49454 2.48279 6.53979 2.6727C5.58504 2.86261 4.70805 3.33137 4.01971 4.01971C3.33137 4.70805 2.86261 5.58504 2.6727 6.53979C2.48279 7.49454 2.58026 8.48416 2.95278 9.38352C3.32531 10.2829 3.95616 11.0516 4.76556 11.5924C5.57495 12.1332 6.52655 12.4219 7.5 12.4219C8.80494 12.4205 10.056 11.9015 10.9788 10.9787C11.9015 10.056 12.4205 8.80493 12.4219 7.5ZM8.20313 9.64922V7.73437C8.20313 7.42357 8.07966 7.1255 7.85989 6.90573C7.64012 6.68596 7.34205 6.5625 7.03125 6.5625C6.8652 6.56225 6.70442 6.62078 6.57739 6.72772C6.45036 6.83465 6.36527 6.9831 6.3372 7.14676C6.30913 7.31041 6.33988 7.47873 6.42402 7.62189C6.50815 7.76504 6.64024 7.8738 6.79688 7.92891V9.84375C6.79688 10.1545 6.92034 10.4526 7.14011 10.6724C7.35988 10.8922 7.65795 11.0156 7.96875 11.0156C8.1348 11.0159 8.29558 10.9573 8.42261 10.8504C8.54964 10.7435 8.63473 10.595 8.6628 10.4314C8.69088 10.2677 8.66012 10.0994 8.57599 9.95624C8.49185 9.81308 8.35977 9.70432 8.20313 9.64922Z"
                  fill="#545454"
                />
              </svg>
            </button>
            <button
              onClick={async () => {
                await getBayiEdit(bayi);
                document.getElementById(`modal_edit_bayi`).showModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.5"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M2 10.9125V12.8125C2 12.9875 2.14667 13.125 2.33333 13.125H4.36C4.44667 13.125 4.53333 13.0938 4.59333 13.0313L11.8733 6.2125L9.37333 3.86875L2.1 10.6875C2.03333 10.75 2 10.825 2 10.9125ZM13.8067 4.4C13.8685 4.34218 13.9175 4.2735 13.951 4.19789C13.9844 4.12228 14.0016 4.04123 14.0016 3.95938C14.0016 3.87752 13.9844 3.79647 13.951 3.72086C13.9175 3.64525 13.8685 3.57657 13.8067 3.51875L12.2467 2.05625C12.185 1.99831 12.1117 1.95234 12.0311 1.92098C11.9504 1.88962 11.864 1.87347 11.7767 1.87347C11.6894 1.87347 11.6029 1.88962 11.5223 1.92098C11.4416 1.95234 11.3683 1.99831 11.3067 2.05625L10.0867 3.2L12.5867 5.54375L13.8067 4.4Z"
                  fill="#545454"
                />
              </svg>
            </button>
            {/* Hapus data */}
            <button
              onClick={() =>
                document.getElementById(`modal_hapus_bayi`).showModal()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.5"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                  fill="#545454"
                />
              </svg>
            </button>
          </td>
          {/* modal hapus bayi*/}
          <dialog id="modal_hapus_bayi" className="modal">
            <div className="modal-box xl:max-w-xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-4">Hapus Data</h3>
              <p>Apakah anda yakin ingin menghapus data pasien ini?</p>
              <button
                className="btn btn-error mt-4 px-20"
                onClick={async () => {
                  await delBayiHapus(bayi);
                }}
              >
                Ya
              </button>
            </div>
          </dialog>
          {/* modal edit bayi*/}
          <dialog id="modal_edit_bayi" className="modal">
            <div className="modal-box xl:max-w-7xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                onSubmit={patchBayiEdit}
                className="flex flex-col gap-[7px] text-[12px] xl:text-base mt-6 xl:mt-6 whitespace-normal"
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
                    value={edits.kunjung}
                    onChange={handleEdits}
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
                    value={edits.nik}
                    onChange={handleEdits}
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
                    value={edits.nama}
                    onChange={handleEdits}
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
                    value={changeDateEdit(edits.tanggalLahir)}
                    onChange={handleEdits}
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
                    value={edits.jenisKelamin}
                    name="jenisKelamin"
                    onChange={handleEdits}
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
                    value={edits.ibu}
                    onChange={handleEdits}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    NIK Ibu{" "}
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="nikIbu"
                    id="nikIbu"
                    value={edits.nikIbu}
                    onChange={handleEdits}
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
                    value={edits.ayah}
                    onChange={handleEdits}
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
                    value={edits.nikAyah}
                    onChange={handleEdits}
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
                    value={edits.noHp}
                    onChange={handleEdits}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Alamat{" "}
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <textarea
                    className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none"
                    name="alamat"
                    id="alamat"
                    rows="3"
                    value={edits.alamat}
                    onChange={handleEdits}
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
                    value={edits.alamatKK}
                    onChange={handleEdits}
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
                    value={edits.kia}
                    name="kia"
                    onChange={handleEdits}
                  >
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
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
                    value={edits.bb5}
                    onChange={handleEdits}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    BB (kg)
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="bb"
                    id="bb"
                    value={edits.bb}
                    onChange={handleEdits}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    TB (cm)
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="tb"
                    id="tb"
                    value={edits.tb}
                    onChange={handleEdits}
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
                    value={edits.lk}
                    onChange={handleEdits}
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
                    value={edits.ll}
                    onChange={handleEdits}
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
                    value={edits.vit}
                    name="vit"
                    onChange={handleEdits}
                  >
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
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
                        value={edits.neo1}
                        onChange={handleEdits}
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
                        value={edits.neo2}
                        onChange={handleEdits}
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
                        value={edits.neo3}
                        onChange={handleEdits}
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
                    value={edits.vitA}
                    name="vitA"
                    onChange={handleEdits}
                  >
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
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
                    value={edits.imunisasi}
                    name="imunisasi"
                    onChange={handleEdits}
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
                        value={changeDateEdit(edits.tanggalMeninggal)}
                        onChange={handleEdits}
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
                        value={edits.penyebab}
                        onChange={handleEdits}
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
                    value={edits.keterangan}
                    onChange={handleEdits}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-4"
                >
                  <img
                    className="w-[22px] xl:w-[35px] mb-1"
                    src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg"
                    alt="saveform"
                  />
                  Simpan Perubahan
                </button>
              </form>
            </div>
          </dialog>
        </tr>
      );
    });
  };
  const renderTableRiwayat = () => {
    return bayiFilter.map((bayi) => {
      return (
        <tr key={bayi.id}>
          <td>{changeDateTable(bayi.kunjung)}</td>
          <td>{bayi.nama}</td>
          <td>{bayi.nik}</td>
          <td>{changeDateTable(bayi.tanggalLahir)}</td>
          <td>{bayi.jenisKelamin}</td>
          <td>{bayi.ibu}</td>
          <td>{bayi.nikIbu}</td>
          <td>{bayi.ayah}</td>
          <td>{bayi.nikAyah}</td>
          <td>{bayi.noHp}</td>
          <td>{bayi.alamat}</td>
          <td>{bayi.kia}</td>
          <td>{bayi.bb}</td>
          <td>{bayi.tb}</td>
          <td>{bayi.lk}</td>
          <td>{bayi.ll}</td>
          <td>{bayi.vit}</td>
          <td>{bayi.bb5}</td>
          <td>{bayi.neo1}</td>
          <td>{bayi.neo2}</td>
          <td>{bayi.neo3}</td>
          <td>{bayi.vitA}</td>
          <td>{bayi.imunisasi}</td>
          <td>{changeDateTable(bayi.tanggalMeninggal)}</td>
          <td>{bayi.keterangan}</td>
        </tr>
      );
    });
  };

  const [bulan, setBulan] = useState(0);

  useEffect(() => {
    getBayi();
    console.log(bulan);
  }, [bulan, search]);

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between mt-[110px] rounded-md bg-[#FFF4F4] font-semibold text-lg text-center w-[80%] h-9 xl:h-12 text-[#545454]">

      <img className="xl:hidden ml-3" src="/header/search.svg"></img>

        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-[260px] border-[2px] border-gray-400 rounded-[50px] shadow-md ml-2 bg-white scale-90">
          <img className="ml-[8px]" src="/header/search.svg"></img>
          <input
            className="focus:outline-none placeholder:text-center placeholder:text-neutral-600 placeholder:text-sm ml-[5px] w-[200px]"
            placeholder="Pencarian"
            type="text"
            value={keyword}
            onChange={handleKeyword}
          ></input>
          <button type="submit"></button>
        </form>

        <h3 className="ml-10">Data Bayi</h3>
        <Bulan setBulan={setBulan} />
      </div>
      <div
        id="printablediv"
        className="mt-10 bg-[#FFF4F4] rounded-md w-[80%] overflow-auto h-fit max-h-fit py-4 px-3"
      >
        <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
          <tbody>
            <tr>
              <th rowSpan={2}>Tanggal Kunjungan</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>Tanggal Lahir</th>
              <th rowSpan={2}>L/P</th>
              <th colSpan={5}>Data Orang Tua</th>
              <th rowSpan={2}>Alamat</th>
              <th rowSpan={2}>
                <p>K</p>
                <p>I</p>
                <p>A</p>
              </th>
              <th rowSpan={2}>BB</th>
              <th rowSpan={2}>TB</th>
              <th rowSpan={2}>LK</th>
              <th rowSpan={2}>LL</th>
              <th rowSpan={2}>
                <p>V</p>
                <p>I</p>
                <p>T</p>
              </th>
              <th colSpan={4}>Masa Neonatal</th>
              <th rowSpan={2}>Vit. A 6 Bulan</th>
              <th rowSpan={2}>Imunisasi</th>
              <th rowSpan={2}>Kematian Post Natal</th>
              <th rowSpan={2}>Keterangan</th>
              <th rowSpan={2}>Aksi</th>
            </tr>
            <tr>
              <th>Nama Ibu</th>
              <th>NIK</th>
              <th>Nama Ayah</th>
              <th>NIK</th>
              <th>No.HP</th>
              <th>Saat Lahir s.d 5 jam</th>
              <th>Pertama 6 s.d 48 jam</th>
              <th>Kedua hari ke-3 s.d ke-28</th>
              <th>Ketiga hari ke-8 s.d ke-28</th>
            </tr>
            {renderTable()}
          </tbody>
        </table>
      </div>

      <div className="mt-7 mb-10 w-[80%] flex items-center justify-end">
        <button
          onClick={() => {
            PrintData();
          }}
          className="btn bg-[#FEE] flex items-center justify-between px-7 rounded-3xl shadow-md normal-case"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 13 13"
            fill="none"
          >
            <rect
              x="2.7085"
              y="8.125"
              width="7.58333"
              height="2.16667"
              rx="1.08333"
              fill="#FF5757"
            />
            <path
              d="M6.49984 7.58334L6.07557 8.0076L6.49984 8.43186L6.9241 8.0076L6.49984 7.58334ZM7.09984 2.70834C7.09984 2.37697 6.83121 2.10834 6.49984 2.10834C6.16847 2.10834 5.89984 2.37697 5.89984 2.70834L7.09984 2.70834ZM3.36724 5.29927L6.07557 8.0076L6.9241 7.15907L4.21577 4.45074L3.36724 5.29927ZM6.9241 8.0076L9.63243 5.29927L8.78391 4.45074L6.07557 7.15907L6.9241 8.0076ZM7.09984 7.58334L7.09984 2.70834L5.89984 2.70834L5.89984 7.58334L7.09984 7.58334Z"
              fill="#222222"
            />
            <path
              d="M2.7085 8.66666L2.7085 9.20833C2.7085 9.80664 3.19352 10.2917 3.79183 10.2917L9.2085 10.2917C9.8068 10.2917 10.2918 9.80664 10.2918 9.20833V8.66666"
              stroke="#222222"
              stroke-width="1.2"
            />
          </svg>
          <p className="font-semibold">Cetak</p>
        </button>
      </div>

      {/* modal info bayi*/}
      <dialog id="modal_info_bayi" className="modal">
        <div className="modal-box xl:max-w-7xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Riwayat Data Pasien:</h3>

          <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
            <tbody>
              <tr>
                <th rowSpan={2}>Tanggal Kunjungan</th>
                <th rowSpan={2}>Nama</th>
                <th rowSpan={2}>NIK</th>
                <th rowSpan={2}>Tanggal Lahir</th>
                <th rowSpan={2}>L/P</th>
                <th colSpan={5}>Data Orang Tua</th>
                <th rowSpan={2}>Alamat</th>
                <th rowSpan={2}>
                  <p>K</p>
                  <p>I</p>
                  <p>A</p>
                </th>
                <th rowSpan={2}>BB</th>
                <th rowSpan={2}>TB</th>
                <th rowSpan={2}>LK</th>
                <th rowSpan={2}>LL</th>
                <th rowSpan={2}>
                  <p>V</p>
                  <p>I</p>
                  <p>T</p>
                </th>
                <th colSpan={4}>Masa Neonatal</th>
                <th rowSpan={2}>Vit. A 6 Bulan</th>
                <th rowSpan={2}>Imunisasi</th>
                <th rowSpan={2}>Kematian Post Natal</th>
                <th rowSpan={2}>Keterangan</th>
              </tr>
              <tr>
                <th>Nama Ibu</th>
                <th>NIK</th>
                <th>Nama Ayah</th>
                <th>NIK</th>
                <th>No.HP</th>
                <th>Saat Lahir s.d 5 jam</th>
                <th>Pertama 6 s.d 48 jam</th>
                <th>Kedua hari ke-3 s.d ke-28</th>
                <th>Ketiga hari ke-8 s.d ke-28</th>
              </tr>
              {renderTableRiwayat()}
            </tbody>
          </table>
        </div>
      </dialog>
    </main>
  );
};

export default DataBayi;
