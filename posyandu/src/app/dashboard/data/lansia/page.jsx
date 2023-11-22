"use client";
import React, { useState, useEffect } from "react";
import Bulan from "../../component/Bulan";
import axiosConfig from "../../../../utils/axios";

const DataLansia = () => {
  const [lansia, setLansia] = useState([]);
  const [lansiaFilter, setLansiaFilter] = useState([]);
  const [lansiaEdit, setLansiaEdit] = useState([]);

  const getLansia = async () => {
    try {
      const response = await axiosConfig.get(
        "http://localhost:3000/api/lansia"
      );
      if (response.data.status !== 400) {
        console.log("Berhasil menampilkan data");
      } else {
        alert(response.data.message);
      }

      console.log(response.data);
      setLansia(response.data.data);
    } catch (error) {
      // alert(error.data.message);
      console.log(error);
    }
  };

  const getLansiaFilter = async (lansia) => {
    try {
      const response = await axiosConfig.get(
        `http://localhost:3000/api/riwayat/lansia/${lansia.nik}`
      );

      if (response.data.status !== 400) {
        console.log("Berhasil menampilkan riwayat pasien");
      } else {
        alert(response.data.message);
      }

      console.log(response.data);
      setLansiaFilter(response.data.data);
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

  const delLansiaHapus = async (lansia) => {
    try {
      const response = await axiosConfig.delete(
        `http://localhost:3000/api/lansia/${lansia.id}`
      );
      if (response.data.status !== 400) {
        console.log("Berhasil mengambil id pasien");
        window.location.reload();
      } else {
        alert(response.data.message);
      }
      console.log(response.data);
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

  const getLansiaEdit = async (lansia) => {
    try {
      const response = await axiosConfig.get(
        `http://localhost:3000/api/lansia/${lansia.id}`
      );
      if (response.data.status !== 400) {
        console.log("Berhasil mengambil id pasien");
      } else {
        alert(response.data.message);
      }
      setLansiaEdit(response.data.data);
      lansiaEdit.tanggalLahir.toLocaleDateString();
      console.log(response.data);
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

  const patchLansiaEdit = async (lansia) => {
    try {
      const response = await axiosConfig.patch(
        `http://localhost:3000/api/lansia/${lansia.id}`
      );
      if (response.data.status !== 400) {
        console.log("Berhasil mengambil id pasien");
      } else {
        alert(response.data.message);
      }
      console.log(response.data);
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

  const PrintData = () => {
    //console.log('print');
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const renderTable = () => {
    return lansia.map((lansia, index) => {
      lansia.tanggalLahir = new Date(lansia.tanggalLahir);

      // Get the individual components
      let month = ("0" + (lansia.tanggalLahir.getMonth() + 1)).slice(-2);
      let day = ("0" + lansia.tanggalLahir.getDate()).slice(-2);
      let year = lansia.tanggalLahir.getFullYear().toString().slice(-2);

      // Format into a string in "DD/MM/YY" format
      let formattedDate = day + "/" + month + "/" + year;
      return (
        <tr key={lansia.id}>
          <td>{index + 1}</td>
          <td>{lansia.nama}</td>
          <td>{lansia.nik}</td>
          <td>{lansia.kk}</td>
          <td>{formattedDate}</td>
          <td>{lansia.jenisKelamin}</td>
          <td>{lansia.umur}</td>
          <td>{lansia.alamat}</td>
          <td>{lansia.bb}</td>
          <td>{lansia.tb}</td>
          <td>{lansia.tensi}</td>
          <td>{lansia.bpjs}</td>
          <td className="whitespace-nowrap">
            <button
              onClick={async () => {
                await getLansiaFilter(lansia);
                document.getElementById(`modal_info_lansia`).showModal();
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
                await getLansiaEdit(lansia);
                document.getElementById(`modal_edit_lansia`).showModal();
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
                document.getElementById(`modal_hapus_lansia`).showModal()
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
          <Aksi name="lansia" nik={lansia.nik} /> */}
          {/* modal info lansia*/}
          <dialog id="modal_hapus_lansia" className="modal">
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
                  await delLansiaHapus(lansia);
                }}
              >
                Ya
              </button>
            </div>
          </dialog>
          {/* modal edit lansia*/}
          <dialog id="modal_edit_lansia" className="modal">
            <div className="modal-box xl:max-w-7xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                action=""
                className="flex flex-col gap-[7px] text-[12px] xl:text-base mt-6 xl:mt-6 whitespace-normal"
              >
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
                    value={lansiaEdit.nik}
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
                    value={lansiaEdit.kk}
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
                    value={lansiaEdit.nama}
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
                    value={lansiaEdit.tanggalLahir}
                    required
                  />
                </div>

                <div className="flex gap-6 items-center xl:my-4">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Jenis Kelamin
                    <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <div className="flex flex-row gap-6 xl:gap-32">
                    <div className="flex gap-2">
                      <input
                        className="accent-pink-500"
                        type="radio"
                        name="jenkel"
                        id="pria"
                        checked
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
                    Alamat{" "}
                    <span className="text-red-500 absolute mt-[-6px]">*</span>
                  </label>
                  <textarea
                    className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none"
                    name="alamat"
                    id="alamat"
                    rows="3"
                    value={lansiaEdit.alamat}
                    required
                  ></textarea>
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Alamat Domisili KK
                    <span className="text-red-500 absolute mt-[-35px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <textarea
                    className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none"
                    name="alamat"
                    id="alamat"
                    rows="3"
                    value={lansiaEdit.alamatKK}
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
                    name="BB"
                    id="BB"
                    value={lansiaEdit.bb}
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
                    name="TB"
                    id="TB"
                    value={lansiaEdit.tb}
                    required
                  />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                  <label
                    className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]"
                    htmlFor=""
                  >
                    Tensi Darah (mmHg)
                    <span className="text-red-500 absolute mt-[-35px] xl:mt-[-6px]">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2"
                    type="text"
                    name="tensi"
                    id="tensi"
                    value={lansiaEdit.tensi}
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
                    name="BPJS"
                    id="BPJS"
                    value={lansiaEdit.bpjs}
                    required
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
        </tr>
      );
    });
  };
  const renderTableRiwayat = () => {
    return lansiaFilter.map((lansia, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{lansia.nama}</td>
          <td>{lansia.nik}</td>
          <td>{lansia.kk}</td>
          <td>{lansia.tanggalLahir}</td>
          <td>{lansia.jenisKelamin}</td>
          <td>{lansia.umur}</td>
          <td>{lansia.alamat}</td>
          <td>{lansia.bb}</td>
          <td>{lansia.tb}</td>
          <td>{lansia.tensi}</td>
          <td>{lansia.bpjs}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    getLansia();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between mt-[110px] rounded-md bg-[#FFF4F4] font-semibold text-lg text-center w-[80%] h-9 xl:h-12 text-[#545454]">
        <p></p>
        <h3 className="ml-10">Data Lansia</h3>
        <Bulan />
      </div>
      <div
        id="printablediv"
        className="mt-10 bg-[#FFF4F4] rounded-md w-[80%] overflow-auto h-fit max-h-fit py-4 px-3"
      >
        <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
          <tbody>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>NIK</th>
              <th>No. KK</th>
              <th>Tanggal Lahir</th>
              <th>Jenis Kelamin</th>
              <th>Umur</th>
              <th>Alamat</th>
              <th>BB</th>
              <th>TB</th>
              <th>Tensi Darah</th>
              <th>No. BPJS</th>
              <th>Aksi</th>
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

      {/* modal info lansia*/}
      <dialog id="modal_info_lansia" className="modal">
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
                <th>No.</th>
                <th>Nama</th>
                <th>NIK</th>
                <th>No. KK</th>
                <th>TTL</th>
                <th>Jenis Kelamin</th>
                <th>Umur</th>
                <th>Alamat</th>
                <th>BB</th>
                <th>TB</th>
                <th>Tensi Darah</th>
                <th>No. BPJS</th>
              </tr>
              {renderTableRiwayat()}
            </tbody>
          </table>
        </div>
      </dialog>
    </main>
  );
};

export default DataLansia;
