"use client";
import React from "react";
import Activity from "../component/Activity";
import { useRouter } from "next/navigation";

const ActivityScreen = () => {
    const router = useRouter();
  return (
    <main className="flex">
        <section className="mt-[56px] xl:mt-[100px] w-full xl:w-[85%] xl:mx-auto xl:border-2 xl:px-7 xl:py-5 xl:rounded-xl">
            <div className="grid grid-cols-dua items-center p-[15px] text-xs xl:text-base">
                <div className="flex items-center gap-2 xl:gap-5">
                    <p className="font-medium">Tampilkan</p>
                    <select className="bg-[#E0E0E0] rounded-[5px] h-[23px] xl:h-[35px] font-semibold" name="jumlah" id="jumlah">
                        <option className="mx-auto">20</option>
                        <option className="text-center">10</option>
                        <option className="text-center">8</option>
                        <option className="text-center">5</option>
                    </select>
                    <div className="xl:flex item-center mr-[6px] hidden">
                        <img className="xl:hidden" src="/header/search.svg"></img>
                        <div className="hidden xl:flex items-center w-[260px] h-[35p] border-[2px] border-gray-400 rounded-[50px] shadow-md">
                            <img className="ml-[8px]" src="/header/search.svg"></img>
                            <input
                                className="focus:outline-none placeholder:text-center placeholder:text-neutral-600 placeholder:text-sm ml-[5px] w-[200px]"
                                placeholder="Pencarian" type="text">
                            </input>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                  router.push("./activity/input");
                }} name="inputKegiatan" id="inputKegiatan" className="bg-[#FF5757;] w-fit xl:h-[50px] h-[25px] rounded-[5px] xl:rounded-[15px] text-white font-semibold text-sans xl:text-base p-2 xl:p-5 flex items-center gap-1 xl:gap-3 justify-self-end">
                    + Input Data Kegiatan
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="border-0 w-full text-xs xl:mt-2 xl:text-base table table-zebra text-center">
                    <tr className="border-0">
                        <th className="border-0">No</th>
                        <th className="border-0">Tanggal</th>
                        <th className="border-0">Kegiatan/Keterangan</th>
                        <th className="border-0">Aksi</th>
                    </tr>
                    <tr className="border-0">
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <Activity name="activity"/>
                    </tr>
                    <tr className="border-0">
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <Activity name="activity"/>
                    </tr>
                    <tr className="border-0">
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <Activity name="activity"/>
                    </tr>
                    <tr className="border-0">
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <Activity name="activity"/>
                    </tr>
                    <tr className="border-0">
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <td className="border-0"></td>
                        <Activity name="activity"/>
                    </tr>
                </table>
            </div>
            <div className="flex w-fit h-[17px] mt-4 xl:mt-8 xl:mb-7 mx-auto gap-[7px] xl:gap-[10px] text-xs xl:text-base font-medium items-center">
                <p className="text-[#9E9E9E]">Sebelumnya</p>
                <button className="bg-[#E0E0E0] py-[4px] xl:py-[6px] px-[12px] xl:px-[16px] self-center rounded-[5px] font-semibold">1</button>
                <button className="bg-[#E0E0E0] py-[4px] xl:py-[6px] px-[12px] xl:px-[16px] self-center rounded-[5px] font-semibold">2</button>
                <button className="bg-[#E0E0E0] py-[4px] xl:py-[6px] px-[12px] xl:px-[16px] self-center rounded-[5px] font-semibold">3</button>
                <p className="text-[#9E9E9E]">Selanjutnya</p>
            </div>
        </section> 
    </main>
  )
}

export default ActivityScreen;