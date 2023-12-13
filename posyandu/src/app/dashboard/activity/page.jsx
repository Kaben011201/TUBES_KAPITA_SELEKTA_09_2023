"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Bulan from "../component/Bulan";
import axiosConfig from "../../../utils/axios";

const ActivityScreen = () => {
    const [activity, setActivity] = useState([]);
    const router = useRouter();
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
        tanggal: "",
        kegiatan:"",
    });

    const handleEdits = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEdits((values) => ({ ...values, [name]: value }));
      };
    
      const getActivity = async () => {
        try {
          const response = await axiosConfig.get(
            "api/activity", {params : {month: bulan, query : search},
          });
          if (response.data.status !== 400) {
          } else {
            alert(response.data.message);
          }
          setActivity(response.data.data);
        } catch (error) {
          // alert(error.data.message);
          console.log(error);
        }
      };
    
    const delActivityHapus = async (activity) => {
        try {
          const response = await axiosConfig.delete(
            `api/activity/${activity.id}`
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

    const getActivityEdit = async (activity) => {
        try {
          const response = await axiosConfig.get(
            `api/activity/${activity.id}`
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

    const patchActivityEdit = (e) => {
        e.preventDefault();
    
        const data = {
          tanggal: edits.tanggal,
          kegiatan: edits.kegiatan,
        };
    
        axiosConfig
          .patch(`api/activity/${edits.id}`, data)
          .then(function (response) {
            if (response.data.status != 400) {
              alert("Berhasil mengedit data Activity!");
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


    const renderTable = () => {
        return activity.map((activity) => {
          return (
            <tr key={activity.id}>
                <td>{changeDateTable(activity.tanggal)}</td>
                <td>{activity.kegiatan}</td>
                <td className="whitespace-nowrap border-0">

                <div className="tooltip" data-tip="Edit">
                  <button
                      onClick={async () => {
                          await getActivityEdit(activity);
                          document.getElementById(`modal_edit_activity`).showModal();
                      }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M2 10.9125V12.8125C2 12.9875 2.14667 13.125 2.33333 13.125H4.36C4.44667 13.125 4.53333 13.0938 4.59333 13.0313L11.8733 6.2125L9.37333 3.86875L2.1 10.6875C2.03333 10.75 2 10.825 2 10.9125ZM13.8067 4.4C13.8685 4.34218 13.9175 4.2735 13.951 4.19789C13.9844 4.12228 14.0016 4.04123 14.0016 3.95938C14.0016 3.87752 13.9844 3.79647 13.951 3.72086C13.9175 3.64525 13.8685 3.57657 13.8067 3.51875L12.2467 2.05625C12.185 1.99831 12.1117 1.95234 12.0311 1.92098C11.9504 1.88962 11.864 1.87347 11.7767 1.87347C11.6894 1.87347 11.6029 1.88962 11.5223 1.92098C11.4416 1.95234 11.3683 1.99831 11.3067 2.05625L10.0867 3.2L12.5867 5.54375L13.8067 4.4Z"
                        fill="#545454"
                      />
                    </svg>
          
                  </button>
                </div>

                <div className="tooltip" data-tip="Hapus">
                  <button
                      onClick={() =>
                          document.getElementById(`modal_hapus_activity`).showModal()
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
                </div>

                {/* Display Modal */}
                <dialog id="modal_edit_activity" className="modal">
                    <div className="modal-box xl:max-w-7xl">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                            </button>
                        </form>
                        <form onSubmit={patchActivityEdit} className="flex flex-col gap-[7px] text-xs xl:text-base my-2 mt-6 whitespace-normal">
                            <div className="flex gap-3 xl:gap-4 items-center">
                                <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal<span className="text-red-500 absolute mt-[-6px]">*</span></label>
                                <input 
                                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" 
                                    type="date" 
                                    name="tanggal" 
                                    id="tanggal"
                                    value={changeDateEdit(edits.tanggal)  }
                                    onChange={handleEdits}
                                    required/>
                            </div>
                            <div className="flex gap-3 xl:gap-4 items-center">
                                <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan/ Kegiatan<span className="text-red-500 absolute mt-[-20px]">*</span></label>
                                <input 
                                    className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" 
                                    type="text" 
                                    name="kegiatan" 
                                    id="kegiatan" 
                                    value={edits.kegiatan}
                                    onChange={handleEdits}
                                    />
                            </div>

                            <button type="submit" name="tambah" id="tambah" className="bg-[#FF5757;] w-[120px] xl:w-[220px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[10px] xl:rounded-[15px] text-white font-semibold text-sans text-xs xl:text-base p-2 xl:p-5 flex items-center gap-1 xl:gap-3">
                            <svg className="xl:w-[21px] xl:h-[21px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="6.75" fill="white"/>
                                <path d="M9 11.25L9 6.75" stroke="#222222" stroke-width="1.2" stroke-linecap="square"/>
                                <path d="M11.25 9L6.75 9" stroke="#222222" stroke-width="1.2" stroke-linecap="square"/>
                            </svg>
                            Simpan Perubahan
                            </button>
                        </form>

                    </div>
                </dialog>
                <dialog id="modal_hapus_activity" className="modal">
                    <div className="modal-box xl:max-w-xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Hapus Data</h3>
                    <p>Apakah anda yakin ingin menghapus data kegiatan ini?</p>
                    <button
                        className="btn btn-error mt-4 px-20"
                        onClick={async () => {
                        await delActivityHapus(activity);
                        }}
                    >
                        Ya
                    </button>
                    </div>
                </dialog>
                </td>
            </tr>
          );
        });
    };

    const [bulan, setBulan] = useState(0);

    useEffect(() => {
      getActivity();
    }, [bulan, search]);

    return (
        <main className="flex flex-col">
            <div className="flex items-center mx-auto justify-between mt-[70px] xl:mt-[110px] rounded-md bg-[#FFF4F4] font-semibold text-lg text-center w-[85%] h-9 xl:h-12 text-[#545454]">
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
              <p className="ml-10 text-xs xl:text-xl">Data Kegiatan</p>
              <Bulan setBulan={setBulan} />
            </div>
            <section className="mt-[10px] xl:mt-[20px] w-[85%] mx-auto xl:border-2 xl:px-7 xl:py-5 xl:rounded-xl">
                <div className="flex items-center p-[15px] text-xs xl:text-base justify-end">
                    <button onClick={() => {
                    router.push("./activity/input");
                    }} id="inputKegiatan" className="bg-[#FF5757;] w-fit xl:h-[50px] h-[25px] rounded-[5px] xl:rounded-[15px] text-white font-semibold text-sans xl:text-base p-2 xl:p-5 flex items-center gap-1 xl:gap-3">
                        + Input Data Kegiatan
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs xl:mt-2 xl:text-base table table-zebra text-center">
                        <tr className="">
                            <th className="">Tanggal</th>
                            <th className="">Kegiatan/Keterangan</th>
                            <th className="">Aksi</th>
                        </tr>
                        <tbody>
                            {renderTable()}                        
                        </tbody>
                    </table>
                </div>
            </section> 
        </main>
    )
}

export default ActivityScreen;