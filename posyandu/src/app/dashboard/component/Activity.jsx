"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Activity = (props) => {
    const router = useRouter();
    return (
        <td className="whitespace-nowrap border-0">
            <button
                onClick={() =>
                document.getElementById(`modal_edit_${props.name}`).showModal()
                }
            >
                <svg className="xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                    <path d="M4.49595 13.8383L4.49597 13.8383L4.5221 13.8318L4.52211 13.8318L5.98342 13.4664C5.99961 13.4624 6.01576 13.4584 6.03187 13.4544C6.25064 13.4 6.46094 13.3478 6.65239 13.2394C6.84384 13.131 6.99686 12.9775 7.15603 12.8179C7.16775 12.8061 7.1795 12.7944 7.1913 12.7825L12.1121 7.86176L12.1252 7.84866C12.2796 7.69428 12.4163 7.55762 12.5222 7.43603C12.6348 7.30691 12.7422 7.16254 12.8156 6.98427C12.9763 6.59399 12.9763 6.15601 12.8156 5.76573C12.7422 5.58746 12.6348 5.44309 12.5222 5.31397C12.4163 5.19237 12.2796 5.05571 12.1252 4.90133L12.1121 4.88824L12.099 4.8751C11.9446 4.72072 11.8079 4.58406 11.6864 4.47809C11.5572 4.36554 11.4129 4.25817 11.2346 4.18476L11.0105 4.729L11.2346 4.18476C10.8443 4.02403 10.4063 4.02403 10.0161 4.18476C9.83779 4.25817 9.69342 4.36554 9.5643 4.47809C9.44271 4.58407 9.30605 4.72073 9.15167 4.87512L9.13856 4.88823L4.21778 9.80902C4.20597 9.82082 4.19419 9.83258 4.18244 9.84429C4.02281 10.0035 3.86937 10.1565 3.76097 10.3479L4.28309 10.6436L3.76097 10.3479C3.65257 10.5394 3.60031 10.7497 3.54595 10.9685C3.54195 10.9846 3.53793 11.0007 3.53388 11.0169L3.16202 12.5044C3.15961 12.514 3.15717 12.5237 3.15471 12.5335C3.1161 12.6876 3.07243 12.8619 3.05793 13.0101C3.04177 13.1753 3.04326 13.4745 3.28454 13.7158C3.52583 13.9571 3.82506 13.9586 3.99018 13.9424C4.13845 13.9279 4.31271 13.8842 4.46678 13.8456C4.47659 13.8432 4.48632 13.8407 4.49595 13.8383Z" stroke="#624DE3" stroke-width="1.2"/>
                    <path d="M8.85449 5.3125L11.6878 8.14583" stroke="#624DE3" stroke-width="1.2"/>
                </svg>
            </button>
            <button>
                <svg className="xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                    <path d="M6.72949 10.271L6.72949 8.146" stroke="#A30D11" stroke-linecap="round"/>
                    <path d="M10.2705 10.271L10.2705 8.146" stroke="#A30D11" stroke-linecap="round"/>
                    <path d="M2.125 4.604H14.875V4.604C14.4297 4.604 14.2071 4.604 14.0217 4.63931C13.2154 4.79286 12.5847 5.42352 12.4311 6.22988C12.3958 6.41528 12.3958 6.63791 12.3958 7.08317V9.9165C12.3958 11.701 12.3958 12.5932 11.8667 13.1675C11.8297 13.2077 11.7911 13.2462 11.751 13.2832C11.1767 13.8123 10.2845 13.8123 8.5 13.8123V13.8123C6.71551 13.8123 5.82327 13.8123 5.24897 13.2832C5.20885 13.2462 5.17026 13.2077 5.1333 13.1675C4.60417 12.5932 4.60417 11.701 4.60417 9.9165V7.08317C4.60417 6.63791 4.60417 6.41528 4.56886 6.22988C4.41532 5.42352 3.78465 4.79286 2.97829 4.63931C2.79289 4.604 2.57026 4.604 2.125 4.604V4.604Z" stroke="#A30D11" stroke-linecap="round"/>
                    <path d="M6.72884 2.4795C6.72884 2.4795 7.08301 1.771 8.49967 1.771C9.91634 1.771 10.2705 2.47933 10.2705 2.47933" stroke="#A30D11" stroke-linecap="round"/>
                </svg>
            </button>

            {/* Display Modal */}
            <dialog id="modal_edit_activity" className="modal">
                <div className="modal-box xl:max-w-7xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                        </button>
                    </form>
                    <form action="" className="flex flex-col gap-[7px] text-xs xl:text-base my-2 mt-6 whitespace-normal">
                        <div className="flex gap-3 xl:gap-4 items-center">
                            <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal<span className="text-red-500 absolute mt-[-6px]">*</span></label>
                            <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="tglkegiatan" id="tglkegiatan" required/>
                        </div>
                        <div className="flex gap-3 xl:gap-4 items-center">
                            <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan/ Kegiatan<span className="text-red-500 absolute mt-[-20px]">*</span></label>
                            <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="kegiatan" id="kegiatan" />
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
        </td>
    )
}

export default Activity;