"use client";
import React, { useState, useEffect } from "react";
import Bulan from "../../component/Bulan";
import axiosConfig from "../../../../utils/axios";

const DataIbuHamil = () => {
  const [bumil, setBumil] = useState([]);
  const [bumilFilter, setBumilFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(keyword);
  };

  const [edits, setEdits] = useState({
    hadir: "",
    kunjung: "",
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
    keterangan: "",
  });

  const [inputs, setInputs] = useState({
    hadir: "",
    kunjung: "",
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
    keterangan: "",
  });

  const handleEdits = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdits((values) => ({ ...values, [name]: value }));
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getBumil = async () => {
    try {
      const response = await axiosConfig.get("api/bumil", {
        params: { month: bulan, query: search },
      });
      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setBumil(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBumilFilter = async (bumil) => {
    try {
      const response = await axiosConfig.get(
        `api/riwayat/ibu-hamil/${bumil.nik}`
      );

      if (response.data.status !== 400) {
      } else {
        alert(response.data.message);
      }
      setBumilFilter(response.data.data);
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

  const delBumilHapus = async (bumil) => {
    try {
      const response = await axiosConfig.delete(`api/bumil/${bumil.id}`);
      if (response.data.status !== 400) {
        alert("Berhasil menghapus data bumil!");
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

  const getBumilEdit = async (bumil) => {
    try {
      const response = await axiosConfig.get(`api/bumil/${bumil.id}`);
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

  const patchBumilEdit = (e) => {
    e.preventDefault();

    const data = {
      hadir: edits.hadir,
      kunjung: edits.kunjung,
      nama: edits.nama,
      nik: edits.nik,
      kk: edits.kk,
      tanggalLahir: new Date(edits.tanggalLahir),
      umur: parseInt(edits.umur),
      alamat: edits.alamat,
      alamatKK: edits.alamatKK,
      bb: parseFloat(edits.bb),
      tb: parseFloat(edits.tb),
      usiaHamil: parseFloat(edits.usiaHamil),
      lingkarLengan: parseFloat(edits.lingkarLengan),
      g: parseInt(edits.g),
      p: parseInt(edits.p),
      a: parseInt(edits.a),
      hpht: new Date(edits.hpht),
      tp: new Date(edits.tp),
      hb: edits.hb,
      namaSuami: edits.namaSuami,
      nikSuami: edits.nikSuami,
      tanggalLahirSuami: new Date(edits.tanggalLahirSuami),
      noHp: edits.noHp,
      bpjs: edits.bpjs,
      keterangan: edits.keterangan,
    };

    axiosConfig
      .patch(`api/bumil/${edits.id}`, data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Berhasil mengedit data bumil!");
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

  const tambahBumil = (e) => {
    e.preventDefault();

    const data = {
      hadir: inputs.hadir,
      kunjung: inputs.kunjung,
      nama: edits.nama,
      nik: edits.nik,
      kk: edits.kk,
      tanggalLahir: new Date(edits.tanggalLahir),
      umur: parseInt(edits.umur),
      alamat: edits.alamat,
      alamatKK: edits.alamatKK,
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
      namaSuami: edits.namaSuami,
      nikSuami: edits.nikSuami,
      tanggalLahirSuami: new Date(edits.tanggalLahirSuami),
      noHp: edits.noHp,
      bpjs: edits.bpjs,
      keterangan: inputs.keterangan,
    };

    axiosConfig
      .post(`http://localhost:3000/api/bumil/`, data)
      .then(function (response) {
        if (response.data.status != 400) {
          alert("Berhasil menambahkan data bumil!");
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
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const renderTable = () => {
    return bumil.map((bumil) => {
      return (
        <tr key={bumil.id}>
          <td>{changeDateTable(bumil.kunjung)}</td>
          <td>{bumil.nama}</td>
          <td>{bumil.nik}</td>
          <td>{bumil.kk}</td>
          <td>{changeDateTable(bumil.tanggalLahir)}</td>
          <td>{bumil.umur}</td>
          <td>{bumil.namaSuami}</td>
          <td>{bumil.nikSuami}</td>
          <td>{changeDateTable(bumil.tanggalLahirSuami)}</td>
          <td>{bumil.alamat}</td>
          <td>{bumil.alamatKK}</td>
          <td>{bumil.bb}</td>
          <td>{bumil.tb}</td>
          <td>{bumil.usiaHamil}</td>
          <td>{bumil.lingkarLengan}</td>
          <td>{`G:${bumil.g} P:${bumil.p} A:${bumil.a}`}</td>
          <td>{changeDateTable(bumil.hpht)}</td>
          <td>{changeDateTable(bumil.tp)}</td>
          <td>{bumil.hb}</td>
          <td>{bumil.bpjs}</td>
          <td>{bumil.noHp}</td>
          <td>{bumil.keterangan}</td>
          <td>{bumil.hadir}</td>
          <td className="whitespace-nowrap">
            <button
              onClick={async () => {
                await getBumilFilter(bumil);
                document.getElementById(`modal_info_bumil`).showModal();
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
            {/* Tambah data*/}
            <button
              onClick={async () => {
                await getBumilEdit(bumil);
                document.getElementById(`modal_tambah_bumil`).showModal();
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.5999 1.6001C3.28164 1.6001 2.97642 1.72653 2.75137 1.95157C2.52633 2.17661 2.3999 2.48184 2.3999 2.8001V13.2001C2.3999 13.5184 2.52633 13.8236 2.75137 14.0486C2.97642 14.2737 3.28164 14.4001 3.5999 14.4001H12.3999C12.7182 14.4001 13.0234 14.2737 13.2484 14.0486C13.4735 13.8236 13.5999 13.5184 13.5999 13.2001V6.0969C13.5996 5.77875 13.473 5.47373 13.2479 5.2489L9.9519 1.9513C9.84032 1.83979 9.70785 1.75137 9.56207 1.69111C9.41628 1.63085 9.26005 1.59992 9.1023 1.6001H3.5999ZM7.9999 6.4001C8.15903 6.4001 8.31164 6.46331 8.42417 6.57583C8.53669 6.68836 8.5999 6.84097 8.5999 7.0001V8.2001H9.7999C9.95903 8.2001 10.1116 8.26331 10.2242 8.37583C10.3367 8.48836 10.3999 8.64097 10.3999 8.8001C10.3999 8.95923 10.3367 9.11184 10.2242 9.22436C10.1116 9.33688 9.95903 9.4001 9.7999 9.4001H8.5999V10.6001C8.5999 10.7592 8.53669 10.9118 8.42417 11.0244C8.31164 11.1369 8.15903 11.2001 7.9999 11.2001C7.84077 11.2001 7.68816 11.1369 7.57564 11.0244C7.46312 10.9118 7.3999 10.7592 7.3999 10.6001V9.4001H6.1999C6.04077 9.4001 5.88816 9.33688 5.77564 9.22436C5.66312 9.11184 5.5999 8.95923 5.5999 8.8001C5.5999 8.64097 5.66312 8.48836 5.77564 8.37583C5.88816 8.26331 6.04077 8.2001 6.1999 8.2001H7.3999V7.0001C7.3999 6.84097 7.46312 6.68836 7.57564 6.57583C7.68816 6.46331 7.84077 6.4001 7.9999 6.4001Z"
                  fill="#545454"
                />
              </svg>
            </button>
            <button
              onClick={async () => {
                await getBumilEdit(bumil);
                document.getElementById(`modal_edit_bumil`).showModal();
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
                document.getElementById(`modal_hapus_bumil`).showModal()
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
          {/* 
          <Aksi name="bumil" nik={bumil.nik} /> */}
          {/* modal info bumil*/}
          <dialog id="modal_hapus_bumil" className="modal">
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
                  await delBumilHapus(bumil);
                }}
              >
                Ya
              </button>
            </div>
          </dialog>

          {/* modal edit bumil*/}
          <dialog id="modal_edit_bumil" className="modal">
            <div className="modal-box xl:max-w-7xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                onSubmit={patchBumilEdit}
                className="flex flex-col gap-[7px] text-[12px] xl:text-base mt-6 xl:mt-6 whitespace-normal"
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
                    value={edits.hadir}
                    name="hadir"
                    onChange={handleEdits}
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
                    Tanggal Kunjungan{" "}
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
                    No KK
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="kk"
                    id="kk"
                    onChange={handleEdits}
                    value={edits.kk}
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] "
                    htmlFor=""
                  >
                    Nama Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="nama"
                    id="nama"
                    onChange={handleEdits}
                    value={edits.nama}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium"
                    htmlFor=""
                  >
                    NIK Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="nik"
                    id="nik"
                    onChange={handleEdits}
                    value={edits.nik}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] text-[11px] xl:text-base"
                    htmlFor=""
                  >
                    Tanggal Lahir Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
                    type="date"
                    name="tanggalLahir"
                    id="tanggalLahir"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.tanggalLahir)}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Umur Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="umur"
                    id="umur"
                    onChange={handleEdits}
                    value={edits.umur}
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
                    onChange={handleEdits}
                    value={edits.namaSuami}
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
                    onChange={handleEdits}
                    value={edits.nikSuami}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Tanggal Lahir Suami
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
                    type="date"
                    name="tanggalLahirSuami"
                    id="tanggalLahirSuami"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.tanggalLahirSuami)}
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
                    onChange={handleEdits}
                    value={edits.alamat}
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
                    onChange={handleEdits}
                    value={edits.alamatKK}
                    required
                  ></textarea>
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
                    onChange={handleEdits}
                    value={edits.bb}
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
                    onChange={handleEdits}
                    value={edits.tb}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-semibold leading-[1.2] text-[10px] xl:text-base xl:font-medium"
                    htmlFor=""
                  >
                    Usia Kehamilan (bulan)
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="usiaHamil"
                    id="usiaHamil"
                    onChange={handleEdits}
                    value={edits.usiaHamil}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Lingkar Lengan (cm)
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="lingkarLengan"
                    id="lingkarLengan"
                    onChange={handleEdits}
                    value={edits.lingkarLengan}
                    required
                  />
                </div>

                <div className="flex gap-8 xl:gap-8">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    GPA{" "}
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
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
                        onChange={handleEdits}
                        value={edits.g}
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
                        onChange={handleEdits}
                        value={edits.p}
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
                        onChange={handleEdits}
                        value={edits.a}
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
                    HPHT
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="date"
                    name="hpht"
                    id="hpht"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.hpht)}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    TP
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="date"
                    name="tp"
                    id="tp"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.tp)}
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
                    onChange={handleEdits}
                    value={edits.hb}
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
                    onChange={handleEdits}
                    value={edits.noHp}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    No. BPJS
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="bpjs"
                    id="bpjs"
                    onChange={handleEdits}
                    value={edits.bpjs}
                    required
                  />
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
                  className="bg-[#FF5757;] w-[150px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[12px] xl:text-sm pr-1 flex items-center justify-center gap-1"
                >
                  <img
                    className="w-[20px] xl:w-[35px] mb-1"
                    src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg"
                    alt="saveform"
                  />
                  Simpan Perubahan
                </button>
              </form>
            </div>
          </dialog>

          {/* modal tambah bumil*/}
          <dialog id="modal_tambah_bumil" className="modal">
            <div className="modal-box xl:max-w-7xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                onSubmit={tambahBumil}
                className="flex flex-col gap-[7px] text-[12px] xl:text-base mt-6 xl:mt-6 whitespace-normal"
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
                    onChange={handleInputs}
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
                    Tanggal Kunjungan{" "}
                    <span className="text-red-500 absolute mt-[-20px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="date"
                    name="kunjung"
                    id="kunjung"
                    value={inputs.kunjung}
                    onChange={handleInputs}
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
                    onChange={handleEdits}
                    value={edits.kk}
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] "
                    htmlFor=""
                  >
                    Nama Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="nama"
                    id="nama"
                    onChange={handleEdits}
                    value={edits.nama}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium"
                    htmlFor=""
                  >
                    NIK Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="nik"
                    id="nik"
                    onChange={handleEdits}
                    value={edits.nik}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] text-[11px] xl:text-base"
                    htmlFor=""
                  >
                    Tanggal Lahir Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
                    type="date"
                    name="tanggalLahir"
                    id="tanggalLahir"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.tanggalLahir)}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Umur Ibu Hamil
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="umur"
                    id="umur"
                    onChange={handleEdits}
                    value={edits.umur}
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
                    onChange={handleEdits}
                    value={edits.namaSuami}
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
                    onChange={handleEdits}
                    value={edits.nikSuami}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Tanggal Lahir Suami
                    <span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2"
                    type="date"
                    name="tanggalLahirSuami"
                    id="tanggalLahirSuami"
                    onChange={handleEdits}
                    value={changeDateEdit(edits.tanggalLahirSuami)}
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
                    onChange={handleEdits}
                    value={edits.alamat}
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
                    onChange={handleEdits}
                    value={edits.alamatKK}
                    required
                  ></textarea>
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
                    onChange={handleInputs}
                    value={inputs.bb}
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
                    onChange={handleInputs}
                    value={inputs.tb}
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-semibold leading-[1.2] text-[10px] xl:text-base xl:font-medium"
                    htmlFor=""
                  >
                    Usia Kehamilan (bulan)
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="usiaHamil"
                    id="usiaHamil"
                    onChange={handleInputs}
                    value={inputs.usiaHamil}
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
                    name="lingkarLengan"
                    id="lingkarLengan"
                    onChange={handleInputs}
                    value={inputs.lingkarLengan}
                  />
                </div>

                <div className="flex gap-8 xl:gap-8">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    GPA{" "}
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
                        onChange={handleInputs}
                        value={inputs.g}
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
                        onChange={handleInputs}
                        value={inputs.p}
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
                        onChange={handleInputs}
                        value={inputs.a}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    HPHT
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="date"
                    name="hpht"
                    id="hpht"
                    onChange={handleInputs}
                    value={changeDateEdit(inputs.hpht)}
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    TP
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="date"
                    name="tp"
                    id="tp"
                    onChange={handleInputs}
                    value={changeDateEdit(inputs.tp)}
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    HB (g/dL)
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="number"
                    name="hb"
                    id="hb"
                    onChange={handleInputs}
                    value={inputs.hb}
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
                    onChange={handleEdits}
                    value={edits.noHp}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    No. BPJS
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="bpjs"
                    id="bpjs"
                    onChange={handleEdits}
                    value={edits.bpjs}
                    required
                  />
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
                    onChange={handleInputs}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#FF5757;] w-[150px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[12px] xl:text-sm pr-1 flex items-center justify-center gap-1"
                >
                  <img
                    className="w-[20px] xl:w-[35px] mb-1"
                    src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg"
                    alt="saveform"
                  />
                  Tambah Data
                </button>
              </form>
            </div>
          </dialog>
        </tr>
      );
    });
  };
  
  const renderTableRiwayat = () => {
    return bumilFilter.map((bumil) => {
      return (
        <tr key={bumil.id}>
          <td>{changeDateTable(bumil.kunjung)}</td>
          <td>{bumil.nama}</td>
          <td>{bumil.nik}</td>
          <td>{bumil.kk}</td>
          <td>{changeDateTable(bumil.tanggalLahir)}</td>
          <td>{bumil.umur}</td>
          <td>{bumil.namaSuami}</td>
          <td>{bumil.nikSuami}</td>
          <td>{changeDateTable(bumil.tanggalLahirSuami)}</td>
          <td>{bumil.alamat}</td>
          <td>{bumil.alamatKK}</td>
          <td>{bumil.bb}</td>
          <td>{bumil.tb}</td>
          <td>{bumil.usiaHamil}</td>
          <td>{bumil.lingkarLengan}</td>
          <td>{`G:${bumil.g} P:${bumil.p} A:${bumil.a}`}</td>
          <td>{changeDateTable(bumil.hpht)}</td>
          <td>{changeDateTable(bumil.tp)}</td>
          <td>{bumil.hb}</td>
          <td>{bumil.bpjs}</td>
          <td>{bumil.noHp}</td>
          <td>{bumil.keterangan}</td>
          <td>{bumil.hadir}</td>
        </tr>
      );
    });
  };

  const [bulan, setBulan] = useState(0);

  useEffect(() => {
    getBumil();
  }, [bulan, search]);

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between mt-[110px] rounded-md bg-[#FFF4F4] font-semibold text-lg text-center w-[80%] h-9 xl:h-12 text-[#545454]">
        <div className="xl:hidden dropdown dropdown-bottom">
          <label tabIndex={0}>
            <img className="ml-3" src="/header/search.svg"></img>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <form onSubmit={handleSearch}>
                <input
                  className="focus:outline-none placeholder:text-center placeholder:text-neutral-600 placeholder:text-sm ml-[5px] w-[200px]"
                  placeholder="Pencarian"
                  type="text"
                  value={keyword}
                  onChange={handleKeyword}
                ></input>
                <button type="submit"></button>
              </form>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSearch}
          className="hidden xl:flex items-center w-[260px] border-[2px] border-gray-400 rounded-[50px] shadow-md ml-2 bg-white scale-90"
        >
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
        <h3 className="ml-10">Data Ibu Hamil</h3>
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
              <th rowSpan={2}>No. KK</th>
              <th rowSpan={2}>Tanggal Lahir</th>
              <th rowSpan={2}>Umur</th>
              <th colSpan={3}>Data Suami</th>
              <th rowSpan={2}>Alamat</th>
              <th rowSpan={2}>Alamat KK</th>
              <th rowSpan={2}>BB</th>
              <th rowSpan={2}>TB</th>
              <th rowSpan={2}>UK</th>
              <th rowSpan={2}>LL</th>
              <th rowSpan={2}>
                <p>G</p>
                <p>P</p>
                <p>A</p>
              </th>
              <th rowSpan={2}>
                <p>H</p>
                <p>P</p>
                <p>H</p>
                <p>T</p>
              </th>
              <th rowSpan={2}>TP</th>
              <th rowSpan={2}>HB</th>
              <th rowSpan={2}>No. BPJS</th>
              <th rowSpan={2}>No. HP</th>
              <th rowSpan={2}>Keterangan</th>
              <th rowSpan={2}>Kehadiran</th>
              <th rowSpan={2}>Aksi</th>
            </tr>
            <tr>
              <th>Nama</th>
              <th>NIK</th>
              <th>Tanggal Lahir</th>
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

      {/* modal info*/}
      <dialog id="modal_info_bumil" className="modal">
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
                <th rowSpan={2}>No.</th>
                <th rowSpan={2}>Nama</th>
                <th rowSpan={2}>NIK</th>
                <th rowSpan={2}>No. KK</th>
                <th rowSpan={2}>Tanggal Lahir</th>
                <th rowSpan={2}>Umur</th>
                <th colSpan={3}>Data Suami</th>
                <th rowSpan={2}>Alamat</th>
                <th rowSpan={2}>Alamat KK</th>
                <th rowSpan={2}>BB</th>
                <th rowSpan={2}>TB</th>
                <th rowSpan={2}>UK</th>
                <th rowSpan={2}>LL</th>
                <th rowSpan={2}>
                  <p>G</p>
                  <p>P</p>
                  <p>A</p>
                </th>
                <th rowSpan={2}>
                  <p>H</p>
                  <p>P</p>
                  <p>H</p>
                  <p>T</p>
                </th>
                <th rowSpan={2}>TP</th>
                <th rowSpan={2}>HB</th>
                <th rowSpan={2}>No. BPJS</th>
                <th rowSpan={2}>No. HP</th>
                <th rowSpan={2}>Keterangan</th>
                <th rowSpan={2}>Kehadiran</th>
              </tr>
              <tr>
                <th>Nama</th>
                <th>NIK</th>
                <th>Tanggal Lahir</th>
              </tr>
              {renderTableRiwayat()}
            </tbody>
          </table>
        </div>
      </dialog>
    </main>
  );
};

export default DataIbuHamil;
