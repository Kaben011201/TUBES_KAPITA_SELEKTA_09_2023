"use client";
import React, { useState } from "react";
import axiosConfig from "../../../../utils/axios";
import { useRouter } from "next/navigation";

const InputScreen = () => {
    const [inputs, setInputs] = useState({
        tanggal: "",
        kegiatan:"",
    });

    const router = useRouter();

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const addActivity = (e) => {
        e.preventDefault();
    
        const data = {
          tanggal: inputs.tanggal,
          kegiatan: inputs.kegiatan,
        };
        axiosConfig
        .post("http://localhost:3000/api/activity", data)
        .then(function (response) {
            if (response.data.status != 400) {
            alert("Berhasil menambahkan kegiatan!");
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
        <main className="flex flex-col xl:w-[80%] xl:mx-auto">
            <div className="bg-[#F2F1EF] m-[15px] mt-[64px] rounded-[5px] xl:rounded-[20px] p-[15px] xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
                <div className="text-xs xl:text-xl font-semibold p-3 text-center">
                    <p>Input Data Kegiatan</p>
                </div>

                <form onSubmit={addActivity} className="flex flex-col gap-[7px] text-xs xl:text-base my-2 xl:mt-6">
                    <div className="flex gap-3 xl:gap-4 items-center">
                        <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal<span className="text-red-500 absolute mt-[-6px]">*</span></label>
                        <input 
                            className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" 
                            type="date" 
                            name="tanggal" 
                            id="tanggal"
                            value={inputs.tanggal}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="flex gap-3 xl:gap-4 items-center">
                        <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan/ Kegiatan<span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">*</span></label>
                        <input 
                            className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" 
                            type="text" 
                            name="kegiatan" 
                            id="kegiatan" 
                            value={inputs.kegiatan}
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
            <button onClick={() => {
                    router.push("./");
                    }} id="back" className="bg-[#FF5757;] w-[110px] xl:w-[180px] xl:h-[50px] h-[35px] m-[15px] mt-3 rounded-[10px] xl:rounded-[15px] text-white font-semibold text-sans text-[14px] xl:text-xl p-2 xl:p-5 flex items-center justify-center pr-5 xl:pr-7 gap-1">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke="white" stroke-width="2"/>
                </svg>
                Kembali
            </button>
        </main>
    )
}

export default InputScreen;